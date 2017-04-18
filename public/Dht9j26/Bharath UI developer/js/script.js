var app = angular.module('myapp', ['ngMaterial']);


app.controller('data-lst', function($scope,$http) {
    var a;

    $scope.data1=[];
    $scope.shouser=false;
      $http.get("https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites").success(function(result) {
     	    	$scope.results = result.websites;
     	         var c = $scope.results.length;
     	     
     	    	 for (var i = 0; i < c-1 ; i++)
    {

     	    	   var newitem ={};
          newitem.id = result.websites[i].id;
          newitem.title = result.websites[i].title;
          newitem.favicon_image = result.websites[i].favicon_image;
          newitem.url_address = result.websites[i].url_address;
          newitem.tag = result.websites[i].tag;
          newitem.like = Math.floor((Math.random() * 10) + 1);
            
       $scope.data1.push(newitem);
   }
      });

$scope.adddata=function()
{
	var title =$scope.title;
	var add =$scope.address;
	var tag =$scope.tag;

	if(title && add && tag)
	{
		var newitem ={};

          newitem.title = title;
          newitem.tag = tag;
          newitem.url_address = add;
          newitem.like = Math.floor((Math.random() * 10) + 1);
            newitem.new = 'NEW';
            $scope.data1.push(newitem);
           $scope.title='';
	       $scope.address='';
	       $scope.tag='';

	}
	else
	{
		alert("please enter the all value");
	}
}

	});








