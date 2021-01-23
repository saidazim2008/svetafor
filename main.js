const box = document.querySelectorAll(".box")
let activeLight = 0 

setInterval(() => {
	Lightsvetafor()
}, 3000)

function Lightsvetafor() {
	box[activeLight].className = 'box';
	activeLight++

	if(activeLight > 2) {
		activeLight = 0
	}

	const currentLight = box[activeLight]
	currentLight.classList.add(currentLight.getAttribute
		("color"))
}
