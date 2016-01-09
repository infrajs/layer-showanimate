Event.one('Infrajs.oninit', function(layer) {
	//show
	infrajs.show_init();
},'showanimate');

Event.handler('layer.oncheck', function (layer){
	//show
	infrajs.show_animate(layer);
},'showanimate:tpl');

Event.handler('layer.onshow', function (layer){//Анимация только для первого показываемого слоя, вначале это корневой.. потом это текстовый в центре ожидается
	//show
	infrajs.show_div(layer);
},'showanimate:dom');


Event.handler('Infrajs.onshow', function () {
	//show
	infrajs.htmlsomelayeranimate=false;
}, 'showanimate');