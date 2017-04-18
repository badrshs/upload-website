
function User(id, name, ignored, externalId, color, profileUrl, photoUrl,
              gender, age) {
    this.id = id;
    this.name = name;
    // this.active=active;
    this.ignored = ignored;

    // alert(this.id + " / " + this.name + " - " + this.ignored);
    this.externalId = externalId;
    this.color = color;

    if (profileUrl != "null") {
        this.profileUrl = profileUrl;
    }
    if (photoUrl != "null") {
        this.photoUrl = photoUrl;
    }
    this.gender = gender;
    this.age = age != "null" ? age : 0;
}

if (window.console) {
    log = function (txt) {
        console.log(txt)
    };
}
else {
    log = function (txt) {
    };
}

//HTML5™, baby! http://mathiasbynens.be/notes/document-head
document.head = document.head || document.getElementsByTagName('head')[0];

jQuery(function () {



    //jQuery("#top").resizable();

    jQuery.ajaxSetup({
        url: "/api/chat",
        global: false,
        type: "GET",
        dataType: "text",
        async: true
    });



    getData();

    $(document).keypress(onUserActivity);
    $(document).click(onUserActivity);
    $(document).mousemove(onUserActivity);
    $(window).bind("focus", onUserActivity);

    $("#loginNick").keyup(function () {
        $("#loginTermsOfUse").removeAttr("checked");
    });
    $('#deletePhotoLink').bind("click", function () {
        deleteFile();
        return false;
    });


    soundManager.url = '//cdn.stinto.net/swf';
    soundManager.onready(function () {
        soundManager.createSound('userJoined', '//cdn.stinto.net/snd/userJoined.mp3');
        soundManager.createSound('msg', '//cdn.stinto.net/snd/msg.mp3');
    });

    $(window).resize(doLayout);
    $('#tb-emoji').click(toggleEmojiSheet);
    $('#tb-lock').click(toggleRoomLocked);
    $('#tb-scrollLock').click(toggleScrollLock);
    $('#tb-sound').click(showSoundSettings);
    $('#tb-theme').click(toggleTheme);
    $('#tb-quit').click(quit);
    doLayout();

    updateEmojiSheet();


});


function login() {
    var nick = $('#loginNick').val();
    jQuery.ajax({
        data: "channel=3zeml&action=login&nick=" + encodeURIComponent(nick) + "&termsOfUse=" + $('#loginTermsOfUse:checked').val(),
        type: "POST",
            success: loginSuccessful,
        error: loginFailed
    });

    localStorage.lastNick = nick;
}

function loginSuccessful(data, textStatus) {
    $('#loginDialog').modal('hide');
    getData();
    $('#msg').focus();
}

function loginFailed(xhr, textStatus, errorThrown) {
    log(xhr);
    $('#loginError').html(xhr.responseText);
    $('#loginError').fadeIn(2000);

}

var lastMessageId = -1;
var lastGetDataTimeout;
var dataFetchDelay = 500;
resetDataFetchDelay();
var alt = false;

var thisUserId = -1;
var users = new Array();
var id2user = new Object();

var themeName = localStorage.theme || 'light';
var themes = new Themes();
var theme;
setTheme(themeName);

var colors = new Array(theme.userColors);

var getDataInProgress = false;
var currentGetDataRequest;

var heartBeat;

var scrollLock = false;
var scrollLockOverride = false;
var lastScrollLockOverrideTimeout;
var roomLocked =false;

var sound = parseInt(localStorage.sound);

var doGetUserList = true;
var doGetFiles = true;
var firstRequest = true;

var hasQuit = false;

var chatUrl = "http://stin.to/3zeml";

var messagesInHistoryCount = 0;

var showEmojiSheet = parseInt(localStorage.showEmojiSheet || 0);

var windowHasfocus = false;
window.onfocus = function () {
    windowHasfocus = true;
    onUserActivity();
}
window.onblur = function () {
    windowHasfocus = false;
}

function resetDataFetchDelay() {
    dataFetchDelay = 1000;
}

function showThrobber(b) {
    document.getElementById("throbber").style.visibility = b ? 'visible' : 'hidden'
}

