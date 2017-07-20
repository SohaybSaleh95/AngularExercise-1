var app;

app.factory('getBooks', function($http) {
    return $http.get('data/books.json');
});