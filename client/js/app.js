(function(){

    var app = angular.module("myApp", ["ngRoute","ui.router"]);
    app.config(function($routeProvider, $locationProvider) {
        // $stateProvider
        //     .state('add-review', {
        //         url: '/gym_users:userId?',
        //         templateUrl: 'Views/index.html',
        //         // controller: 'AddReviewController',
        //         authenticate: true
        //     });
        $routeProvider
            .when("/", {
                templateUrl : "Views/login.html",
                showHeader : false
            })
            .when("/admin:userId?", {
                templateUrl : "Views/admin_landing_page.html",
                showHeader : true
            })
            .when("/add_gym_users:userId?", {
                templateUrl : "Views/register_user.html",
                showHeader : true
            })
            .when("/del_gym_users:userId?", {
                templateUrl : "Views/del_user.html",
                showHeader : true
            })
            .when("/guidelines", {
                templateUrl : "Views/guidelines.html"
            })
            .when("/tnc", {
                templateUrl : "Views/tnc.html"
            })
            .when("/privacy", {
                templateUrl : "Views/privacy.html"
            })
            .when("/team", {
                templateUrl : "Views/team-members.html"
            })
             .when("/brand", {
                templateUrl : "Views/brand.html"
            })
             .when("/campus", {
                templateUrl : "Views/campus.html"
            })
            .when("/login", {
                templateUrl: "Views/login.html"
            })
            .when("/join", {
                templateUrl: "Views/join.html"
            })
            .when("/signup/sponsor", {
                templateUrl: "Views/sponsorSingUp.html"
            })
            .when("/signup/organiser", {
                templateUrl: "Views/organiserSignUp.html"
            })
            .when("/contact", {
                templateUrl : "Views/contactUs.html"
            })
            .when("/faq", {
                redirectTo: "/faq-event-organiser"
            })
            .when("/faq-event-organiser", {
                templateUrl : "Views/faq-event-org.html"
            })
            .when("/faq-sponsor", {
                templateUrl : "Views/faq-sponsor.html"
            })
            .when("/howitworks", {
                redirectTo: "/howitworksevents"
            })
            .when("/howitworksevents", {
                templateUrl : "Views/hiwevents.html"
            })
             .when("/events", {
                templateUrl : "../Views/eventSearch.html"
            })
            .when("/sponsor", {
                templateUrl : "../Views/sponsorSearch.html"
            })
            .when("/howitworkssponsors", {
                templateUrl : "Views/hiwsponsors.html"
            });
    //        .otherwise({
    //            templateUrl : "../Views/Index_view.html"
    //        });
        $locationProvider.html5Mode(true);
    });

// run(['$rootScope', function($rootScope) {
//     $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
//         $rootScope.showHeader = next.$$route.showHeader;
//     });
// }]);

})();