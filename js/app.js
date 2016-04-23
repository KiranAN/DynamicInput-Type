var app = angular.module('app',[]);
app.controller('myController', ['$scope','util',function($scope,util){
	$scope.controlType = util.getControlTypes();
	$scope.value = $scope.controlType.CheckBox;
	
	$scope.controlTypes = [
		{displayText: 'TextBox', value:$scope.controlType.TextBox},
		{displayText: 'TextArea', value : $scope.controlType.TextArea},
		{displayText: 'RadioButton', value: $scope.controlType.RadioButton},
		{displayText: 'SingleSelectDropdown', value: $scope.controlType.SingleSelectDropdown},
		{displayText: 'MultiSelectDropDown', value: $scope.controlType.MultiSelectDropDown},
		{displayText: 'CheckBox', value: $scope.controlType.CheckBox}
	];

	$scope.typeSelected = function(val){
		$scope.value = val;
	}
}]);
app.service('util', function(){
	return{
		getControlTypes:function(){
			var typeEnum = {
				TextBox : 1,
				TextArea : 2,
				RadioButton : 3,
				SingleSelectDropdown : 4,
				MultiSelectDropDown : 5,
				CheckBox : 6
			}
			return typeEnum;
		}
	}
})
app.directive('type',function(){
	return{
		restrict:'E',
		template:"<input type='text' />",
		link: function(scope, element, attrs){			
			scope.$watch('value',function(newObj, oldObj){
				if(newObj != oldObj)
					identifyType();
			});
			function identifyType(){
				switch(parseInt(attrs.ctrlid)){
					case scope.controlType.TextBox:
						element[0].innerHTML="<input type='text' />";
						break;
					case scope.controlType.TextArea:
						element[0].innerHTML="<textarea/>";
						break;
					case scope.controlType.RadioButton:
						element[0].innerHTML="<input type='radio' />";
						break;
					case scope.controlType.SingleSelectDropdown:
						element[0].innerHTML="<select></select>";
						break;
					case scope.controlType.MultiSelectDropDown:
						element[0].innerHTML="<select></select>";
						break;
					case scope.controlType.CheckBox:
						element[0].innerHTML="<input type='checkbox' />";
						break;
				}
			}
			identifyType();			
			
		}
	}
})