function getData() {

    clearTimeout(heartBeat);
    heartBeat = window.setTimeout("getDataInProgress=false;getData()", 60 * 1000);

    if (!getDataInProgress) {
        getDataInProgress = true;
        abortCurrentGetDataRequest();
        currentGetDataRequest = jQuery.ajax({
            data: "channel=3zeml&action=getMessages&latestId=" + lastMessageId,
            success: processServerData,
            error: handleError
        });
    }
}

function abortCurrentGetDataRequest() {
    if (currentGetDataRequest) currentGetDataRequest.abort();
}


function handleError(xhr, textStatus, errorThrown) {
    getDataInProgress = false;
    var data = xhr.responseText;

    //alert(xhs.status);

    if (data == "LOGIN_REQUIRED") {

    
        $('#loginNick').focus();
        $('#loginDialog').modal({close: false, backdrop: 'static'});
    }
    else if (data == "JOIN_REQUIRED") {
        if (!hasQuit) {
            jQuery.ajax({
                data: "channel=3zeml&action=join",
                type: "POST",
                            success: getData,
                error: handleError
            });
        }
    }
    else {
        if (xhr.status != 401)
            $('#connectionProblem').modal({close: false, backdrop: 'static'});

        resetDataFetchDelay();
        scheduleNextGetData();
    }
}

