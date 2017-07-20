var app = angular.module('angularExersice', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', { //Home Path
        templateUrl: "views/home.html",
        controller: "homeController"
    }).when('/book/:id', { //book path
        templateUrl: "views/book.html",
        controller: "bookController"
    }).when('/error',{
        templateUrl : "views/error.html"
    })
    .otherwise({ 
        templateUrl: "views/notfound.html" 
    });
});

app.directive('booksShow',['getBooks' , function(getBooks) {
  return {
    restrict : 'E',
    scope: {
        theme : "@",
        booksToShow : "@",
        interval : "@",
        title : "@",
        books : "="
    },
    link: function(scope,element,attrs){

        scope.booksToShow = scope.booksToShow || 4;
        scope.theme = scope.theme || "dark-theme";

        scope.interval = scope.interval || 500;

        scope.title = scope.title || "Books Courosel";
        var books = scope.books;
        var sliderCount = Math.ceil(books.length / scope.booksToShow);
        var BooksList = new Array(sliderCount);
        for (var i = 0; i < sliderCount; i++) {
            BooksList[i] = books.slice(i * scope.booksToShow, (i + 1) * scope.booksToShow);
        }
        scope.booksList = BooksList;
    },
    templateUrl: 'views/templates/books.html'
  };
}]);

app.directive('categoriesShow',['getCategories', function(getCategories){
    return {
        restrict : 'E',
        scope: {
            maxCount : "@",
            orderBy : "@",
            categories: "="
        },
        link: function(scope,element,attrs){
            if(!scope.maxCount || scope.maxCount > 8 || scope.maxCount < 1)
                scope.maxCount = 8;
            
            scope.firstClass = '';
            switch(scope.maxCount){
                
                case "1":
                    scope.itemClass = 'col-sm-4 col-sm-offset-4';
                    break;
                
                case "2":
                    scope.itemClass = 'col-sm-6'
                    break;
                
                case "3":
                case "5":
                case "6":
                    scope.itemClass = 'col-sm-4';
                    break;
                
                case "4":
                case "7":
                case "8":
                    scope.itemClass = 'col-sm-3';
                    break;
                default:
                    scope.itemClass = 'col-sm-3';
            }
        },
        templateUrl: 'views/templates/categories.html'
    };
}]);

app.directive('book',['$http',function($http){
    return {
        restrict : 'E',
        scope: {
            book : "="
        },
        templateUrl: 'views/templates/book.html'
    };
}]);