let charges = require('./charges.json');
const fs = require('fs').promises;

exports.newDate = () => {
    // let targetDate = new Date(
    //     Object.keys(charges)[[Object.keys(charges).length - 1]]
    // );

    // let targetDate = charges[charges.length - 1]['02/05/2015'];
    let targetDate = charges.slice(-1)[0];
    console.log(targetDate);

    let newDate = new Date(
        `${targetDate.getMonth() + 1}/${targetDate.getDate()}/${
            targetDate.getFullYear() + 1
        }`
    );
    return newDate;
};

exports.addToInvoice = async (date, newAmount) => {
    const pair = { [date]: newAmount };

    // const file = await fs.readFile('charges.json', 'utf8', () => {
    //     json.push(pair);
    // });

    // await fs.writeFile('charges.json', JSON.stringify(file), err => {
    //     if (err) throw err;
    // });

    // await fs.write('charges.json', pair);

    // fs.readFile('charges.json', function (err, data) {
    //     const json = JSON.parse(data);
    //     json.push(pair);

    //     // fs.writeFile('charges.json', JSON.stringify(json));

    //     fs.writeFileSync('charges.json', JSON.stringify(json), err => {
    //         if (err) throw err;
    //     });
    // });
};

// fs.writeFileSync('sifted_records.json', JSON.stringify(arr), err => {
//     if (err) throw err;
// });

exports.getTotal = () => {
    let sum = Object.values(charges).reduce((acc, curr) => acc + curr);

    console.log(sum);
    return sum;
};

// Handling floating-point numbers, especially around addition, multiplication, and rounding