function processServerData(data, textStatus) {
    getDataInProgress = false;

    log(textStatus);
    log(data);

    $('#connectionProblem').modal('hide');

//	alert(data);

    var doNotification = "";
    if (thisUserId == -1) {
            getUserList();
    }
    else {


        var titleToSet = "";

        var lines = data.split("\n");
        for (var i in lines) {
            var line = lines[i];
            var args = line.split("\t");

                            var i = 0
            var msgId = parseInt(args[i++]);
            if (msgId <= lastMessageId)
                continue;

                            if (lastMessageId < 0 && firstRequest)
                    addSysMessage("", "Welcome! The link to this chat is: <u>" + chatUrl +"</u>. Send it to others, if you want to invite them to join.");
            
            var cmd = args[i++];
            if (cmd == 'M') {
                var userId = parseInt(args[i++]);

                var user = id2user[userId];

                            if (!user || !user.ignored) {

                    var userName = args[i++];
                    var date = args[i++];
                    var msgText = args[i++];

                    if (msgText != "") {
                                            titleToSet = '"' + $('<div/>').html(msgText).text().substr(0, 33) + '"';

                    
                        var neuSpan = document.createElement('div');
                        var isSysMsg = (parseInt(userId) <= 0);
                        var cn = isSysMsg ? "sysmessage" : "message";

                        if (alt) {
                            cn += " alt";
                        }
                        alt = !alt;

                        neuSpan.setAttribute('class', cn);
                        neuSpan.setAttribute('className', cn); //for IE

                        var nameDate = document.createElement('div');
                        nameDate.setAttribute('class', 'name');
                        nameDate.setAttribute('className', 'name'); //for IE

                        if (!isSysMsg) {
                        
                            nameDate.setAttribute('title', date);
                            nameDate.innerHTML = userName;
                            nameDate.style.color = getUserColor(user);
                        }
                        else {
                            neuSpan.setAttribute('title', date);
                            nameDate.appendChild(document.createTextNode(""));
                        }
                        neuSpan.appendChild(nameDate);

                        var neuNachricht = document.createElement('span');
                        neuNachricht.setAttribute('class', 'text');
                        neuNachricht.setAttribute('className', 'text'); //for IE

                    
                    
                     msgText = msgText.replace(/(https?:\/\/\S+)/gi,"<a href='$1' target='_blank'>$1</a>");
                    
                    msgText = replaceEmojis(msgText);

                                                            

                                            neuNachricht.innerHTML = msgText;
                        neuSpan.appendChild(neuNachricht);
                        neuSpan.appendChild(document.createElement('br'));

                        $(neuSpan).css('display', 'none');
                        var showEntry = document.getElementById("messages");
                        showEntry.appendChild(neuSpan);
                        $(neuSpan).fadeIn(333);
                        $(neuSpan).find('div.name').animate({backgroundColor: theme.nameAnimEndColor}, 3333);

                        messagesInHistoryCount++;

                        checkAndTruncateHistory();

                        if ((sound & 2) && userId != thisUserId)
                            playSound('msg');
                    }

                    //latestID = msgId;

                    scrollChatWindow();

                }
            }
            else if (cmd == 'UJ') {
                var userId = args[i++];
                var userName = args[i++];
                if (userId != thisUserId) {
                    addSysMessage("",getUserNameHtml(userId,userName)+" joined the chat.");
                    doGetUserList = true;
                    doNotification = "userJoined";
                }
            }
            else if (cmd == 'UQ') {
                var userId = (args[i++]);
                var userName = args[i++];
                //requestUserList();
                addSysMessage("",getUserNameHtml(userId,userName)+" left the chat." );
                doGetUserList = true;

                if (users.length <= 2 && roomLocked) {
                    addSysMessage("","Attention: this chat is currently locked, so nobody can (re-)enter it at the moment. To keep using this chat, it has to be <a href=\"#\" onclick=\"toolbar('toggleRoomLocked');return false;\">unlocked</a>.");
                }
            }
            else if (cmd == 'RL') {
                var userId = (args[i++]);
                var userName = args[i++];
                var locked = args[i++];
                if ("true" == locked) {
                    roomLocked = true;
                    addSysMessage("", '<i class="fa fa-lock" aria-hidden="true"></i> ' +getUserNameHtml(userId,userName)+" has locked the chat.");
                }
                else {
                    roomLocked = false;
                    addSysMessage("", '<i class="fa fa-unlock-alt" aria-hidden="true"></i> ' +getUserNameHtml(userId,userName)+" has unlocked the chat.");
                }
                updateToolbar();
            }
            else if (cmd == 'PC') {
                var sourceId = (args[i++]);
                var targetId = args[i++];
                var state = args[i++];

                var chatRefId = "pc/" + sourceId + "-" + targetId;

                if ("requested" == state) {
                                    if (sourceId == thisUserId)
                        addSysMessage("","You have invited "+getUserNameHtml(targetId)+" to a Private Chat.");
                    else {
                        var msg ="<div class='requested'><i class='fa fa-comments' aria-hidden='true'></i>"+getUserNameHtml(sourceId)+" has invited you to a Private Chat. <a href='/"+chatRefId+"' target='p_"+chatRefId+"' onclick='sendPrivateChatRequest("+sourceId+",\""+"accepted"+"\");closeParentGrowl(this);return true;'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i> Accept</a> | <a href='#' onclick='sendPrivateChatRequest("+sourceId+",\""+"declined"+"\");closeParentGrowl(this);return false;'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i> Decline</a></div>";
                            addSysMessage("", msg);
                                        }
                }
                else if ("accepted" == state) {
                    if (sourceId != thisUserId) {
                        var msg ="<div class='accepted'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i>"+ getUserNameHtml(sourceId)+" accepted your invitation to a Private Chat. <a href='/"+chatRefId+"' target='p_"+chatRefId+"'>Go to Private Chat</a></div>";
                            addSysMessage("", msg);
                                        }
                }
                else if ("declined" == state) {
                    if (sourceId != thisUserId) {
                        var msg ="<div class='declined'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i>"+ getUserNameHtml(sourceId)+" declined your invitation to a Private Chat.</div>";
                            addSysMessage("", msg);
                                        }
                    else
                        addSysMessage("","You declined the Private Chat invitation of "+getUserNameHtml(targetId)+".");
                }
                updateToolbar();
            }
            else if (cmd == 'SM') {
                var date = args[i++];
                var msgText = args[i++];
                addSysMessage(date, msgText);
            }
            else if (cmd == 'N') {
                var notificationType = (args[i++]);
                var userId = args[i++];
                var userName = args[i++];

                if (notificationType == "FU") {
                    var fileId = args[i++];
                    doGetFiles = true;
                    var link = $("<a>").attr({"href": "javascript:showFile('" + fileId + "')"});
                    var img = $("<img>").attr({
                        "src": "/api/chat?channel=3zeml&action=getThumb&img=" + fileId,
                        "width": "32",
                        "height": "32"
                    }).css('margin', '0 1em');
                    addSysMessage("", link.append(img).clone().wrap('<p>').parent().html() +getUserNameHtml(userId,userName)+" has uploaded a new photo.");
                }
                else if (notificationType == "FD") {
                    doGetFiles = true;
                    addSysMessage("",getUserNameHtml(userId,userName)+" has deleted a photo.");
                }
                else if (notificationType == "UI") {
                    doGetUserList = true;
                }
            }

            if (msgId > lastMessageId)
                lastMessageId = msgId;

        } // for

        if (titleToSet != "") {
            document.title = titleToSet;
            if (!windowHasfocus) setAlertFavIcon();
        }

        if (doGetFiles) {
            doGetFiles = false;
            getFiles();
        }

        if (doGetUserList) {
            doGetUserList = false;
            getUserList();
        }


        if (!firstRequest) {
            if (doNotification != "") {
                if ((sound & 1) && doNotification == "userJoined") {
                    playSound('userJoined');
                }
            }
        }


        firstRequest = false;
    } // is thisUserId==-1


    scheduleNextGetData();
}

