(async () => {
    const btnSupport = document.getElementById('btn-support');
    btnSupport.onclick = e => alert('Object Reference Not Set to an instance of an object.');

    btnSupport.onmouseover = e => {
        const btn = e.target;
        const {top, left} = randPosition();
        console.log(top, left)
        btn.style.position = 'absolute';
        btn.style.top = `${top}px`;
        btn.style.left = `${left}px`;
    }
})();

function randPosition() {
    const top = range(0, window.innerHeight-75);
    const left = range(0, window.innerWidth-210);
    return { top, left };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}