var app = angular.module('app',[]);
app.controller('myController', ['$scope','util',function($scope,util){
	$scope.controlType = util.getControlTypes();

	$scope.value = $scope.controlType.TextBox;

	$scope.controlTypes = [
		{displayText: 'TextBox', value:$scope.controlType.TextBox},
		{displayText: 'TextArea', value : $scope.controlType.TextArea},
		{displayText: 'RadioButton', value: $scope.controlType.RadioButton},
		{displayText: 'SingleSelectDropdown', value: $scope.controlType.SingleSelectDropdown},
		{displayText: 'MultiSelectDropDown', value: $scope.controlType.MultiSelectDropDown},
		{displayText: 'CheckBox', value: $scope.controlType.CheckBox}
	]
}]);
app.service('util', function(){
	return{
		getControlTypes:function(){
			var controlType = {
				TextBox : 1,
				TextArea : 2,
				RadioButton : 3,
				SingleSelectDropdown : 4,
				MultiSelectDropDown : 5,
				CheckBox : 6
			}
			return controlType;
		}
	}
})
app.directive('type',function(){
	return{
		restrict:'E',
		template:"<input type='' />",
		link: function(scope, element, attrs){						
			function identifyType(){
				switch(parseInt(attrs.ctrlid)){
					case scope.controlType.TextBox:
						element.replaceWith("<input type='text' />");
						break;
					case scope.controlType.TextArea:
						element.replaceWith("<input type='textarea' />");
						break;
					case scope.controlType.RadioButton:
						element.replaceWith("<input type='radio' />");
						break;
					case scope.controlType.SingleSelectDropdown:
						element.replaceWith("<select></select>");
						break;
					case scope.controlType.MultiSelectDropDown:
						element.replaceWith("<select></select>");
						break;
					case scope.controlType.CheckBox:
						element.replaceWith("<input type='checkbox' />");
						break;
				}
			}
			identifyType();			
			
		}
	}
})