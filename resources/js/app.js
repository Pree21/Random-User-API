var app = angular.module('contactApp', ['ngMaterial', 'ngMessages']);
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  });

app.controller('webController', function($scope, dataService) {
	$scope.loading = true; //loading div visible
  var tabs = [
		{ title: 'a', content: ""},
		{ title: 'b', content: ""},
		{ title: 'c', content: ""},
		{ title: 'd', content: ""},
		{ title: 'e', content: ""},
		{ title: 'f', content: ""},
		{ title: 'g', content: ""},
		{ title: 'h', content: ""},
		{ title: 'i', content: ""},
		{ title: 'j', content: ""},
		{ title: 'k', content: ""},
		{ title: 'l', content: ""},
		{ title: 'm', content: ""},
		{ title: 'n', content: ""},
		{ title: 'o', content: ""},
		{ title: 'p', content: ""},
		{ title: 'q', content: ""},
		{ title: 'r', content: ""},
		{ title: 's', content: ""},
		{ title: 't', content: ""},
		{ title: 'u', content: ""},
		{ title: 'v', content: ""},
		{ title: 'w', content: ""},
		{ title: 'x', content: ""},
		{ title: 'y', content: ""},
		{ title: 'z', content: ""}
	];
	$scope.selectedIndex = 0;
  //Alphabets
  var init = function(){
  	$scope.tabs = tabs;
  	dataService.getContacts(200).then(function(data){
      $scope.contacts = data.results;
      $scope.loading = false; //loader hide
    });
  }
	angular.element('[ng-controller=webController]').ready(init); //init invoke
});

app.controller('DialogController', function($scope, $mdDialog) {
  $scope.status = '  ';
	$scope.customFullscreen = false;
	
	$scope.showAdvanced = function(ev, contact) {
		$scope.objContact = contact;
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'userInfo.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
			scope: $scope.$new()
		})
	};
});

function DialogController($scope, $mdDialog) {
	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};
}