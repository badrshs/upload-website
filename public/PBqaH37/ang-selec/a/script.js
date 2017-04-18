var app = angular.module('lowapp', ['ngRoute','ngAnimate','ngAria','ngMaterial']);


app.controller('data-lst', function($scope,$http) {
    var a;
  $scope.selval ="10000443833fsdfds";
    $scope.data1=[];

      $http.get("https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1").success(function(result) {
     	    	$scope.results = result.productList;
     	    	 
     	          var c = $scope.results.length;
     	         
     	     
     	    	 for (var i = 0; i < c-1 ; i++)
    {

     	    	   var newitem ={};
          newitem.networkPrice = result.productList[i].networkPrice;
          newitem.description = result.productList[i].description;
                 newitem.productId = result.productList[i].productId;
          newitem.marketingBullets1 = result.productList[i].marketingBullets[0];
          newitem.marketingBullets2 = result.productList[i].marketingBullets[1];
          newitem.marketingBullets3 = result.productList[i].marketingBullets[2];
          newitem.brand = result.productList[i].brand;
          // newitem.tagsone = result.deals[i].tags[0];
          //  newitem.tagstwo = result.deals[i].tags[1];
         
            newitem.imageUrlsm = result.productList[i].imageUrls.sm;
            newitem.imageUrlmd = result.productList[i].imageUrls.md;
            newitem.imageUrllg = result.productList[i].imageUrls.lg;
            newitem.imageUrlxl = result.productList[i].imageUrls.xl;
          //     newitem.link = result.deals[i].link;
          //       newitem.image = result.deals[i].image;
          // newitem.like = Math.floor((Math.random() * 20) + 1);
          //  $scope.one = newitem.like;
          //  $scope.totlike = $scope.totlike + $scope.one;
            
       $scope.data1.push(newitem);
      
   }
    console.log($scope.data1);
  
      });

      $scope.myFunc = function(a) {
      	$scope.selval = a;
       
    };
    $scope.myPrice = function(a) {
       alert('the product Price : $' + a);
       
    };
     });      
