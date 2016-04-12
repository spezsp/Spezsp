angular
.module("myApp")
.controller("contactsController", function($scope) {
	$scope.isCollapsed = true;

	var vm = this;
	vm.personnel = [
		{
			name : "Bruce Buck", 
			position : "Chairman", 
			photo : "img/bruce-buck.png"
		},
		{
			name : "Eugene Tenenbaum", 
			position : "Director", 
			photo : "img/eugene-tenenbaum.png"
		},
		{
			name : "Marina Granovskaia", 
			position : "Director", 
			photo : "img/marina-granovskaia.jpg"
		}
	]
});