function scheduleNextGetData() {
    dataFetchDelay *= 1.3;

    
    if (dataFetchDelay > 30 * 1000) dataFetchDelay = 30 * 1000;
    log(dataFetchDelay);
    clearTimeout(lastGetDataTimeout);
    lastGetDataTimeout = window.setTimeout(getData, dataFetchDelay);
}

function sendMsg(msgInput) {

    //var e = jQuery('#msg').emojioneArea();
    //var msg = e[0].emojioneArea.getText();
    //console.log(msg);

    var msg = msgInput.value;

    if (msg != "") {
        msgInput.value = "";
        msgInput.focus();
        createNewEntry(name, msg);

                if(ga) ga('send', 'event', 'chatMessage', 'sent', '817716');
    }
    else {
        alert("Please enter a message.");
    }
}

function createNewEntry(name, nachricht) {
    log(nachricht);
    jQuery.ajax({
        data: "channel=3zeml&action=addMessage&text=" + encodeURIComponent(nachricht),
        type: "POST",
            success: handleHttpCreateNewEntry,
        error: function (xhr, textStatus, errorThrown) {
            window.setTimeout(function () {
                createNewEntry(name, nachricht);
            }, 3 * 1000);
            handleError(xhr, textStatus, errorThrown);
                }
    });
}

function handleHttpCreateNewEntry(data, status) {
    resetDataFetchDelay();
    getData();
}

function getUserList() {
    jQuery.ajax({
        data: "channel=3zeml&action=getUserList",
        //type: "POST",
            success: getUserListSuccessful
    });
}

function getUserListSuccessful(data, textStatus) {
    users = new Array();

    var lines = data.split("\n");
    for (var i in lines) {
        var line = lines[i];

        if (i == 0) {
            thisUserId = line;
            continue;
        }

        var args = line.split("\t");

        if (args.length == 9) {
            var userId = (args[0]);
            var userName = args[1];
            var userIgnored = args[2];

            var externalId = args[3];
            var color = args[4];

                          color = theme.userColor(color);

            var profileUrl = args[5];
            var photoUrl = args[6];
            var gender = args[7];
            var age = args[8];

            var user = new User(userId, userName, userIgnored == "true", externalId, color, profileUrl, photoUrl, gender, age);
            users.push(user);
            id2user[userId] = user;
        }
    }
    updateUsersView();
}


function updateUsersView() {
    log("Updating users view " + users.length);
    var usersView = jQuery("#users");

    if (usersView === undefined)
        return;


    var html = "<h1>"+users.length+" Chatters Online"+
    "</h1>";

             for (var i = 0; i < users.length; i++) {
            var user = users[i];
            html += "<li style='color:" + getUserColor(user) + "'>";

            
                        html += user.name + "</li>";
        }
    
    //usersView.innerHTML=html;
    $('#users').html(html);
}

function getColor(i) {
    i = i % colors.length;
    return colors[i];
}

function getUserColor(user) {
    if (user === undefined)
        return "#888";
    return user.color;
}

function onUserActivity() {
    if (dataFetchDelay > 3000) {
        resetDataFetchDelay();
        log(dataFetchDelay);
        getData();
    }
    resetDataFetchDelay();
    setNormalFavIcon();

}

