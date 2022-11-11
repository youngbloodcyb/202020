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
        document.getElementById("timer").innerHTML = "Look away!";
        window.alert("Look away!");
    }
}, 1000);