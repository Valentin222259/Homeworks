//objects
const user = {
    firstName: "Pop",
    lastName: "Ion",
    age: 30,
    email: "ceva@test.com",
    city: "Cluj-Napoca",
};

//extragere valori din obiect
console.log(user);
console.log(user.age, user.firstName, user.city);
console.log(user.address);
//console.log(user.children.length)
console.log(user.age, user["age"]);

//operator chaining ?.
const user8 = {};
console.log(user8?.children?.children?.length);

//nullish.coalescing ??
const laptop = {};
console.log(laptop?.stoc ?? 0);

//extragere dinamica
console.log("extragere dinamica");
let dynamicProperty = "age";
console.log(user.dynamicProperty); // nu user.age
console.log(user[dynamicProperty]); // user.age

//add, delete, edit
console.log("add, delete, edit");
user.cnp = "5030213244481";
console.log(user);

user.age = 20;
console.log(user);

delete user.city;
console.log(user);

//user2 object
console.log("user2 object");
const user2 = {};
console.log("user2");
user2.age = 20;
user2.firstName = "Virgil";
console.log(user2);

const u1 = {name: "Ana"}; //loc in memoria x, referinta y
const u2 = {name: "Ana"}; //loc in memoria z, referinta a
//console.log(() === ());
console.log(u1 === u2); //comparam loc din memoria x === z

let u3 = {name: "Tudor", adress: "Strada nu stiu care"};
let u4 = {...u3, age: 20, name: "Ana"};
u4.age = 20;
console.log(u3, u4);

const user5 = {
    firstName: "Pop",
    lastName: "Ion",
    age: 30,
    email: "ceva@test.com",
    city: "Cluj-Napoca",
};

console.log("for interesant");
const arr = ["a", "b", "c", "d", "e"];
for(const i in arr)
    console.log(i);
for(const i in arr)
    console.log(i);

//for in
//console.log("for in");
for(const p in user5)
    console.log(`${p} - ${user[p]}`, "for...in");

//keys
//console.log("keys");
const keys = Object.keys(user);
console.log(keys);

//for... of
//console.log("for... of");
for(const k of keys)
    console.log(`${k} - ${user[k]}`, "for...off");
for(let i = 0; i < keys.length; i++)
    console.log(user5[keys[i]], "for");

//values
const values = Object.values(user5);
console.log(values, "values");

//entries
const entries = Object.entries(user5);
console.log(entries);
for(const [k, v] of entries)
    console.log(k, v, "for...of entries");


const objInObj = {
    firstName: "Pop",
    lastName: "Ion",
    age: 30,
    email: "ceva@test.com",
    city: "Cluj-Napoca",
    children: {
        name: "Virgil",
        children: {
            name: "Ana",
            children: {
                name: "Tudor",
            },
        },
    },
};

console.log(objInObj);
console.log(JSON.stringify(objInObj));
console.log(JSON.stringify(objInObj, null, " "));


//clonare
const test = {a: 1, b: 2, c: 3};
const naive = test;
const test2 = {...test};
const copyOfTest = Object.assign({ age: 20 }, test);//mai rapid

console.log(test, naive, test2, copyOfTest)

console.log(test === naive);
console.log(test === test2);
console.log(copyOfTest === test);

const nestedObj = {a: 1, b: 2, c: 3, d: { e: { f: 4 } } };
const naiveNested = nestedObj;
const copyNested = {... nestedObj };
const copyOfNestedObj = Object.assign({}, nestedObj);

console.log(copyOfNestedObj === nestedObj, "nested");
console.log(copyOfNestedObj.d === nestedObj.d, "nested");

//deepClone/deepEquals
//deepClone
const deepClone = JSON.parse(JSON.stringify(nestedObj));
console.log(deepClone.d === nestedObj.d, "JSON method");

//merging objects
const v1 = {name: "test"};
const v2 = {age: 20};
const v3 = {...v1, ...v2};
console.log(v3);
