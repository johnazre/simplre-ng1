angular.module('simplreApp').controller('DashboardCtrl', function($scope, $mdDialog, $mdMedia, UserSvc) {

    $scope.gciPerMonth = {
        options: {
          colors: ['#50B432'],
            chart: {
                type: 'line',
                enableMouseTracking: true,
                plotShadow: true
            },
            legend: {
                backgroundColor: '#FCFFC5'
            },
        },

        xAxis: {
            title: {
              text: "Months",
            },
            categories: ['Jan','Feb',"Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
        },
        yAxis: {
            title: {
                text: 'Dollars'
            }
        },
        series: [{
            name: 'Actual',
            data: [5, 7, 3,5, 7, 3,5, 7, 3,5, 7, 3]
        }],
        title: {
            text: 'Per Month'
        },
        loading: false
    };

    $scope.gciTotal = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Years"
            },
            categories: ['2013','2014', '2015', '2016']
        },
        yAxis: {
            title: {
                text: 'Dollars'
            }
        },
        series: [{
            name: 'Actual',
            data: [100000,95000,110000,135000]
        }],
        title: {
            text: 'Per Year'
        },
        loading: false
    };

    $scope.leadGenWeekly = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Days"
            },
            categories: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday/Sunday']
        },
        yAxis: {
            title: {
                text: 'Number of Contacts/Meetings'
            }
        },
        series: [{
            name: 'Contacts',
            data: [100,95,110,135]
        },
        {
            name: 'Meetings',
            data: [10,20,40,35]
        }],
        title: {
            text: 'Weekly Lead Generation'
        },
        loading: false
    };

    $scope.leadGenMonthly = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Days"
            },
            categories: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday/Sunday']
        },
        yAxis: {
            title: {
                text: 'Number of Contacts/Meetings'
            }
        },
        series: [{
            name: 'Contacts',
            data: [100,95,110,135]
        },
        {
            name: 'Meetings',
            data: [10,20,40,35]
        }],
        title: {
            text: 'Monthly Lead Generation'
        },
        loading: false
    };

    $scope.closedVolMonthly = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Month"
            },
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Dollars'
            }
        },
        series: [{
            name: 'Actual',
            data: [200000, 175000, 310000, 535000, 250000, 345821, 123654, 857213, 450245, 245753, 105356, 456934]
        }],
        title: {
            text: 'Closed Volume Monthly'
        },
        loading: false
    };

    $scope.activeListingVol = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Month"
            },
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Dollars'
            }
        },
        series: [{
            name: 'Actual',
            data: [200000, 175000, 310000, 535000, 250000, 345821, 123654, 857213, 450245, 245753, 105356, 456934]
        }],
        title: {
            text: 'Active Listing Volume'
        },
        loading: false
    };

    $scope.pendingVolume = {
        options: {
            chart: {
                type: 'line',
                enableMouseTracking: true
            }
        },
        xAxis: {
            title: {
              text: "Month"
            },
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Dollars'
            }
        },
        series: [{
            name: 'Actual',
            data: [200000, 175000, 310000, 535000, 250000, 345821, 123654, 857213, 450245, 245753, 105356, 456934]
        }],
        title: {
            text: 'Pending Volume'
        },
        loading: false
    };

    $scope.noteCounter = 0;
    $scope.createNotification = function () {
      $scope.noteCounter++;
      console.log($scope.noteCounter);
    };
    $scope.clearNotification = function () {
      $scope.noteCounter = 0;
    };

    $scope.newTask = {
      name: '',
      assignedTo: '',
    }

    $scope.taskDate = new Date();
    $scope.taskList = [];
    $scope.newTask = {};
    $scope.addTask = function (newTask) {
      console.log(newTask.name);
      $scope.taskList.push(newTask);
      console.log(newTask);
      $scope.newTask = {};
    };


});
