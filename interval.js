
exports.showTimer = function showTimer(s, fn) {
    process.stdout.write(`${s}...`);
    var currSeconds = s;

    var intervalId = setInterval(function () {
        currSeconds -= 1;

        if (currSeconds == 0) {
            console.log(`seconds`);
            clearInterval(intervalId)
            fn()
        } else {
            process.stdout.write(`${currSeconds}...`);
        }
    }, 1000)
}
