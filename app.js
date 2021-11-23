const fs = require('fs');


const arguments = process.argv.slice(2);
//fs.writeFile('employees.json', 'uft8'

function editFiles(command, employeeName, salary) {
    if (command == 'create') {
        fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err, data) => {
            if (err) console.log(err);
            if (data) console.log(data);
        })
    }
    if (command == 'read') {
        fs.readFile('./employees.json', 'utf8', (err, data) => {
            console.log(data);
        });
    }
    if (command == 'update') {
        fs.appendFile('./employees.json', `\n{"name": "${employeeName}", "salary": ${salary}}`, (err, data) => {
            if (err) console.log(err);
            if (data) console.log(data);
        });
    }
    if (command == 'delete') {
        fs.unlink('employees.json', (err, data) => {
            if (err) console.log(err);
            if (data) console.log(data);
        });
    }
}

editFiles(arguments[0], arguments[1], arguments[2]);