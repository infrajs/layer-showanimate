
//import { Event } from '/vendor/infrajs/event/Event.js'
import { Layer } from '/vendor/infrajs/controller/src/Layer.js'
import { Controller } from '/vendor/infrajs/controller/src/Controller.js'
/*Event.handler('Layer.oncheck', function (layer){
	
	var val = Layer.pop(layer,'showanimate');
	if (!val) return;
	Controller.run(layer, function (l) {
		if (l.showanimate != undefined) return;
		l.showanimate = true;
	});
},'showanimate:tpl');*/

Layer.done('show', layer => {
	if (!layer.div) return
	let div = document.getElementById(layer.div)
	if (!div) return
	div.style.opacity = 1
	if (!Layer.pop(layer, 'showanimate')) return
	
	//var store = Controller.store()
	//if (layer.showed) return
	if (layer.showed && Layer.pop(layer, 'showanimatefastrepase')) return
	div.style.transition = 'none'
	div.style.opacity = 0
	setTimeout(() => {
		div.style.transition = 'opacity 800ms cubic-bezier(0.75, 0, 0.25, 1)'	
		div.style.opacity = 1
	},1)
	
});
