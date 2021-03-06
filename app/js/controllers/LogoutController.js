'use strict';

socialNetworkApp.controller('LogoutController',
    ['$scope', '$location', '$timeout', 'userData', 'credentials', 'toaster', function ($scope, $location, $timeout, userData, credentials, toaster){
        $scope.logoutUser = logoutUser;
        $scope.logoutUser();

        function backHome(time) {
            $timeout(function () {
                $location.path('/');
            }, time);
        }

        function logoutUser() {
            userData.logout()
                .$promise
                .then(function (data) {
                    credentials.deleteCredentials();
                    toaster.pop('success', 'Logout successful!');
                    backHome(2000);
                }, function (error) {
                    toaster.pop('error', 'Logout error!', error.data.message);
                    backHome(2000);
                })
        }
       
    }
]);
