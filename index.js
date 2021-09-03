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
    let date = new Date(year, month);
    return date;
};
