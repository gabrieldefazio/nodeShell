var fs = require('fs');
const ls = () =>{
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
                process.stdout.write(file.join("\n"));
            }
        );
    });
}
const pwd = () => process.stdout.write(process.env.PWD);
const date = () => process.stdout.write(Date());
const echo = args =>{
    const output = args
        .split(' ')
        .map(arg=> arg[0] === '$' ? process.env[arg.slice(1)] : arg )
        .join(' ');
    process.stdout.write(output);
}
const cat = filename =>{
    fs.readFile(filename, 'utf8', (err, data)=>{
        if (err) {
            throw err;
        }
        process.stdout.write(data.toString());
    });
};
const head = filename =>{
    fs.readFile(filename, 'utf8', (err, data)=>{
        if (err) {
            throw err;
        }
    });
};

module.exports = {
    ls, pwd, date, echo, cat, head
};
