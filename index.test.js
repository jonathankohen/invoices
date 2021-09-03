const { is_date, curr_date, days_in_month } = require('./index.js');

describe('is_date', () => {
    it('returns true or false based on input', () => {
        expect(is_date('October 13, 2014 11:13:00')).toBe(false);
        expect(is_date(new Date(86400000))).toBe(true);
        expect(is_date(new Date(99, 5, 24, 11, 33, 30, 0))).toBe(true);
        expect(is_date([1, 2, 4, 0])).toBe(false);
    });
});

describe('curr_date', () => {
    it('returns current date formatted', () => {
        expect(curr_date('/')).toBe('9/3/2021');
        expect(curr_date('-')).toBe('9-3-2021');
    });
});

describe('days_in_month', () => {
    it('returns current date formatted', () => {
        expect(days_in_month(1, 2012)).toBe(31);
        expect(days_in_month(2, 2012)).toBe(29);
        expect(days_in_month(9, 2012)).toBe(30);
        expect(days_in_month(12, 2012)).toBe(31);
    });
});

// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31
