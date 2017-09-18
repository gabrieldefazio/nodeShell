let comm = require("./commands.js");
process.stdout.write("prompt > ");
// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", function(data) {
    const input = data.toString().trim().split();
    const cmd = input[0];
    const args = input.slice(1).join(' ');

    if (comm[cmd]) comm[cmd](args);
    else  process.stdout.write(`${cmd}: command not found`);
    //process.stdout.write('You typed: ' + cmd);
    process.stdout.write("\nprompt > ");
});