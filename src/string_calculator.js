function add(str) {
    var numbers = [];
    var expression = str.slice(str.search("\n") + 1, str.length);
    var delimeter = "";
    if (str == "") {
        return (0);

    }
    if (str.length == 1) {
        return (parseInt(str));
    }
    if (str.match(/\[(.*?)\]/g) && str.match("//") && !isNaN(parseInt(str[str.length - 1]))) {
        delimeter = str.match(/\[(.*?)\]/g)
        for (var i = 0; i < delimeter.length; i++) {
            expression = expression.split(delimeter[i].slice(1, -1)).join()
        }
        numbers = expression.split(",")

    } else if (str.slice(0, 2).match("//") && !isNaN(parseInt(str[str.length - 1]))) {

        delimeter = str.slice(2, str.search("\n"));
        numbers = expression.split(delimeter);

    } else if (str.match(/[\n]/) && /\d/.test(str[str.length - 1]) &&
        /\d/.test(str[0]) && str.match(/[\/]/g) == null) {
        numbers = str.split("\n").toString();
        numbers = numbers.split(",");

    } else if (/^[\d,-\d]*$/.test(str)) {
        numbers = str.split(",");

    } else { throw Error("invalid input") }
    if (numbers.toString().match(/-\d/)) {
        throw Error("negatives not allowed " + numbers.toString().match(/-\d/g));
    }

    return (numbers.filter(function ignore(num) {
        return num < 1000;
    }).reduce((sum, current) => parseInt(sum) + parseInt(current)));
}


module.exports = (add)