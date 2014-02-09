console.log('i am script');
(function() {
  console.log('i am coffee');

}).call(this);

window.AngularRailsTemplates || (window.AngularRailsTemplates = angular.module("templates", []));

window.AngularRailsTemplates.run(["$templateCache",function($templateCache) {
  $templateCache.put("views/haml_view.haml.html", "%h1 I am sample slim view\n");
}]);

window.AngularRailsTemplates || (window.AngularRailsTemplates = angular.module("templates", []));

window.AngularRailsTemplates.run(["$templateCache",function($templateCache) {
  $templateCache.put("views/sample.html", "\u003Ch1\u003EI am sample html view\u003C/h1\u003E\n");
}]);

window.AngularRailsTemplates || (window.AngularRailsTemplates = angular.module("templates", []));

window.AngularRailsTemplates.run(["$templateCache",function($templateCache) {
  $templateCache.put("views/slim_view.slim.html", "h1 I am sample slim view\n");
}]);



