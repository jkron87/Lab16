var app = angular.module('postApp');

app.controller('feedCtrl', function($scope) {
    $scope.posts = [
    {
      title: "Post 1",
      author: "Superman"
    },
    {
      title: "Post 2",
      author: "Batman"
    },
    {
      title: "Post 3",
      author: "Wonderwoman"
    }
  ];
});