function addSysMessage(date, text) {
    var neuSpan = document.createElement('div');
    var cn = "sysmessage scrollLockOverride";

    neuSpan.setAttribute('class', cn);
    neuSpan.setAttribute('className', cn); //for IE

    var nameDate = document.createElement('span');
    nameDate.setAttribute('class', 'name');
    nameDate.setAttribute('className', 'name'); //for IE


    jQuery(neuSpan).data('title', date);

    var neuNachricht = document.createElement('span');
    neuNachricht.setAttribute('class', 'text');
    neuNachricht.setAttribute('className', 'text'); //for IE
    neuNachricht.innerHTML = text;
    neuSpan.appendChild(neuNachricht);

    var showEntry = document.getElementById("messages");
    showEntry.appendChild(neuSpan);

    //if (!scrollLock)
    //	showEntry.scrollTop = showEntry.scrollHeight;
    scrollChatWindow();

    messagesInHistoryCount++;
}

function toggleScrollLock() {
    scrollLock = !scrollLock;
    updateToolbar();
}

function quit() {
    if (confirm("Really quit chat?")) {
        hasQuit = true;
            jQuery.ajax({
            data: "channel=3zeml&action=quit"
        });
        window.location.href = "/";
    }
}

function toggleRoomLocked() {
    jQuery.ajax({data: "channel=3zeml&action=lockRoom&arg=" + (roomLocked ? "false" : "true")});
    updateToolbar();
    getData();
}

function updateToolbar() {
    $('#msg').focus();
    $("#tb-scrollLock").toggleClass("pressed", scrollLock);
    $("#tb-lock").toggleClass("pressed", roomLocked);
    $("#tb-emoji").toggleClass("pressed", showEmojiSheet != 0);
    $("#tb-theme").toggleClass("pressed", themeName == 'dark');
}



function sendPrivateChatRequest(targetUser, cmd) {
    jQuery.ajax({data: "channel=3zeml&action=privateChatRequest&target=" + targetUser + "&cmd=" + cmd});
    getData();
}

function getUserNameHtml(userId) {
    return getUserNameHtml(userId, null);
}
function getUserNameHtml(userId, userName) {
    var user = id2user[userId];
    if (user) {
        return "<span style='color:" + getUserColor(user) + "'>" + user.name + "</span>";
    }
    else {
        return userName ? userName : "?";
    }
}

function scrollChatWindow() {
    if (!scrollLock && !scrollLockOverride) {
        var e = document.getElementById("messages");
        e.scrollTop = e.scrollHeight;
    }
}

function activateScrollLockOverride() {
    clearTimeout(lastScrollLockOverrideTimeout);
    scrollLockOverride = true;
    lastScrollLockOverrideTimeout = window.setTimeout("scrollLockOverride=false", 3000);
}


function closeParentGrowl(e) { 
}

function getFiles() {
    jQuery.ajax({
        data: "channel=3zeml&action=getFiles",
            success: handleGetFiles
    });
}

function handleGetFiles(data, status) {
    var lines = data.split("\n");
    var div = $("<div>");
    var isEmpty = true;
    for (var i in lines) {
        var line = lines[i];
        if (line != "") {
            var args = line.split("\t");
            //alert(args[0]);
            //var link = $("<a>").attr({"href":"", "onclick":"showFile('"+args[0]+"');return false;" });
            var link = $("<a>").attr({"href": "javascript:showFile('" + args[0] + "')"});
            var img = $("<img>").attr({
                "src": "/api/chat?channel=3zeml&action=getThumb&img=" + args[0],
                "width": "64",
                "height": "64"
            });
            div.append(link.append(img));
            isEmpty = false;
        }
    }

    if (isEmpty) {
        div.append("<small style='padding:2em 1em;min-height:32px'><center>No picture has been uploaded yet. Click on 'Upload Image' to share an image.<br>Please note: for each upload we store time and IP address. <em>Any illegal upload will be prosecuted.</em></center></small>");
        }

    //	alert(html);
    $('#filesList').empty().append(div);
}

function deleteFile() {
    jQuery('#imagePopup').modal('hide');
    jQuery.ajax({
        data: "channel=3zeml&action=deleteFile&file=" + currentImgId,
            success: getData
    });

}

