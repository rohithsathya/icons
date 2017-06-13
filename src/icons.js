var uiApp = angular.module('rsat.ui', []);
uiApp.directive('iconArrowLeft', function () {
            return {
                restrict: 'E',
                scope: {
                    size: '@',
                    color: '@'
                },
                template: ['<div ng-style="{\'height\':size || \'24px\',\'width\':size || \'24px\'}"> <svg fill="{{color}}" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">',
                    '<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"  />',
                    '<path d="M0 0h24v24H0z" fill="none" />',
                    '</svg></div>'].join('')

            }

        })
