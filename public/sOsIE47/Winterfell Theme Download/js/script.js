/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Instantiate theme global object
$Winterfell = Object();

$Winterfell.email = Object();

// Instantiate theme collapse element object
$Winterfell.collapse = Object();

// New project form
$Winterfell.form = Object();
$Winterfell.form.project = '#new_project';

// Calendar
$Winterfell.calendar = Object();
$Winterfell.calendar.cal;
$Winterfell.calendar.month;
$Winterfell.calendar.year;
$Winterfell.calendar.cell = '#calendar > .fc-calendar > .fc-body > .fc-row > div';

// Forms
$Winterfell.form = Object();
$Winterfell.form.errorClass = 'error';

$Winterfell.form.contact = Object();
$Winterfell.form.contact.id = '#contact_form';

$Winterfell.form.newProject = Object();
$Winterfell.form.newProject.id = '#new_project';
$Winterfell.form.newProject.successMsg = 'SENT';

$Winterfell.form.subscribe = Object();
$Winterfell.form.subscribe.id = '#subscribe';

$(document).ready(function() {

    $("[placeholder]").textPlaceholder();
    
    /* TESTIMONIALS */
    $('.testimonials .content a.arrow').click(function (e){
        e.preventDefault();
        e.stopPropagation();
        
        var trigger = $(this).attr('id');
        var list = $(this).parent().find('ul');
        var total_items = list.children().length;
        var index = list.children('li.active').index();
        
        var next;
        if(trigger === 'next')
            next = ((index + 1) >= total_items) ? 0 : index + 1;
        else if(trigger === 'prev')
            next = ((index - 1) < 0) ? total_items - 1 : index - 1;
        
        list.children().eq(index).fadeOut(1000).toggleClass('active');
        list.children().eq(next).fadeIn(1000).toggleClass('active');
        
        return false;
    });

    /* ACCORDION */
    $(".accordion-toggle").click(function() {
        if($(this).parent().hasClass('active')){
            $Winterfell.collapse.close($(this).parent().parent());
            return;
        }
        $('#accordion').children('.accordion-group').each(function(i, elem) {
            $Winterfell.collapse.close(elem);
        });
        $Winterfell.collapse.open(this);
    });

    $($Winterfell.form.project).submit(function(e) {
        e.preventDefault();
    });


    /* CALENDAR SCRIPTING BLOCK */
    $Winterfell.calendar.cal = $('#calendar').calendario({
        caldata: codropsEvents,
        displayWeekAbbr: true
    });
    $Winterfell.calendar.month = ($Winterfell.calendar.cal) ? $('#custom-month').html($Winterfell.calendar.cal.getMonthName()) : '',
            $Winterfell.calendar.year = ($Winterfell.calendar.cal) ? $('#custom-year').html($Winterfell.calendar.cal.getYear()) : '';

    $('#custom-next').on('click', function() {
        $Winterfell.calendar.cal.gotoNextMonth();
        $Winterfell.calendar.cellHeight();
        $Winterfell.calendar.updateMonthYear();
    });
    $('#custom-prev').on('click', function() {
        $Winterfell.calendar.cal.gotoPreviousMonth();
        $Winterfell.calendar.cellHeight();
        $Winterfell.calendar.updateMonthYear();
    });

    $Winterfell.calendar.cellHeight();

    $(window).resize(function() {
        $Winterfell.calendar.cellHeight();
    });

    $('#calendar').on('click', 'div.fc-content', function(e) {
        $Winterfell.calendar.openEvent($(this));
    });

    $('#calendar').on('click', 'div.fc-body .event .close', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var parent = $(this).parent('.event');
        $Winterfell.calendar.closeEvent(parent);
        return false;
    });

    /* ******************************************************************* */

    //==============Filters====================================
    $('.filters > .list > .item > a').on('click', function(event) {
        event.preventDefault();
        var filter = $(this).attr('data-filter');
        $(this).toggleClass('active');
        if (filter === 'all') {
            if ($(this).hasClass('active'))
                $('.filters > .list > .item > a, .works_portfolio .item').addClass('active');
            else
                $('.filters > .list > .item > a, .works_portfolio .item').removeClass('active');
        } else {
            $('.works_portfolio .item[data-category=' + filter + ']').toggleClass('active');
            //$('.works_portfolio .item[data-category='+filter+']').fadeOut(1000)();
            $('.filters > .list > .item > a[data-filter=all]').removeClass('active');
        }
    });

    /* ******************************************************************* */

    //============== COUNTDOWN ====================================
    $Winterfell.countdown = (jQuery().countdown) ? $('ul#countdown').countdown("2014/07/05", function(event) {
        var $this = $(this);
        switch (event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('h1#' + event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    }) : null;

    /* ================= CONTACTS FORM ================= */
    $($Winterfell.form.contact.id).submit(function() {
        var form = $(this);
        if($Winterfell.form.validate(form)){
             $.post('php/contact.php', form.serialize(), function(result){
                //console.log(result);
            });
        }
        return false;
    });
    
    /* ================= NEW PROJECT FORM ================= */
    $($Winterfell.form.newProject.id).submit(function() {
        var form = $(this);
        var submit = form.find('input[type=submit]');
        var submit_val = $(submit).val();
        if($Winterfell.form.validate(form)){
             $.post('php/project.php', form.serialize(), function(result){
                $(submit).val($Winterfell.form.newProject.successMsg);
                setTimeout(function(){submit.val(submit_val);},3000);
            });
        }
        return false;
    });
    
    /* ================= SUBSCRIBE FORM ================= */
    $($Winterfell.form.subscribe.id).submit(function() {
        var form = $(this);
        var input = form.find('input');
        var input_ph = $(input).attr('placeholder');
        if($Winterfell.form.validate(form)){
            $.post('php/subscribe.php', form.serialize(), function(result){
                $(input).attr('placeholder', "Subscribed");
                $(input).val('');
           });
       }else{
           setTimeout(function(){$(input).removeClass('error');},800);
       }
       return false;
    });

});

/* ACCORDION STATE MANAGER */
$Winterfell.collapse.close = function close(element) {
    console.log('close');
    $(element).children('.accordion-heading').removeClass('active');
    $(element).children('.accordion-heading').find('.plus').html('+');
};
$Winterfell.collapse.open = function open(element) {
    $(element).parent().toggleClass('active');
    $(element).find('.plus').html('-');
};
/* --------------------------- */


/*  EMAIL VALIDATION FUNCTION */
$Winterfell.email.validate = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
/* --------------------------- */


/*  FORM ELEMENT VALIDATION FUNCTION */
$Winterfell.form.validate = function validate(form) {
    var valid = true;
    $.each(form.find(':input'), function (index, input){
        var val = $(input).val();
        if($.trim(val) === ''){
            $Winterfell.form.inputError(input);
            valid = false;
            return false;
        }
        if($(input).attr('name') === 'email'){
            if(!$Winterfell.email.validate(val)){
                $Winterfell.form.inputError(input);
                valid = false;
                return false;
            }
        }
    });
    return valid;
};

$Winterfell.form.inputError = function inputError(input){
    if(!$(input).hasClass($Winterfell.form.errorClass))
        $(input).addClass($Winterfell.form.errorClass);
    $(input).focus();
};

/* --------------------------- */

/* CALENDAR */
$Winterfell.calendar.cellHeight = function cellHeight() {
    var cell = $Winterfell.calendar.cell;
    $(cell).height($(cell).width());
};

$Winterfell.calendar.updateMonthYear = function updateMonthYear() {
    $Winterfell.calendar.month.html($Winterfell.calendar.cal.getMonthName());
    $Winterfell.calendar.year.html($Winterfell.calendar.cal.getYear());
};

$Winterfell.calendar.openEvent = function openEvent(elem) {
    var row = elem.parent().index();
    var cell = elem.index();

    var open_class = 'active';
    if (cell > 4)
        open_class = 'active_left';
    if (row > 3)
        open_class = 'active_top';

    if (cell > 4 && row > 3)
        open_class = 'active_top_left';

    if($(window).width() < 480){
        var event = $(elem).find('.event').clone();
        $(elem).parent().parent().find('> .event').remove();
        $(elem).parent().parent().append(event);
    }else{
        $(elem).find('.event').addClass(open_class);
    }
};

$Winterfell.calendar.closeEvent = function closeEvent(elem) {
    if(elem.parent().hasClass('fc-body')) elem.remove();
    elem.removeClass('active');
    elem.removeClass('active_left');
    elem.removeClass('active_top');
    elem.removeClass('active_top_left');
};
/* --------------------------- */