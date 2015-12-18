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
            name: 'Jane',
            data: [5, 7, 3,5, 7, 3,5, 7, 3,5, 7, 3]
        }],
        title: {
            text: 'GCI Per Month'
        },
        loading: false
    }

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
            name: 'Jane',
            data: [100000,95000,110000,135000]
        }],
        title: {
            text: 'GCI Per Year'
        },
        loading: false
    }

});
