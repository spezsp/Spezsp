(function () {
	"use strict";

	angular.module("myApp", ["ui.router", "ngAnimate", "ui.bootstrap", "ui.bootstrap.carousel"])
		.config(configApp);

		configApp.$inject = ["$stateProvider", "$urlRouterProvider"];
		function configApp($stateProvider, $urlRouterProvider) {
			$urlRouterProvider
				.otherwise("/about");
		
			$stateProvider
				.state("about", {
					url: "/about",
					templateUrl: "pages/about.html"
				})

				.state("team", {
					url: "/team",
					templateUrl: "pages/team.html",
					controller:  "teamController as team"
				})

				.state("gallery", {
					url: "/gallery",
					templateUrl: "pages/gallery.html",
					controller:  "galleryController as gallery"
				})

				.state("contacts", {
					url: "/contacts",
					templateUrl: "pages/contacts.html"
				});
	};
})();