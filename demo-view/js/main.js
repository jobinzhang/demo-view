var app = angular.module("myApp", []).directive('onFinish', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }});
app.controller("myCtrl", function($scope) {
		
	
	
	$scope.product1 = {
			"firsttype":"",
			"id":"",
			"img":"",
			"name":""
	}
	$scope.product2 = {
			"firsttype":"",
			"id":"",
			"img":"",
			"name":""
	}
	$scope.product3 = {
			"firsttype":"",
			"id":"",
			"img":"",
			"name":""
	}
	$scope.product4 = {
			"firsttype":"",
			"id":"",
			"img":"",
			"name":""
	}
	$(function(){
		$scope.getData();
	});
	
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		$("#container").PageSwitch({
			direction:'horizontal',
			easing:'ease-in',
			duration:1000,
			autoPlay:true,
			loop:'false'
		});
	});
	$scope.rotationList = [];
	
	//获取数据
	$scope.getData = function(){
		$.ajax({
			  type: 'POST',
			  url: '/Apicontent/queryForHomePage',
			  contentType: 'application/json; charset=UTF-8',
			  dataType:'json',
			  success: function(data){
				  $scope.$apply(function(){
					  $scope.rotationList = data.homeList;
					  for(var i=0;i<data.homeProductList.length;i++){
						  if("1" == data.homeProductList[i].sequence){
							  $scope.product1 = {
										"firsttype":data.homeProductList[i].firsttype,
										"id":data.homeProductList[i].id,
										"img":data.homeProductList[i].homeimg,
										"name":data.homeProductList[i].name,
								}
						  }
						  else if("2" == data.homeProductList[i].sequence){
							  $scope.product2 = {
										"firsttype":data.homeProductList[i].firsttype,
										"id":data.homeProductList[i].id,
										"img":data.homeProductList[i].homeimg,
										"name":data.homeProductList[i].name,
								}
						  }
						  else if("3" == data.homeProductList[i].sequence){
							  $scope.product3 = {
										"firsttype":data.homeProductList[i].firsttype,
										"id":data.homeProductList[i].id,
										"img":data.homeProductList[i].homeimg,
										"name":data.homeProductList[i].name,
								}
						  }
						  else if("4" == data.homeProductList[i].sequence){
							  $scope.product4 = {
										"firsttype":data.homeProductList[i].firsttype,
										"id":data.homeProductList[i].id,
										"img":data.homeProductList[i].homeimg,
										"name":data.homeProductList[i].name,
								}
						  }
					  }
					  console.info(data)
					});
			  }
			});
	}

});