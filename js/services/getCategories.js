var app;

app.factory('getCategories', function($http) {
    return $http.get('data/categories.json');
});