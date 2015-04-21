/**
 * Rules Controller
 */

angular
    .module('RDash')
    .controller('RulesCtrl', ['$scope', RulesCtrl]);

function RulesCtrl($scope) {
    $scope.rules = [{
        ip: 'all',
        domain: 'all',
        url: '',
        check: false
    }, {
        ip: '',
        domain: 'www.zhiyuan.com',
        url: '',
        check: true
    }, {
        ip: '',
        domain: 'donge.org',
        url: '/hello',
        check: true
    }, {
        ip: '192.168.1.1',
        domain: '',
        url: '',
        check: true
    }];

    $scope.add = function() {
        $scope.rules.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeLog = function(index) {
        $scope.rules.splice(index, 1);
    };
}