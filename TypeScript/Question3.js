var Palindrom = function (str) {
    var str1 = "";
    for (var i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str[i];
    }
    if (str === str1) {
        console.log("Palindrom");
    }
    else {
        console.log(" Not Palindrom");
    }
};
var str = "eye";
Palindrom(str);
