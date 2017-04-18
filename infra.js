Event.one('Controller.oninit', function(layer) {
	//show
	infrajs.show_init();
},'showanimate');

Event.handler('Layer.oncheck', function (layer){
	//show
	infrajs.show_animate(layer);
},'showanimate:tpl');

Event.handler('Layer.onshow', function (layer){//Анимация только для первого показываемого слоя, вначале это корневой.. потом это текстовый в центре ожидается
	//show
	
	infrajs.show_div(layer);
	
},'showanimate:dom');


Event.handler('Controller.onshow', function () {
	//show
	infrajs.htmlsomelayeranimate=false;
}, 'showanimate');