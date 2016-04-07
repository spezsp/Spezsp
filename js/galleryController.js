(function(){
    "use strict";

    angular
    	.module("myApp")
		.controller("galleryController", galleryController);

	function galleryController() {
        var vm = this;
        vm.myInterval = 2000;
        vm.noWrapSlides = false;
        vm.slides = addSlide();

		function addSlide() {
  			var slides = []
			for (var i = 1; i <= 4; i++) {
			slides.push({image : "img/team_photo/img_" + i + ".jpg"});
				};
				return slides;
			};
		};
})();