// let a  = 5;
// let b = 10;
// let c = a+b;
// console.log(c);

// let pets = ["cat", "dog","rabbit"];
// pets.pop();
// pets.push("rabbit");

let myArr = [3,4,5,6,7,8];
const square = (x) => {return x*x};
const modifyArray = (arr, func) => {
    let result = [];
    for (let i = arr.length - 1; i >=0; i--){
        result.push(func(arr[i]));
    }
    console.log(result);
}
modifyArray(myArr, square);

//học lại cách liên kết file js vs html
//học mảng array trong java script