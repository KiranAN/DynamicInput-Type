var app = angular.module('app',[]);
app.controller('myController', ['$scope',function($scope){
	$scope.controlType = {
			TextBox : 1,
			TextArea : 2,
			RadioButton : 3,
			SingleSelectDropdown : 4,
			MultiSelectDropDown : 5,
			CheckBox : 6			
	}

	$scope.controls = [1,2,3,4,5,6];
	$scope.value =6;	
}]);
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