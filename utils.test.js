const { newDate, addToInvoice, invoice } = require('./utils.js');

describe('newDate', () => {
    it('returns a date', () => {
        expect(newDate()).toBeInstanceOf(Date);
    });

    it('returns a date a year later from the last charge', () => {
        expect(newDate()).toStrictEqual(new Date('02/05/2016'));
    });
});

// describe('addToInvoice', () => {
//     it('returns an object', () => {
//         expect(addToInvoice(new Date('05/07/2017'), 500.0)).toBeInstanceOf(
//             Object
//         );
//     });

//     it('returns an object', () => {
//         expect(addToInvoice()).toBeInstanceOf(Object);
//     });
// });
