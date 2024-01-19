

function clockInTerminal(timeFormat) {
    setInterval(() => {
        let time = new Date();
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let hour = time.getHours();

        if(timeFormat === '12') {
            let meridiem = hour > 12 ? 'PM' : 'AM';
            hour = hour > 12 ? hour-12 : hour;
            [hour, min, sec] = formatHHMMSS(hour, min, sec);
            console.log(hour + ":" + min + "::" + sec + " " + meridiem);
        }
        else {
            [hour, min, sec] = formatHHMMSS(hour, min, sec);
            console.log(hour + ":" + min + "::" + sec);
        }
    }, 1000);
}

function formatHHMMSS(hour, min, sec) {
    hour = String(hour).padStart(2, 0);
    min = String(min).padStart(2, 0);
    sec = String(sec).padStart(2, 0);
    return [hour, min, sec];
}

clockInTerminal();