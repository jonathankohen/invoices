const {
    is_date,
    curr_date,
    days_in_month,
    month_name,
    compare_dates,
    add_minutes,
} = require('./index.js');

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

describe('month_name', () => {
    it('returns current date formatted', () => {
        expect(month_name(new Date('10/11/2009'))).toBe('October');
        expect(month_name(new Date('11/13/2014'))).toBe('November');
    });
});

describe('compare_dates', () => {
    it('returns current date formatted', () => {
        expect(
            compare_dates(
                new Date('11/14/2013 00:00'),
                new Date('11/14/2013 00:00')
            )
        ).toBe('Date1 = Date2');
        expect(
            compare_dates(
                new Date('11/14/2013 00:01'),
                new Date('11/14/2013 00:00')
            )
        ).toBe('Date1 > Date2');
        expect(
            compare_dates(
                new Date('11/14/2013 00:00'),
                new Date('11/14/2013 00:01')
            )
        ).toBe('Date1 < Date2');
    });
});

// Depreciated
// describe('add_minutes', () => {
//     it('returns current date formatted', () => {
//         expect(add_minutes(new Date(2014, 10, 2), 30)).toBe(
//             'Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)'
//         );
//     });
// });
