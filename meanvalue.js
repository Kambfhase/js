/*
 * LICENSE
 *
 * "THE BEER-WARE LICENSE" (Revision 42):
 * "Sven Strittmatter" <ich[at]weltraumschaf[dot]de> wrote this file.
 * As long as you retain this notice you can do whatever you want with
 * this stuff. If we meet some day, and you think this stuff is worth it,
 * you can buy me a beer in return.
 */

/**
 * Provides methods for calculating mean values in some ways.
 *
 */
var MeanValue = {

    /**
     * Calculates the arithemtic mean value of given numbers.
     *
     * Example:
     * <code>
     * var average = MeanValue.arithmetic(1, 2, 3, 4, 5) // x = (1 + 2 + 3 + 4 + 5) / 5
     * </code>
     *
     * You can also pass an array of numbers:
     * <code>
     * MeanValue.arithmetic.apply(null, [1, 2, 3, 4, 5]);
     * </code>
     *
     * @return Number
     */
    arithmetic: function() {
        var sum = 0;

        for (var i = 0, j = arguments.length; i < j; i++) {
            sum += arguments[i];
        }

        return sum / arguments.length;
    },

    /**
     * Calculates the geometric mean value of given numbers.
     *
     * Example:
     * <code>
     * var average = MeanValue.geometric(1, 2, 3, 4, 5) // x = 5 √ (1 * 2 * 3 * 4 * 5)
     * </code>
     *
     * You can also pass an array of numbers:
     * <code>
     * MeanValue.geometric.apply(null, [1, 2, 3, 4, 5]);
     * </code>
     *
     * @return Number
     */
    geometric: function() {
        var sum = 1;

        for (var i = 0, j = arguments.length; i < j; i++) {
            sum *= arguments[i];
        }

        return Math.pow(sum, 1 / arguments.length);
    },

    /**
     * Calculates the harmonic mean value of given numbers.
     *
     * Example:
     * <code>
     * var average = MeanValue.harmonic(1, 2, 3, 4, 5) // x = 5 / (1/1 + 1/2 + 1/3 + 1/4 + 1/5)
     * </code>
     *
     * You can also pass an array of numbers:
     * <code>
     * MeanValue.harmonic.apply(null, [1, 2, 3, 4, 5]);
     * </code>
     *
     * @return Number
     */
    harmonic: function() {
        var sum = 0;

        for (var i = 0, j = arguments.length; i < j; i++) {
            sum += 1 / arguments[i];
        }

        return arguments.length / sum;
    },

    /**
     * Calculates the quadratic mean value of given numbers.
     *
     * Example:
     * <code>
     * var average = MeanValue.quadratic(1, 2, 3, 4, 5) // x = √(1^2 + 2^2 + 3^2 + 4^2 + 5^2) / 5
     * </code>
     *
     * You can also pass an array of numbers:
     * <code>
     * MeanValue.quadratic.apply(null, [1, 2, 3, 4, 5]);
     * </code>
     *
     * @return Number
     */
    quadratic: function() {
        var sum = 0;

        for (var i = 0, j = arguments.length; i < j; i++) {
            sum += Math.pow(arguments[i], 2);
        }

        return Math.sqrt(sum / arguments.length);
    },

    /**
     * Calculates the cubic mean value of given numbers.
     *
     * Example:
     * <code>
     * var average = MeanValue.cubic(1, 2, 3, 4, 5) // x = 3√(1^3 + 2^3 + 3^3 + 4^3 + 5^3) / 5
     * </code>
     *
     * You can also pass an array of numbers:
     * <code>
     * MeanValue.cubic.apply(null, [1, 2, 3, 4, 5]);
     * </code>
     *
     * @return Number
     */
    cubic: function() {
        var sum = 0;

        for (var i = 0, j = arguments.length; i < j; i++) {
            sum += Math.pow(arguments[i], 3);
        }

        return Math.pow(sum / arguments.length, 1 / 3);
    },

    /**
     * Rounds the passed number to the given amaount of decimal digits.
     *
     * Example:
     * <code>
     * MeanValue.round(3.1415);    // -> 3
     * MeanValue.round(3.1415, 1); // -> 3.1
     * MeanValue.round(3.1415, 2); // -> 3.14
     * MeanValue.round(3.1415, 3); // -> 3.142
     * </code>
     *
     * @param  number    Number The number to round.
     * @param  precision Number Amount of digits after decimal point.
     * @return Number
     */
    round: function(number, precision) {
        return parseFloat(number.toFixed(precision));
    },

    /**
     *
     */
    t: function() {
        var summary = '', fails = '';

        function incomplete(message) {
            summary += 'I';
            fails   += 'Incomplete test: ' + message + '\n';
        }
        
        function assert(that, message) {
            if (!that) {
                fails   += 'Failled ' + message + '\n';
                summary += 'F';
            } else {
                summary += '.';
            }
        }

        function printSummary() {
//            if (console && console.log) {
//                console.log(summary);
//
//                if (fails) {
//                    console.log(fails);
//                }
//            } else {
                document.write('<pre>');
                document.write(summary);

                if (fails) {
                    document.write('\n\n' + fails);
                }

                document.write('</pre>');
//            }
        }

        // testing MeanValue.arithmetic()
        assert(MeanValue.arithmetic(1, 2, 3, 4, 5) === 3,
               'arithmetic mean of 1, 2, 3, 4, 5 is 3');
        assert(MeanValue.arithmetic.apply(null, [1, 2, 3, 4, 5]) === 3,
               'arithmetic mean of 1, 2, 3, 4, 5 is 3');
        assert(MeanValue.arithmetic(7, 7, 7, 7) === 7,
               'arithmetic mean of 7, 7, 7, 7 is 7');

        // testing MeanValue.geometric()
        assert(MeanValue.geometric(1, 2, 3, 4, 5) - 2.60517 < 0.0001,
               'arithmetic mean of 1, 2, 3, 4, 5 is 2.60517');
        assert(MeanValue.geometric.apply(null, [1, 2, 3, 4, 5])  - 2.60517 < 0.0001,
               'arithmetic mean of 1, 2, 3, 4, 5 is 2.60517');
        assert(MeanValue.geometric(7, 7, 7, 7) === 7,
               'arithmetic mean of 7, 7, 7, 7 is 7');

        // testing MeanValue.harmonic()
        incomplete('MeanValue.harmonic()');

        // testing MeanValue.quadratic()
        incomplete('MeanValue.quadratic()');

        // testing MeanValue.cubic()
        incomplete('MeanValue.cubic()');

        // testing MeanValue.round()
        assert(MeanValue.round(3.1415)    === 3,
               'rounding 3.1415 to 3');
        assert(MeanValue.round(3.1415, 1) === 3.1,
               'rounding 3.1415 to 3.1');
        assert(MeanValue.round(3.1415, 2) === 3.14,
               'rounding 3.1415 to 3.14');
        assert(MeanValue.round(3.1415, 3) === 3.142,
               'Assert rounding 3.1415 to 3.142.');

        printSummary();
    }
};