function showFile(id) {
            currentImgId = id;

        var src = "/api/chat?channel=3zeml&action=getImage&img=" + id;

        

        $('#fullImage').css({'width': 16, 'height': 11});
        $('#fullImage').attr('src', '//cdn.stinto.net/img/throbber.gif');
        $('#fullImageLink').attr('href', src);
        var w = jQuery(window).width() - 100;
        var h = jQuery(window).height() - 100;
        var cw = w - 40;
        var ch = h - 150;

        $('#imagePopup .modal-body').css({'max-height': ch});
        $('#imagePopup').css({'width': w, 'height': h, 'margin': 0, 'top': '50px', 'left': '50px'});
        $('#imagePopup').modal();

        var img = new Image();
        img.onload = function () {

            var imgWidth = img.width;
            var imgHeight = img.height;

            while (true) {
                if (imgWidth > cw) {
                    imgHeight *= cw / imgWidth;
                    imgWidth = cw;
                    continue;
                }
                if (imgHeight > ch) {
                    imgWidth *= ch / imgHeight;
                    imgHeight = ch;
                    continue;
                }
                break;
            }
            var fi = $('#fullImage');
            fi.hide().attr('src', src).css({'width': imgWidth, 'height': imgHeight}).show();
        }
        img.src = src;

    
}

function showUploadDialog() {
    $('#fileUploadForm').modal({close: true});
}

function uploadStartCallback() {
    $('#uploadBtn').attr("disabled", "disabled");
    return true;
}

function uploadCompleteCallback(responseDoc) {
    $('#uploadBtn').removeAttr("disabled");
    $("#uploadProgress").hide();
    $("#fileNameField").val("");

    var err = responseDoc.getElementById("error");
    if (err) {
        alert(err.innerHTML);
    }
    else {
        resetDataFetchDelay();
        getData();
    }
}


function playSound(name) {
    if (sound != 0) {
        soundManager.play(name);
    }
}



function toggleIgnoreUser(userId) {
    jQuery.ajax({
        data: "channel=3zeml&action=ignoreUser&id=" + userId
    });
}

function checkAndTruncateHistory() {
    if (messagesInHistoryCount > 2000) {
        jQuery('#messages').children().slice(0, 1000).remove();
        messagesInHistoryCount = 1000;
    }
}

function setFavIcon(oldIcon, newIcon) {

    var icon = document.getElementById(oldIcon);
    if (icon) {
        document.head.removeChild(icon);
    }

    icon = document.getElementById(newIcon);
    if (!icon) {
        var link = document.createElement('link');
        link.id = newIcon;
        link.rel = 'shortcut icon';
        link.href = '//cdn.stinto.net/img/stinto/favicon' + (newIcon == 'alert' ? '-alert.gif' : '.ico');
        document.head.appendChild(link);
        }
}
function setAlertFavIcon() {
    setFavIcon('normal', 'alert');
}
function setNormalFavIcon() {
    setFavIcon('alert', 'normal');
}

function showSoundSettings() {
    $("#soundSettingsForm input[name=userJoined]").prop('checked', sound & 1);
    $("#soundSettingsForm input[name=msg]").prop('checked', sound & 2);
    $('#soundSettingsDialog').modal({close: false, backdrop: 'static'})
}

function saveSoundSettings() {
    $('#soundSettingsDialog').modal('hide');
    sound = 0;
    if ($("#soundSettingsForm input[name=userJoined]").prop('checked')) sound |= 1;
    if ($("#soundSettingsForm input[name=msg]").prop('checked')) sound |= 2;

    localStorage.sound = sound;

    updateToolbar();
}

function showModeratorMenu() {
    $('#moderatorMenuDialog').modal({close: true, backdrop: 'static'})
}

function getHeadAd() {
    jQuery.ajax({
        url: "/api/chat",
        data: "channel=3zeml&action=getHeadAd&hour="+(new Date().getHours()),
        success: function (data, status) {
            $('#headAd').fadeTo(2000, 0, function () {
                $(this).html(data).fadeTo(2000, 1);
            });
        }
    });
    window.setTimeout(getHeadAd, 60 * 1000);
}


