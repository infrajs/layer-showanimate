
Event.handler('Layer.oncheck', function (layer){
	
	var val = Layer.pop(layer,'showanimate');
	if (!val) return;
	Controller.run(layer, function (l) {
		if (l.showanimate != undefined) return;
		l.showanimate = true;
	});
},'showanimate:tpl');

Event.handler('Layer.onshow', function (layer){

	if (!layer.showanimate) return;
	var store = Controller.store();
	if (store.counter == 1) return;
	var obj = document.getElementById(layer.div);
	if (!obj) return;
	obj.style.transition = 'none'
	obj.style.opacity = 0
	setTimeout(() => {
		obj.style.transition = 'opacity 300ms cubic-bezier(0.75, 0, 0.25, 1)'	
		obj.style.opacity = 1
	},1)
	
},'showanimate:dom');
