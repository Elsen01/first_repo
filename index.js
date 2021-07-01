//     const Palindrome =(str)=>{
//     const isPalindrome =str.split('').reverse().join('');
//     console.log(str===isPalindrome);
// }
// Palindrome('bes');


// const reversedNum =num=> parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
// console.log(reversedNum(-1234));

// const str ='azerbaycan yurdum menim';
// const rev =str.split('').reverse().join('');
// console.log(rev);

// const reversedNum =(num)=>parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
// console.log(reversedNum(12345));


// function fizzBuzz(n) {
//     for (let i = 0; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// let num = 3;

// function chunk(arr,num){
//     const chunked =[];
//     for(element of arr){
//         let last =chunked[chunked.length-1];
//         if(!last||last.length===num){
//             chunked=chunked.push([element]);
//         }else{
//             last.push(element)
//         }
//     }
//     return chunked;
// }
// console.log(chunk(arr,number));
// function chunk(arr,size =1){

// }
// const str =['apple','orange','kiwi','ananas']
// const result =chunk(str,2)
// console.log(result);
// let getUnique =(word)=> {


//     let letters = {};
//     for (const letter of word){
//         if(letters[letter])
//         {
//             letters[letter]=+1;
//         }
//         else
//         {
//             letters[letter]=1;
//         }

//     }
//     return letters;
//     }

// class Group {
//     constructor(groupName, startTime) 
//     {
//         this.Name = groupName;
//         this.startTime = startTime;

//     }

//         students = [];
//         addStudent = (students) => 
//         {
//             if (student.id && this.students.find(stu.id === stu.id) === undefined) 
//             {
//                 this.students.push(students)
//             }
//             else
//             {
//                 console.console.error("The id you specified does not exist");
//             }

//         }
//     }


// }

// var testCase ='dsdbbbbzzzzs'
// var testCase2='aasdbbbadafdsdzzzf'

// maxChar(testCase);
// maxChar(testCase2);
// let arr1 =[1,3,5,7];
// let arr2 =arr1;
// let arr3 = arr2;
// let arr4 = arr3;
// let arr5 = arr4;


// arr2.push(11);

// console.log(arr1,arr2,arr3,arr4,arr5);

// function AddNewNumbers(inputArray, Number) {
//     inputArray.push(Number);
// }

// let arr1 = [1, 3, 5, 7];

// AddNewNumbers(arr1, 15)
// console.log(arr1);


// function sumDiviseble(inputArray, callbackFunc) {
//     let sum = 0;
//     for (let i = 0; i < inputArray.length; i++) {
//         if (callbackFunc(inputArray[i], i))
//             sum += inputArray[i];

//     }
//     return sum;
// }

// const isEven = n => n % 2 === 0;
// const isOlder = n => n > 20;

// let arr = [12, 34, 45, 53, 62, 77, 79, 90];

// let sumOfEven = sumDiviseble(arr, isEven);
// let sumOfElder = sumDiviseble(arr, isOlder);
// let sumOfAnquts = sumOfDiviseble(arr, n => n > 20 && n % 2 == 0 && n < 100)


// console.log(sumOfEven, sumOfElder, sumOfAnquts);

// function isBlue(color){
//     if(color === 'blue'){
//     return true;
//     }
//     else{
//         return false;
//     }
// }
// const color=isBlue('red');
// console.log(color);


// function isPruple(arr){
//     for(let color of arr){
//         if(color === 'red' || color === 'blue'){
//             return true;
//         }

//     }
//     return false;
// }
// const color = isPruple(['fuuy']);
// console.log(color);

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (tooShort || hasSpace || tooSimilar) return true;
//     return false;
// }

// const username = "elsen";
// const password = "elsenaskerov"
// console.log(isValidPassword(password, username));

// var arr = [[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8],[4,5,6,7]],
//    const int = arr.reduce((p,c) => p.filter(e => c.includes(e)));
//     console.log(int);

//const numbers = [14,12,15,16,32,45,65,86,100];
//const words = ['misir','ferid','resad','elsenaze','realazm','real'];

// const doubles = numbers.map(function(num){
//     return num * 2;
// })
// console.log(doubles);

// const doubles2 = [50];
// for(let num of numbers){
//     doubles2.push(num * 2)
// }
// console.log(doubles2);

// const Add = words.map(function(word){
//    return word.toUpperCase().split(' ').join(' ');
// })
//  const sum= numbers.slice(6).reduce((num, number)=>{

//      return num + number;

//  })
//  console.log(sum);
// const word =numbers.filter((num =>  num > 70));
// console.log(word);


//  const Add = numbers.filter(n => n % 2 ===0);
//  console.log(Add);

//  const nums = numbers.reduce((max, num)=>{
//      return Math.max(max, num);
//  })
//  console.log(nums);
//     const word = numbers.sort(compareFunction);
// console.log(word);

// function compareFunction(a, b){
//     return a - b;
// }

// const students = words.reduce((tally, val) =>{
//     if(tally[val]){
//     tally[val]++
//     }else{
//         tally[val] =1;

//     }
//     return tally;
// }, {})
// console.log(students);

// const num1 = [12,34,45,-6,8,91,0,76,5];
// const num2 = [3,54,4,64,78,90,32,89];


// const word = Math.min(...num1,...num2,100,101,110);
// console.log(word);
// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar2 = '';
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar2 = char;

//         }
//     }
//     console.log(maxChar2);
// }

// var testCase = 'elsen askerov';
// var testCase2 = 'resad ferzulla';

// maxChar(testCase);

// maxChar(testCase2);

// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);

//         } else {
//             last.push(element);

//         }
//     }
//     return chunked;
// }
// var array = [12, 3, 4, 55, 6, 56, 7, 22, 5, 36];
// var size = 3;
// console.log(chunk(array,size));
function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    for (char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}


function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')) {
        charMap[char] = charMap [char] + 1 || 1;
    }
}
