/**
 * Logs Controller
 */

angular
    .module('RDash')
    .controller('LogsCtrl', ['$scope', LogsCtrl]);

function LogsCtrl($scope) {
    $scope.logs = [{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },{
        date: '2015-05-01 18:00:00',
        host: 'Server1',
        program: 'l2fwd',
        priority: 'Info',
        message: 'Keyword (hello) is found',
    }, {
        date: '2015-05-01 17:00:00',
        host: 'Server2',
        program: 'l2fwd',
        priority: 'Error',
        message: 'Keyword (world) is found',
    },];

    $scope.addLog = function() {
        $scope.logs.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeLog = function(index) {
        $scope.logs.splice(index, 1);
    };
}