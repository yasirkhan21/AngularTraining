var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.settingVariable = function (id, name) {
            _this.id = id;
            _this.name = name;
        };
        this.VowelConsonant = function (str) {
            var sum = 0;
            var count = 0;
            str = str.toLowerCase();
            if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {
                // let sum=0;
                for (var i = 1; i < str.length; i++) {
                    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                        continue;
                    }
                    else {
                        sum++;
                    }
                }
            }
            else {
                for (var i = 1; i < str.length; i++) {
                    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                        count++;
                    }
                    else {
                        continue;
                    }
                }
            }
            console.log("Consonants: " + sum);
            console.log("Vowels: " + count);
        };
    }
    return Person;
}());
var per = new Person();
per.VowelConsonant("Ishwar");
