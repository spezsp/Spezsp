(function(){
	"use strict";

angular
.module("myApp").controller("galleryController", function ($scope) {
	var vm = this;
	$scope.myInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function() {
		slides.push({
		image : "img/team_photo/img_"+slides.length+".jpg",
		text : ["Gary Cahill","Thibaut Courtois","César Azpilicueta","Asmir Begovic","Baba Rahman","Kurt Zouma","John Terry","Branislav Ivanovic","Eden Hazard","Cesc Fàbregas","Nemanja Matic","John Mikel Obi","Oscar","Pedro","Willian","Kenedy","Diego Costa","Loïc Remy"][slides.length % 18],
		id : currIndex++
		});
	};

	for (var i = 0; i < 18; i++) {
		$scope.addSlide();
		}
	});
})();
