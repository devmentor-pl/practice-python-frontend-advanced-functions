const runTimer = function(){
    let counter = 0;


    const timerID = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log("aktualny czas: ", time);
        counter++;
        if (counter === 5){
            clearInterval(timerID);
        }
    },5000);

};

runTimer();