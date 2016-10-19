geodash.controllers.SPARCControllerModalWelcome = function($scope, $element, $controller, $interpolate)
{
  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));

  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'sparc_welcome';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  $scope.showOptions = geodash.ui.showOptions;
  $scope.updateValue = geodash.util.updateValue;

  var mainScope = $element.parents(".geodash-dashboard:first").isolateScope();
  $scope.dashboard = mainScope.dashboard;
  $scope.state = mainScope.state;
  $scope.country = mainScope.state.iso3;
  $scope.hazard = mainScope.state.hazard;

  $scope.clearSelection = function(id)
  {
    $("#"+id).val(null);
    $("#"+id).typeahead("close");
  };
};
