function loadSvg() {
    fetch('svg/background 1.svg')
    .then((res) => {return res.text();})
    .then((svg) => {
        const container = document.getElementById('bg_city');
        container.innerHTML = svg;
    })
}
// loadSvg();