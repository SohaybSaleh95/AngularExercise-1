var app;

app.controller('bookController',function($scope,$http,$location,$routeParams){
    var id = parseInt($routeParams.id);
    if(isNaN(id)){
        $location.path('/error');
        $location.replace();
    }else{
        $http.get('data/books/book' + id + '.json').then(function(response){
            $scope.book = response.data;
        },function(){
            $location.path('/error');
            $location.replace();
        });
    }
    
});