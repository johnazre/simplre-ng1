angular.module('simplreApp').service('TaskSvc', function($http, $q) {

   var defer = $q.defer();

   var success = function(response){
       defer.resolve(response);
   };

   var error = function(error){
       console.log(error);
   };

  this.getTasks = function () {

    $http({
      method: "GET",
      url: "/api/task"
    }).then(success, error);

    return defer.promise;
  };

  this.postTask = function (task) {
    console.log("task", task)

    $http({
      method: "POST",
      url: "/api/task",
      data: {
        name: task.name,
        assignedTo: task.assignedTo,
        description: task.description,
        dueDate: task.dueDate

      }
    }).then(success, error);

    return defer.promise;
  };

  this.editTask = function (id) {

    $http({
      method: "PUT",
      url: "/api/task/" + id,
      data: {
      }
    }).then(success, error);

    return defer.promise;
  };

  this.deleteTask = function (id) {

    $http({
      method: "DELETE",
      url: "/api/task/" + id
    }).then(success, error);

    return defer.promise;
  };

});