jQuery(function () {
    jQuery('#emojiSheet img').click(function (e) {
        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        var emojiIndex = Math.floor(y / emojiSheet.emojiSize) * emojiSheet.emojisPerRow;
        emojiIndex += Math.floor(x / emojiSheet.emojiSize);

        var emoji = emojiCodeToSurrogatePair(emojiSheet.emojiCodes[emojiIndex]);

        jQuery('#msg').insertAtCaret(emoji);
    });

    if (!showEmojiSheet)
        jQuery('#emojiSheet').hide();

});


function doLayout() {
    //$('#chat-window').height($(window).height() - $('#chat-footer').height() - 80 - 90 - 86 );
    $('#users').height($('#messages').height());
}


function toggleEmojiSheet() {
    showEmojiSheet ^= 1;
    localStorage.showEmojiSheet = showEmojiSheet;
    updateEmojiSheet();
}

function updateEmojiSheet() {
    var emojiSheet = $('#emojiSheet');
    if (showEmojiSheet) {
        $('#emojiSheet').fadeIn();
        $('#chat-content').height('calc(100vh - 80px - 70px - 90px - 2em - 80px)');
        $('#chat-footer').height('150px');
        doLayout();
    }
    else {
        $('#emojiSheet').fadeOut(function () {
            $('#chat-content').height('calc(100vh - 80px - 70px - 90px - 2em - 0px)');
            $('#chat-footer').height('70px');
            doLayout();
        });
    }
    updateToolbar();
}

function setTheme(themeName)
{
    theme = themes[themeName] || themes.light;
    for (var tmp in themes){
        jQuery('body').removeClass(tmp+'-theme')
    };
    jQuery('body').addClass(themeName+'-theme');
    jQuery('#messages .name').css('background-color',theme.nameAnimEndColor);
}

function toggleTheme() {
    themeName = themeName=='dark'?'light':'dark';
    localStorage.theme = themeName;
    //setTheme(themeName);
    //updateToolbar();
    window.location.reload();
}


// http://stackoverflow.com/a/4456598
$.fn.insertAtCaret = function (text) {
    return this.each(function () {
        if (document.selection && this.tagName == 'TEXTAREA') {
            //IE textarea support
            this.focus();
            sel = document.selection.createRange();
            sel.text = text;
            this.focus();
        } else if (this.selectionStart || this.selectionStart == '0') {
            //MOZILLA/NETSCAPE support
            startPos = this.selectionStart;
            endPos = this.selectionEnd;
            scrollTop = this.scrollTop;
            this.value = this.value.substring(0, startPos) + text + this.value.substring(endPos, this.value.length);
            this.focus();
            this.selectionStart = startPos + text.length;
            this.selectionEnd = startPos + text.length;
            this.scrollTop = scrollTop;
        } else {
            // IE input[type=text] and other browsers
            this.value += text;
            this.focus();
            this.value = this.value;    // forces cursor to end
        }
    });
};

function replaceEmojis(msgText) {
    msgText = " " + msgText + " ";
    msgText = msgText.replace(/(\s)(?::-\)|:\)|:=\))(\s)/g, "$1😀$2");
    msgText = msgText.replace(/(\s)<3(\s)/g, "$1❤$2");
    msgText = msgText.replace(/(\s)<\/3(\s)/g, "$1💔$2");

    msgText = msgText.replace(/(\s)(?::-\(|:\(|:=\()(\s)/g, "$1☹$2");
    msgText = msgText.replace(/(\s)(?:;-\)|;\))(\s)/g, "$1😉$2");

    msgText = msgText.replace(/(\s)(?::D|:=D|:-D)(\s)/gi, "$1😆$2");
    msgText = msgText.replace(/(\s)(?:8-\)|8\)|8=\)|\(cool\))(\s)/gi, "$1😎$2");
    msgText = msgText.replace(/(\s)(?::-\||:\||:=\|)(\s)/g, "$1😐$2");
    msgText = msgText.replace(/(\s)(?::-\/|:\/|:=\/)(\s)/g, "$1😕$2");
    msgText = msgText.replace(/(\s)(?::-\*|:\*|:=\*)(\s)/g, "$1😘$2");
    msgText = msgText.replace(/(\s)(?::P|:=P|:-P)(\s)/gi, "$1😜$2");

    msgText = emojione.toImage(msgText)
    return msgText.substr(1, msgText.length - 2);
}
