// app.factory('beerService', function(){
//   var obj = {
//     beersArray: [
//     {
//       beerName: 'Oakshire',
//       beerStyle: 'Espresso',
//       beerABV: '5%',
//       beerImage: "http://www.ninkasibrewing.com/Family-Flagship-IPA-300x432.png"
//     },
//     {
//       beerName: 'Ninkasi',
//       beerStyle: 'Slayer',
//       beerABV: '55%',
//       beerImage: "http://www.ninkasibrewing.com/Family-Flagship-IPA-300x432.png"
//     },
//     {
//       beerName: 'Oakshire',
//       beerStyle: 'Espresso',
//       beerABV: '5%',
//       beerImage: "http://www.ninkasibrewing.com/Family-Flagship-IPA-300x432.png"
//     },
//     {
//       beerName: 'Ninkasi',
//       beerStyle: 'Slayer',
//       beerABV: '55%',
//       beerImage: "http://www.ninkasibrewing.com/Family-Flagship-IPA-300x432.png"
//     }
//   ], 
// };



// return obj;
// });

app.factory('beerService', ['$http', function ($http) {
  var beerService = {
    beers: []
  };

beerService.getAll = function () {
  console.log('went from controller to service');
  return $http.get('/beers').success(function (data) {
    console.log('got back from the server w the data');
    console.log(data);
    // this copies the response posts to the client side
    // 'beers' under 'beerService'
    angular.copy(data, beerService.beers);
  });
};

  return beerService;
}]);

  // var beerObject = new Object();
  // beerObject.beersArray = beersArray;
  // beerObject.count = 2;
  // beerObject.AddBeer = function(beer){
  //   beersArray.push(beer);
  // };
// var beerObject = {beersArray:beersArray};





