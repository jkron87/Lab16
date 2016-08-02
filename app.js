var app = angular.module('postApp', []);
app.directive('post', function() {
  return {
    restrict: 'AE',
    templateUrl: 'templates/post.html'

  };
});

//typically you would create this in a different fieldset
