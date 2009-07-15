(function(){

this.Default = new Class({

	Extends: Controller,

	index: function(){
		this.puts(this.render('common/welcome'));
	},

	hello: function(name){
		name = name || "World";
		this.greeting = "Hello " + name.capitalize() + "!";
		this.puts(this.render('common/helloworld'));
	}

});

})();