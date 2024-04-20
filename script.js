let active_left = true;
let [hour, min, sec] = [0, 0, 0];
let startInterval;
let stopWatchStarted = false;
let swh = document.querySelector(".sw_hours");
let swm = document.querySelector(".sw_min");
let sws = document.querySelector(".sw_sec");

function clickToActivate() {
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    if (active_left) {
        box1.classList.remove("box1-default");
        box1.classList.add("box1-active");
        box2.classList.add("box2-default");
        box2.classList.remove("box2-active");
        active_left = false;
    }
    else if (!active_left) {
        box1.classList.add("box1-default");
        box1.classList.remove("box1-active");
        box2.classList.add("box2-active");
        box2.classList.remove("box2-default");
        active_left = true;
    }


}

function time() {

    const now = new Date();
    let hours = Number(String(now.getHours()).padStart(2, '0'));
    am = hours > 12 ? "pm" : "am";
    hours = hours > 12 ? hours - 12 : hours;
    const minutes = Number(String(now.getMinutes()).padStart(2, '0'));
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds + " " + am;

}



function start() {

    if (!stopWatchStarted) {
        stopWatchStarted = true;
        startInterval = setInterval(() => {
            sec++;
            sws.textContent = sec < 10 ? "0" + sec : sec;
            if (sec > 59) {
                sec = "0" + 0;
                sws.textContent = sec;
                min++;
                swm.textContent = min < 10 ? "0" + min : min;
                if (min > 59) {
                    min = "0" + 0;;
                    swm.textContent = min;
                    hour++;
                    swh.textContent = hour < 10 ? "0" + hour : hour;
                    if (hour > 60) {
                        pause();
                    }
                }
            }

        }, 1000);
    }
}



function pause() {
    clearInterval(startInterval);
    stopWatchStarted = false;
}

function reset() {
    sec = 0;
    swh.textContent = "00";
    swm.textContent = "00";
    sws.textContent = "00";

}

window.addEventListener('reload', start)
setInterval(time, 1000);
time();
clickToActivate();


