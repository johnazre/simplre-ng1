angular.module('simplreApp').directive('dashboardGraphs', function( ){
  return{
    template: `
        <uib-accordion close-others="oneAtATime">
          <uib-accordion-group heading="GCI (Gross Commission Income)" is-open="status.isFirstOpen" is-disabled="status.isFirstDisabled">
            <div class="row">
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="gciPerMonth" config="gciPerMonth"></highchart>
              </div>
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="chart1" config="gciTotal"></highchart>
              </div>
            </div>
          </uib-accordion-group>
          <uib-accordion-group heading="Lead Generation">
            <div class="row">
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="leadGenWeekly" config="leadGenWeekly"></highchart>
              </div>
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="leadGenMonthly" config="leadGenMonthly"></highchart>
              </div>
            </div>
          </uib-accordion-group>
          <uib-accordion-group heading="Closed Volume">
            <div class="row">
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="closedVolMonthly" config="closedVolMonthly"></highchart>
              </div>
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="activeListingVol" config="activeListingVol"></highchart>
              </div>
            </div>
          </uib-accordion-group>
          <uib-accordion-group heading="Pending Volume">
            <div class="row">
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="pendingVolume" config="pendingVolume"></highchart>
              </div>
              <div class="col-md-10 col-sm-10 col-lg-6">
                <highchart id="chart1" config="gciTotal"></highchart>
              </div>
            </div>
          </uib-accordion-group>
        </uib-accordion>
    `,
    controller: function($scope){
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
    }
  }

})
