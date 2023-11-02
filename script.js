mobile = navigator.maxTouchPoints > 0 && 'orientation' in window
if(mobile==true){
	 window.location.href = `mobile.html`
}
function click_hundler(id) {
	 window.location.href = `html/${id}.html`
}
