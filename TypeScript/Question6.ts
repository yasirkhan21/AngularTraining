class Person {
    id: number;
    name: string;
    settingVariable = (id: number, name: string) => {
        this.id = id;
        this.name = name;
    }

    VowelConsonant = (str: string) => {
        let sum = 0;
        let count = 0;
         str = str.toLowerCase();
        if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {
            // let sum=0;
            for (let i = 1; i < str.length; i++) {
                if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                    continue;
                }
                else {
                    sum++;
                }
            }

        }
        else {
            for (let i = 1; i < str.length; i++) {
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
    }
}
let per = new Person();
per.VowelConsonant("Ishwar");