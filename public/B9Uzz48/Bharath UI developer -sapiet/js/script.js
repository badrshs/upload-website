var app = angular.module('myapp', ['ngMaterial','ionic.rating','ui.bootstrap']);


app.controller('data-lst', function($scope,$http) {
    var a;

    $scope.data1=[];
    $scope.totlike=0;
    $scope.shouser=false;
      $http.get("https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals").success(function(result) {
     	    	$scope.results = result.deals;
     	         var c = $scope.results.length;
     	     
     	    	 for (var i = 0; i < c-1 ; i++)
    {

     	    	   var newitem ={};
          newitem.name = result.deals[i].name;
          newitem.price = result.deals[i].price;
          newitem.purchas = result.deals[i].purchased_by;
          newitem.rating = result.deals[i].rating;
          newitem.tagsone = result.deals[i].tags[0];
           newitem.tagstwo = result.deals[i].tags[1];
            newitem.provider = result.deals[i].provider;
              newitem.link = result.deals[i].link;
                newitem.image = result.deals[i].image;
          newitem.like = Math.floor((Math.random() * 20) + 1);
           $scope.one = newitem.like;
           $scope.totlike = $scope.totlike + $scope.one;
            
       $scope.data1.push(newitem);
       console.log($scope.totlike);
   }
   console.log($scope.data1);
      });

$scope.rating =function()
{
  $scope.value = 'rating';
  $scope.sortReverse = true;
}
$scope.like =function()
{
  $scope.value = 'like';
  $scope.sortReverse = true;
}
$scope.totalplus =function()
{
$scope.totlike =$scope.totlike +1;
}
$scope.totalminus =function()
{
$scope.totlike =$scope.totlike -1;
}

	});








