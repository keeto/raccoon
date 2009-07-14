(function(){

this.Default = new Class({

	Extends: Controller,

	index: function(){
		this.render('common/welcome').echo();
	},

	hello: function(name){
		name = name || "World";
		this.greeting = "Hello " + name.capitalize() + "!";
		this.render('common/helloworld').echo();
	}

});

})();