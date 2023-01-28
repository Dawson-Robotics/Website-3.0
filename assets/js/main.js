setTimeout(() => {
    let transition = document.querySelector("#transition")
    transition.style.display = "none"
}, 1500);


document.addEventListener('click', e => {
    if (e.target.classList.contains("navbutton")) {
        e.preventDefault();
        leave2(e.target.attributes.href.value);
    }
})

function leave2(loc) {

    rain = document.getElementById("transition-in"); 
    rain.hidden = false;
    rain.setAttribute("transition-style", "in:wipe:bottom-right");


        setTimeout(() => {
            location.href=loc;
        }, 1500);


}