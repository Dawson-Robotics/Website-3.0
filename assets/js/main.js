
document.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.attributes.href);
})
