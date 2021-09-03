// 1
exports.is_date = input => {
    return input instanceof Date ? true : false;
};

// 2
exports.curr_date = input => {
    const today = new Date();
    return `${
        today.getMonth() + 1
    }${input}${today.getDate()}${input}${today.getFullYear()}`;
};

// 3
exports.days_in_month = (month, year) => {
    return new Date(year, month, 0).getDate();
};

// 4
exports.month_name = input => {
    const today = new Date(input);

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return months[today.getMonth()];
};

// 5
exports.compare_dates = (d1, d2) => {
    if (d1.getTime() === d2.getTime()) return 'Date1 = Date2';
    return d1.getTime() > d2.getTime() ? 'Date1 > Date2' : 'Date1 < Date2';
};

// 6 (Depreciated)
// exports.add_minutes = (date, mins) => {
//     console.log(
//         date.toLocaleString(undefined, {
//             weekday: 'short',
//             year: 'numeric',
//             month: 'short',
//             day: '2-digit',
//             timezone: 'IST',
//         })
//     );
// };
