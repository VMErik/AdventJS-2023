function calculateTime(deliveries) {
    let initialTime = new Date();
    initialTime.setUTCHours(0, 0, 0, 0);
    const timeLimit = new Date();
    timeLimit.setUTCHours(7, 0, 0, 0);
    deliveries.forEach(element => {
        const hour = element.split(':');
        initialTime.setHours(
            initialTime.getHours() + parseInt(hour[0])
        );
        initialTime.setMinutes(
            initialTime.getMinutes() + parseInt(hour[1])
        );
        initialTime.setSeconds(
            initialTime.getSeconds() + parseInt(hour[2])
        );
    });
    let timeRemaining = (initialTime > timeLimit) ?
        initialTime - timeLimit : timeLimit - initialTime;
    timeRemaining = new Date((timeRemaining)).toISOString().slice(11, 19)
    return (timeLimit > initialTime) ?
        `-${timeRemaining}` : timeRemaining;
}


calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    // '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    // '00:30:00'

calculateTime([
        '00:45:00',
        '00:45:00',
        '00:00:30',
        '00:00:30'
    ]) // '-05:29:00'