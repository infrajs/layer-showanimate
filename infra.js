
import { Layer } from '/vendor/infrajs/controller/src/Layer.js'

Layer.done('show', layer => {
	if (!layer.div) return
	let div = document.getElementById(layer.div)
	if (!div) return
	div.style.opacity = 1
	if (!Layer.pop(layer, 'showanimate')) return
	if (layer.showed && Layer.pop(layer, 'showanimatefastreparse')) return
	div.style.transition = 'none'
	div.style.opacity = 0
	setTimeout(() => {
		//div.style.transition = 'opacity 500ms cubic-bezier(0.75, 0, 0.25, 1)'	
		div.style.transition = 'opacity 0.3s'	
		div.style.opacity = 1
	}, 1)
})
