app.controller('MainCtrl', function($scope, $http, beerService){
  
  
  //sending a get request
  $http.get('/beers').success(function(data){

    console.log('back from the server -- heres what it sent');
    $scope.beersArray = data;

  });
















  // beerService.getAll().then(function(){

  //   $scope.beers = beerService.beers;

  // });

  //invoke my functions
// $scope.addToBeersArray = function(){
//   // take the input from "name" and push it to beersArray
//     $scope.beers.push({

//       beerName: $scope.name,
//       beerStyle: $scope.style,
//       beerABV: $scope.abv,
//       beerImage: $scope.image

//     });
//     console.log($scope.name + $scope.style + $scope.abv + $scope.image);
//     $scope.name = '';
//     $scope.style = '';
//     $scope.abv = '';
//     $scope.image = '';
// };

$scope.removeBeer = function(index){
  $scope.beers.splice(index, 1);
};


});

