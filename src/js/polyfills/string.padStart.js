// https://stackoverflow.com/questions/51719553/padstart-not-working-in-ie11
// https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += Array.apply(null, Array(targetLength)).map(function(){ return padString; }).join("");
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}