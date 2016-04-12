(function () {
	"use strict";

	angular.module("myApp", ["ui.router", "ngAnimate", "ui.bootstrap"])
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
					templateUrl: "pages/contacts.html",
					controller:  "contactsController as contacts"
				});
	};
})();