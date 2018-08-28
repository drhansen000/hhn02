function formatDate(date) {
    const daysOfTheWeek = new Array('Sunday', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat');
    const months = new Array('January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December');
    // Replace - with / so that the Date is according to the local timezone
    date = date.replace("-", "/");
    date = new Date(date);
    const day = daysOfTheWeek[date.getDay()];
    const month = months[date.getMonth()];
    return `${day} ${month} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatTime(time) {
    var timeEnding;
    var formattedTime;
    // Insert pm or am
    if (time < 1200) {
        timeEnding = " am";
    } else {
        timeEnding = " pm";
    }
    // Format the time into 12 hour format rather than 24
    if (time >= 1300) {
        time = `${time % 1200}`;
    }
    // Insert the semi-colon
    if (time.length > 3) {
        formattedTime = time.substr(0, 2) + ":" + time.slice(2);
    } else {
        formattedTime = time.slice(0, 1) + ":" + time.slice(1);
    }
    formattedTime += timeEnding;
    return formattedTime;
}