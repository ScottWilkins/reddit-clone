var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.showNewPost = false;
  $scope.content = [
    {title: "very bad day",
    author: "scotty the forgetful",
    image: "http://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2014/01/25/shutterstock128088629.jpg",
    description: "forgot my stupid phone today"},
    {title: "olive is dumb",
    author: "olive oyl (the cat)",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg",
    description: "i am dumb"},
    {title: "totes mcGotes",
    author: "mcGotey",
    image: "https://s-media-cache-ak0.pinimg.com/564x/dd/b9/e8/ddb9e80da0c5cea3843b06bcbccee264.jpg",
    description: "picture's worth a thousand words"}
  ]
  $scope.newPost = function(){
    $scope.showNewPost = true
  }
  $scope.addPost = function(){
    $scope.showNewPost = false
  }
})
