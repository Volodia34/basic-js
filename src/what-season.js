const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (arguments.length === 0) {
        return 'Unable to determine the time of year!';
    }

    // Check if the object is a valid Date instance and has not been tampered with
    if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error('Invalid date!');
    }

    // Ensure no extra properties are added (protect against tampered Date objects)
    if (Object.getOwnPropertyNames(date).length > 0 || typeof date.getMonth !== 'function') {
        throw new Error('Invalid date!');
    }

    try {
        const month = date.getMonth();
        if (month === 11 || month === 0 || month === 1) return 'winter';
        if (month >= 2 && month <= 4) return 'spring';
        if (month >= 5 && month <= 7) return 'summer';
        if (month >= 8 && month <= 10) return 'autumn';
    } catch (error) {
        throw new Error('Invalid date!');
    }
}

module.exports = {
  getSeason
};
