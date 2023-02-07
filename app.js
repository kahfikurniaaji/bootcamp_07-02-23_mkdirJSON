const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');

readline.question('Nama : ', name => {
    readline.question('Phone : ', phone => {
        readline.question('Email : ', email => {
            if (!fs.existsSync('data')) {
                fs.mkdirSync('data');
            }
            if (!fs.existsSync('data/contacts.json')) {
                fs.writeFileSync('data/contacts.json', '[]', 'utf-8');
            }
            const contacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
            const contact = {
                name,
                phone,
                email
            };
            contacts.push(contact);
            const jsonString = JSON.stringify(contacts);
            fs.writeFileSync('data/contacts.json', jsonString);
            console.log('Terima kasih sudah memasukan data!');
            readline.close();
        });
    });
});