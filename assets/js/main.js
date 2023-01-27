
document.addEventListener('click', e => {
    e.preventDefault();
    leave2(e.target.attributes.href.value);
    
})

function leave2(loc) {

    rain = document.getElementById("transition-in"); 
    rain.hidden = false;
    rain.setAttribute("transition-style", "in:wipe:bottom-right");


        setTimeout(() => {
            location.href=loc;
        }, 1500);


}
