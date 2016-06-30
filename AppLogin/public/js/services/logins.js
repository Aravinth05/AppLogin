// js/services/todos.js
angular.module('logService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Log', function ($http) {
    return {
        get : function () {
            return $http.get('/api/todos');
        }
    }
});