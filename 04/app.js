let counter = 0;

const runTimer = setInterval(function () {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++;
    if (counter >= 5) {
        clearInterval(runTimer);
    }
}, 5000);



