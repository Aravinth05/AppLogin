// js/controllers/main.js
    
angular.module('todoController', [])

    .controller('mainController', function($scope, $http) {
   $scope.formData = {};
    

        // when submitting the add form, send the text to the node API
    $scope.createTodo = function (user) {
            
                $http.post('/api/todos', $scope.user)
                        .success(function(data) {
                                $scope.formData = {}; // clear the form so our user is ready to enter another
                                $scope.todos = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

    //    // delete a todo after checking it
    //    //$scope.deleteTodo = function(id) {
    //    //        $http.delete('/api/todos/' + id)
    //    //                .success(function(data) {
    //    //                        $scope.todos = data;
    //    //                })
    //    //                .error(function(data) {
    //    //                        console.log('Error: ' + data);
    //    //                });
    //    //};

    //$scope.createTodo =function () {
    //    UserService.Update(vm.user)
    //            .then(function () {
    //        FlashService.Success('User updated');
    //    })
    //            .catch(function (error) {
    //        FlashService.Error(error);
    //    });
    //}
  
    });