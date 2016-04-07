(function(){
    "use strict";

    angular
    	.module("myApp")
		.controller("galleryController", galleryController);

	function galleryController() {
        var vm = this;
        vm.myInterval = 2000;
        vm.noWrapSlides = false;
        vm.slides = [
        	{image : "img/team_photo/img_1.jpg"},
        	{image : "img/team_photo/img_2.jpg"},
        	{image : "img/team_photo/img_3.jpg"},
        	{image : "img/team_photo/img_4.jpg"}
		];
   //      function addSlide() {
   //      	vm.slides = [];
			// for (var i = 1; i <= 4; i++) {
   //  		vm.slides.push({image : "img/team_photo/img_" + i + ".jpg"});
  	// 		};
  	// 	addSlide();
  	// 	};
		}
})();