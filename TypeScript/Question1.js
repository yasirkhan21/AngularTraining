var printstring = function (str) {
    str.forEach(function (element) {
        console.log("String:", element, "StringLength:", element.length);
    });
};
var arr = ["Yasir", "Piyush", "Raviraj"];
printstring(arr);
