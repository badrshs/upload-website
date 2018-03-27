<!DOCTYPE html>
<html>
    
     <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
    
    
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>


    
    
    
    
    
<div ng-app="myApp" ng-controller="myCtrl">
   
    
    
    <div class="container" ng-init="init()">
        <br>
     order by     <button ng-click="ord='-name'"  class="btn btn-info" >name</button>
        <button ng-click="ord='-Visiter'"class="btn btn-info" >Visiter</button>
        <button ng-click="ord='-Date'"class="btn btn-info" >Date</button>
        <button ng-click="ord='State'"class="btn btn-info" >State</button>
        
   <table class="table table-striped">
    <thead>
      <tr>
        <th>name</th> 
        <th>date</th>
        <th>ip</th>
        <th>Zip Size</th>
        <th>Current Size</th>
        <th>OPEN </th>
         <th>Deleted</th>
        <th>Status</th>
        <th>Visiter</th>
          
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="data in  ALLData |orderBy : ord ">
        <td>@{{data.name}}</td>
        <td>@{{data.Date}}</td>
        <td>@{{data.country}}</td>
        <td>@{{data.ZipSize}}</td>
        <td>@{{data.AllSize}}</td>
     
        <td><button ng-click="open(data.name)" type="button" class="btn btn-info">OPEN</button></td>
        <td><button ng-show="data.State==1" ng-click="status(data)" type="button" class="btn btn-info">On</button>
          
          <button ng-show="data.State==0" ng-click="status(data)" type="button" class="btn btn-danger">Off</button>
          
          
          </td>
       
         <td><button type="button" ng-click="delete(data)" class="btn btn-danger">Delete</button></td>
        <td>@{{data.Visiter}}</td>

        </tr>
       
    </tbody>
  </table>
</div>

    
    
    
    
    
    
    
    
    
    
    
</div>




      
   <script>
var app = angular.module('myApp', []);
       
        
   
 app.controller('myCtrl', function ($scope, $http) {

    
     $scope.open = function (x) {
        
 
         window.open("http://www.upload-website.com/"+x , '_blank' );
         
         
         
     }
     $scope.init = function () {
         
         
         $scope.GetData();
     }
         
     $scope.GetData = function () {
        
 		$http.get('../AdminGetAll/GetALLData').success(function (data, status, headers, config) {
             
 			$scope.ALLData = data;
 		}).error(function (error, status, headers, config) {
 			 
 			console.log("Error occured");
 		});
 	};
    
    
    	$scope.delete = function (x) {

  	 data = {
 			path: x.name
 			
 		}
 		$http.post("../AdminGetAll/deleteProject", data).success(function (data) {

 			$scope.init();
  		});
 	};
     
     
      	$scope.status = function (x) {
           

  	 data = {
 			url: x.name
 			
 		}
 		$http.post("../AdminGetAll/statusProject", data).success(function (data) {
$scope.init();
 			 
  		});
 	};
     
    
    
    
    
    
    
});
</script>   
    
    
    
    
    
    
</body>
</html>

