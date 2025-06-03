//problema 1
console.log("problema 1");
const range = 10000;
let i = 0;
while(i <= range){
    console.log(i);
    i += 2;
}

//problema 2
console.log("problema 2");
const a = [1, -5, 20, -34, 16, 29, 36, -4];
const b = [3.45, -2.68, 356, -75.96, 64, 19.28];

const functionArr = (arr) => {
    let s = 0;
    for(let i = 0; i <= arr.length - 1; i++)
        s += arr[i];
    return s;
}

console.log(functionArr(a));
console.log(functionArr(b));

//problema 3
console.log("problema 3");
const arr = [1, -5, 20, -34, 16, 29, 36, -4];
const reverseArr = (arr) => {
    let revArr = [];
    for(let i = 0; i <= arr.length - 1; i++){
        revArr[i] = arr[arr.length - i - 1];
    }
    return revArr;
}
console.log(reverseArr(arr));

//problema 4
console.log("problema 4");
let prop = "string de test";
 isVoc = (val) => {
    if(val == 'a' || val === 'e' || val === 'i'
         || val === 'o' || val === 'u' || val == 'A' 
         || val === 'E' || val === 'I'
         || val === 'O' || val === 'U')
         return true;
    return false;
}
const nrVoc = (prop) => {
    let nrVoc = 0;
    for(let i = 0; i < prop.length; i++)
        if(isVoc(prop[i]))
            nrVoc++;
    return nrVoc;
}

console.log(nrVoc(prop));
