(function(){
	"use strict";

angular
.module("myApp").controller("galleryController", function () {
	var vm = this;
	vm.myInterval = 3000;
	vm.noWrapSlides = false;
	vm.active = 0;
	var slides = vm.slides = [];
	var currIndex = 0;

	vm.addSlide = function() {
		slides.push({
		image : "img/team_photo/img_"+slides.length+".jpg",
		text : ["Gary Cahill","Thibaut Courtois","César Azpilicueta","Asmir Begovic","Baba Rahman","Kurt Zouma","John Terry","Branislav Ivanovic","Eden Hazard","Cesc Fàbregas","Nemanja Matic","John Mikel Obi","Oscar","Pedro","Willian","Kenedy","Diego Costa","Loïc Remy"][slides.length % 18],
		id : currIndex++
		});
	};

	for (var i = 0; i < 18; i++) {
		vm.addSlide();
		}
	});
})();
