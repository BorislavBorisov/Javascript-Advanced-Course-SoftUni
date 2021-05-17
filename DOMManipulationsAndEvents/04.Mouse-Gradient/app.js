function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    let out =  document.getElementById('result')

    function onMove(event) {
        const x = event.offsetX;
        let result = Math.floor(x / event.target.clientWidth * 100);
        out.textContent = `${result}%`
    }
}