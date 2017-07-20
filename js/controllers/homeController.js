var app;

app.controller('homeController',function($scope,$location,getBooks,getCategories){
    
    getBooks.then(function(response){
        $scope.books = response.data.books;
    },function(){
        $location.path('/error');
        $location.replace();
    });

    getCategories.then(function(response){
        $scope.categories = response.data.categories;
    },function(){
        $location.path('/error');
        $location.replace();
    });
});