var app = angular.module('serviceModule');

app.factory('service', function(){
	var storedName = "Name";
	var storedDish = "Dish";

	return {
	
		save: function(name,dish){
			storedName = name;
			storedDish = dish;
		},

		get: function(){
    		return {name:storedName, dish:storedDish}
    		;
    	}
  	 };
});