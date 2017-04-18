var app = angular.module('App', []);

var cc;
app.controller('Live', function ($scope, $http) {






    $scope.Run = function () {

        $scope.Html = editorHtml.getValue();
        $scope.Css = editorCss.getValue();
        $scope.Js = editorJs.getValue();

        $http.post("RunCode", {'Html': $scope.Html, 'Css': $scope.Css, 'JavaScript': $scope.Js})
            .success(function (data) {
                $('#abc_frame').attr('src', data);
                $('#abc_frame').show();

            }).error(function (data) {
            console.log(data)
        });
    }
        $scope.Save = function () {
            if($scope.TitleName!=null){
        $scope.Html = editorHtml.getValue();
        $scope.Css = editorCss.getValue();
        $scope.Js = editorJs.getValue();

        $http.post("SaveCode", {'Title': $scope.TitleName, 'Html': $scope.Html, 'Css': $scope.Css, 'JavaScript': $scope.Js})
            .success(function (data) {

                window.location.replace(data);

            }).error(function (data) {
            console.log(data)
        });
            }else
            {
                alert("project name is required ")
            }
    }




        $scope.GetData = function () {

            $http.get('/GetPin').success(function (data, status, headers, config) {
                editorHtml.setValue(data.HTML);
                editorCss.setValue(data.Css);
                editorJs.setValue(data.Js);
                $('#abc_frame').show();
            }).error(function (error, status, headers, config) {

                console.log("Error occured");
            });
        };


  



    $(window).load(function(){

        if(k){
            $('#abc_frame').show();
            $scope.GetData();

        }

    });


});
