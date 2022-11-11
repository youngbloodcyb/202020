const timer = (e) => {
    let now = new Date().getTime();
    const future = now + (1000 * 60 * 20);

    let x = setInterval(() => {
        now = new Date().getTime();
        let distance = future - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Take a Break!";
            window.alert("Look away!");
            e.target.addEventListener(e.type, timer);
        }
    }, 1000);
    e.target.removeEventListener(e.type, timer);
}

const start = document.getElementById('start');
start.addEventListener('click', timer);