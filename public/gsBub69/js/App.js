var app = angular.module('myApp', []);
var c =0;

app.controller('Ctrl', function ($scope, $http, $window) {
     
 $scope.RandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
} 
     $scope.ContactInit = function (v) {
         $scope.x = $scope.RandomNumber(1,10);
        $scope.y = $scope.RandomNumber(1,10);
         
    };
    
   	 $scope.ContactInit();

 $scope.initVd = function () {
        $http.get("/api/User/AutoGet")
            .success(function (response) {
                console.log(response);
                $scope.AutoLoad = response;
                autoPlay = response;
            });
        $http.get("/api/User/CompleteGet")
            .success(function (response) {
                console.log(response);
                $scope.IsCompleted = response;
            });
    };
    $scope.Auto = function () {
        $http.post("api/User/Auto")
            .success(function (data) {
                $scope.AutoLoad = data;
            });
    };

    $scope.Complete = function () {
        $http.post("api/User/Complete", {
            'Vid': $scope.Vid
        }).success(function (data) {
                $scope.initVd();
        });
    };
      $scope.Inroll = function () {
        $http.post("api/User/Inroll", {
        }).success(function (data) {
            console.log(data)

            var over = '<div id="overlay">' + '<img id="loading" src="http://piknikpark.com/images/loading.gif">' + '</div>';
            $(over).appendTo('body');
            setTimeout(function () {
                redirect('/v/video/' + data);
            }, 2000);

        });
    };
    $scope.UserInformation = function () {
        $http.post("api/User/UserInformation", {
            'Name': $scope.Name,
            'Surname': $scope.Surname
        })
            .success(function (data) {
                if(data!="true"){
                    $scope.error1=data[Object.keys(data)[0]][0];
                    $scope.success1="";

                }else if(data=="true"){
                    $scope.error1="";
                    $scope.success1="success";

                }            });
    };
    $scope.Contact = function () {

        $("#Loading").show();
        $("#click").hide();
           $scope.ErrorContactMessage="";
            $scope.Success="";
        if(($scope.x+$scope.y)==$scope.captchaCon){

        $http.post("api/User/Contact", {
            'Name': $scope.NameContact,
            'Email': $scope.EmailContact,
            'Message': $scope.ContactM
        })
            .success(function (data) {
             $("#Loading").hide();
            $("#click").show();

               if(data!="true"){
                 $scope.ErrorContactMessage=data[Object.keys(data)[0]][0];
                 $scope.captchaCon="";

                    $scope.ContactInit();

                }else if(data=="true"){
                    $scope.NameContact = "";
                    $scope.EmailContact = "";
                    $scope.ContactM = "";
                     $scope.captchaCon="";

                    $scope.ErrorContactMessage="";
                    $scope.Success="success";
                    $scope.ContactInit();


                }

        });
            }else
                {
                      $scope.ErrorContactMessage="your captcha entry was invalid";
                    $("#Loading").hide();
                    $("#click").show();
                }
    };
    $scope.Emails = function () {
        $http.post("api/User/Email", {
            'Email': $scope.Email
        })
            .success(function (data) {
                if(data!="true"){
                 $scope.error=data[Object.keys(data)[0]][0];
                    $scope.success="";
                    $scope.Email = "";
                }else if(data=="true"){
                    $scope.error="";
                    $scope.success="success";

                }
            });
    };
    $scope.Passwords = function () {
        $http.post("api/User/Password", {
            'Email': $scope.Email,
            'password': $scope.P1,
            'password_confirmation': $scope.P2
        })
            .success(function (data) {

                if(data!="true"){


                   $scope.error=data[Object.keys(data)[0]][0];
                   $scope.success="";
                    $scope.P1 = "";
                    $scope.P2 = "";
                }else if(data=="true"){
                    $scope.error="";
                    $scope.success="success";
                    $scope.P1 = "";
                    $scope.P2 = "";
                }
             });
    };
 $scope.login = function () {
        $http.post("login", {
            'login': $scope.U,
            'Remember': $scope.Remember_me,
            'password': $scope.P
        }).success(function (data) {
            if (data == 'true') {
                $scope.logStatus = 'Successfully';
                $scope.LogColorState = true;
                location.reload();
            } else if (data =="false") {
                $scope.logStatus = 'Your password is wrong';
                $scope.LogColorState = false;
            }else {
                var array = $.map(data, function (value, index) {
                return [value];
            });
            $scope.logStatus = array[0];
            $scope.LogColorState = false;
            }
        });
    };
    $scope.Reg = function () {
        if ($scope.captchaRe == ($scope.x + $scope.y)) {
            $http.post("register", {
                'UserName': $scope.RUser,
                'FirstName': $scope.Name,
                'Surname': $scope.Surnames,
                'Email': $scope.Email,
                'password': $scope.Password,
                'password_confirmation': $scope.RPassword
            }).success(function (data) {
                if (data == "true") {
                    $scope.ErrorRegMessage = "successfully";
                    $scope.regColorState = true;
                    location.reload();
                }
                else
                    {
                $scope.ContactInit();
                $scope.captchaRe="";
                $scope.ErrorRegMessage = data[Object.keys(data)[0]][0];
                $scope.regColorState = false;
                    }
            }) ;
        } else {
                            $scope.regColorState = false;
                 $scope.ContactInit();
                $scope.captchaRe="";
           $scope.ErrorRegMessage="your captcha entry was invalid";
        }
    };
    $scope.ResetPass = function () {
        $scope.ErrorResetMessage    ="";
        $scope.SuccessResetMessag = "";
        $("#Loading").show();//public/images/loading.gif
        $("#click").hide();
        $http.post("password/emails", {
            'Email': $scope.ResU
        }).success(function (data) {
            $scope.ResU = "";
            $("#Loading").hide();//public/images/loading.gif
            $("#click").show();
            if(data=="false"){
                $scope.ErrorResetMessage    ="this email does not exist in our system";
                $scope.SuccessResetMessag = "";

            }else
                {

                    $scope.ErrorResetMessage="";
                    $scope.SuccessResetMessag = data;
                    setTimeout(function(){  location.reload(); }, 1000);


                }
        });
    };
    $scope.init = function (v) {
        $http.get("/GetCourse.php?v=" + v)
            .success(function (response) {
                $scope.CoueseInformaiton = response.value;
            });
    };
   
    $scope.ProfileInit = function () {
        $scope.P1="";
        $scope.P2="";
        $http.get("api/User/ProfileInfo" )
            .success(function (response) {
                $scope.Name = response.Name;
                $scope.Surname = response.Surname;
                $scope.Email = response.Email;
                $scope.MD5 = response.MD5;
                $scope.UserName = response.UserName;
            });
    };
    $scope.Pr2Check = function () {
 
        if( $scope.P1!=""|| $scope.P2!=""){

            $scope.Passwords();
        }else
        {

            $scope.Emails();

        }


    };
    $scope.reverseSort = true;
    $scope.orderByField = 'id';
});

