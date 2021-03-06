
(function(global) {
        /**
         * Collects the summary string.
         *
         * A period for passed, a F for failed and I for incomplete tests.
         *
         * @var String
         */
    var summary = '', 
        /**
         * Collects the assert messages on test fail.
         * 
         * @var String
         */
        fails = '',
        /**
         * Collect verbose asertions info.
         * 
         * @var String
         */
        assertions = '';

    /**
     * Signals the presence of an incomplete test.
     */
    function incomplete(message) {
        summary += 'I';
        fails   += 'Incomplete test: ' + message + '.\n';
    }

    /**
     * Assert that is true.
     *
     * @param that Bool
     * @param message String
     */
    function assert(that, message) {
        if (!that) {
            fails   += 'Failled that ' + message + '.\n';
            summary += 'F';
        } else {
            summary += '.';
        }

        assertions += 'Assert that ' + message + '.\n';
    }

    /**
     * Prints the test summary after all tests.
     */
    function printSummary(verbose) {
        global.document.write('<pre>');
        global.document.write(summary);

        if (fails) {
            global.document.write('\n\n' + fails);
        }

        if (verbose || false) {
            global.document.write('\n\n' + assertions);
        }

        global.document.write('</pre>');
    }

    global.incomplete   = incomplete;
    global.assert       = assert;
    global.printSummary = printSummary;
    
})(window);