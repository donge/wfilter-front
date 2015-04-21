/**
 * Words Controller
 */

angular
    .module('RDash')
    .controller('WordsCtrl', ['$scope', '$http', WordsCtrl]);

function WordsCtrl($scope, $http) {
    $scope.word = {};
    $scope.words = [{
        keyword: 'hello',
        rule: 'pass',
    }, {
        keyword: 'world',
        rule: 'deny',
    }, {
        keyword: '你好',
        rule: 'pass',
    }, {
        keyword: '世界',
        rule: 'deny',
    }];

    $http.get('/api/words')
        .success(function(data) {
            $scope.words = data;
            console.log(data);
        })
        .error(function(data) {
            console.log(data);
        });


    $scope.addWord = function() {
        //$scope.words.push($scope.word);
        $scope.words.splice(0, 0, $scope.word);

        $http.post('/api/words', $scope.word)
        .success(function(data) {
            $scope.word = {};
            console.log(data);
        })
        .error(function(data) {
            console.log(data);
        });
        /* from url encoded
        $http({
            url: '/api/words',
            method: 'POST',
            data: $.param($scope.word),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })*/

    };

    $scope.delWord = function(index, id) {
        $scope.words.splice(index, 1);

        $http.delete('/api/words/' + id)
        .success(function(data) {
            $scope.word = {};
            console.log(data);
        })
        .error(function(data) {
            console.log(data);
        });
    };
}