const tab = document.querySelector("#tab");
const btns = tab.querySelectorAll("ul li");
const boxes = tab.querySelectorAll("article div");

//btns에 반복을 돌면서 각각의 요소에 클릭이벤트를 걸어줌
btns.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        //btns에 반복을 돌면서 on클래스를 제거하고 
        //클릭이벤트가 발생한 index에 on클래스를 추가함
        //boxes에도 마찬가지

        active(arr)
        // for (let el of btns) el.classList.remove("on");
        // btns[index].classList.add("on");
        active(arr)
        // for (let el of boxes) el.classList.remove("on");
        // boxes[index].classList.add("on");
    })
})

//함수패키징
function active(arr, index) {
    for (let el of arr) el.classList.remove("on");
    arr[index].classList.add("on");
}

/*
1. 절차지향적 코드(프로그래밍) : 코드를 단계적인 절차로 구성하고,
데이터와 절차를 분리해서 프로그램을 구성하는 방법
js에서는 절차지향적 코드를 저급코드로 취급하는 경향이 있음
하지만 무조건 저급이라고 하지않고, 프로그래밍의 철학적 관점이나
작동하는 환경등을 고려해서 보통은 절차지향과 객체지향을
섞어서 코딩을 하는 편입니다

2. 함수지향적 프로그래밍 : 함수를 일급 객체로 취급하고, 함수의 조합과
변환을 통해서 프로그램을 구성하는 방식을 의미합니다
순수함수(pure function)와 불변성(immutable)을 중요하게 생각합니다
(객체??, 일급객체?? 순수함수?? 불변성??)

객체(object) 자바스크립트에서 객체는 속성(property)과 동작(method)을
포함하는 데이터 구조를 말합니다
예) let person = {
    name : "John",
    age : 30,
    greet : fuction(){
        console.log("Hello");
    }
} 객체는 중괄호로 정의되고, 속성과 동작은 보통 키-값으로 표현됩니다

일급객체로써의 함수특징
1. 모든 요소는 함수의 실제 매개변수가 될 수 있다.
함수는 매개변수로 다른 함수를 받을 수 있습니다
콜백함수로 예를 들수 있는데, 함수를 다른 함수의 인자로 전달할 수 있고,
실행 시 동적으로 함수를 생성해서 전달도 가능합니다
btns.addEventListener("click",()=>{})

2. 모든 요소는 함수의 반환 값이 될수 있습니다
함수는 다른 함수의 반환 값으로도 사용될 수 있습니다
function aaaa (){
    return function bbb(){}
}

3. 모든 요소는 할당 명령문의 대상이 될 수있습니다
함수는 변수에 할당될 수 있습니다
함수는 객체와 마찬가지로 변수에 저장되거나 다른 데이터 구조에 저장될 수 있습니다
예시 )let ggg = function(){};

4. 모든 요소는 동일 비교의 대상이 될 수 있습니다
위에서 함수는 값으로 취급했습니다. 따라서 우리는 동등연산자(==, ===)를
통해서 다른 함수와 비교할 수도 있습니다
let aaa = function(){};
let bbb = function(){};
 if(aaa == bbb){
    console.log("hello");
 }
*/

function highFunction(callback) {
    callback();
}
//하이함수는 매개변수로 콜백함수를 가진다는뜻이며, 콜백함수를 반환한다는 뜻
function returnFunction() {
    return function () {
        console.log("Hello");
    }
}//리턴함수는 함수를 리턴하는 함수, 리턴해서 콘솔을 찍어주는 함수
const myFunction = function () {
    console.log("월드");
}
function compareFunction(f1, f2) {
    return f1 === f2;
}//두개의 함수를 매개변수로 받고, 같으면 트루, 틀리면 거짓

highFunction(function () { console.log("함수") });

compareFunction(myFunction, function () { console.log("월드") });

/*
순수함수
항상 같은 값을 반환하는 함수를 의미
동일 값을 넣었을때 항상 동일값이 반환되는 함수
=> 반대개념으로 순수하지 않은 함수
function add(a, b) {
    return a + b;
}
add(3, 5);
add(3, 5);
add(3, 5);
let total = 0;
function addTo(val){
    total += val;}
addTo(3); //3
addTo(3); //6

불변성 
변경할 수 없는 상태, 혹은 그런 값을 의미합니다
즉, 한번 생성되면 그 값을 변경할 수 없는것
이는 데이터의 변경을 허용하지 않고, 새로운 데이터를 생성하거나
반환하는 방식으로 동작해야한다는 의미입니다

//불변성 지키는 코드

let tu1 = (1, 2, 3);
//기존값
let tu2 = tu1 + (4);
//새로운 값을 만들때 기존값을 복사해서 새로운값을 추가하고, 결과 새로운
//데이터가 생성됨
print(tu1)
print(tu2)

//불변성을 해치는 코드
let arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);

*/

/*
함수를 선언하는 방법 6가지
1. 함수 선언식 (function declaration)
function add(a,b){}
함수 이름과 함께 function키워드를 사용해서 선언합니다
특징은 호이스팅에 영향을 받습니다

2. 함수 표현식(function expression)
두가지로 나눌수 있습니다, 익명함수표현식, 명명함수표현식
const add1 = function(){} 이름이 없기때문에 js가 추론함
const add2 = function bbb(){} 이름이 있어서 js가 추론하지않음

특징은 변수에 담기전까지는 생성되지 않는다고 보기 때문에 호이스팅에서
자유롭습니다

3. 화살표 함수(arrow function)
()=>{} 
화살표 함수는 익명함수로 사용합니다 

{자신을 this로 바인딩하지 않는다 , constructor로 쓰일수 없다,
prototype을 가지고 있지 않는다, yideld키워드를 허용하지 않아서
gnenrator로 쓸수없다. this가 의미가 달라진다}

4. 생성자 함수(constructor Function)

function Person(name) { this.name = name }
//이런 종류의 객체지향코드나, 클래스문법이 존재해야합니다
const preson = new Person("땡칠");
new키워드를 사용해서 객체 인스턴스를 생성하는 함수

5. 메서드(method)
메서드는 내부안에 존재는 명령의 형태에 함수를 지칭합니다.
즉 객체에 접근하기 위해서는 객체의 프로퍼티의 키워드를 이용해야합니다.

person.greet();

let person = {
    name: "John",
    age: 30,
    greet: fuction(){
        console.log("Hello");
    }
}

6. 함수 생성자(Function constructor)

function생성자를 사용해서 함수를 동적으로 생성하는 방법입니다
함수 구문안에서 문자열로 함수를 정희하는 방법이지만, 특수 상황에서만
사용하는것을 권장하고 주의해야합니다. (대문자 Function)
let add = new Function("a", "b", "return a+ b");

7.즉시 실행함수
Immediately-invoked expression


btns.addEventListener("click", add); //함수 호출해서 실행
btns.addEventListener("click", add()); //함수 결과값

(function add() {
    console.log("즉시")
})()
함수를 정의하고 바로 즉시 실행하는 패턴입니다
함수를 괄호로 둘러싸고 함수 끝에 추가 괄호를 
사용해서 함수를 즉시 호출합니다

이점
1. 스코프 격리 : (스코프 == 격리,범위) 즉시 실행 함수 내에서 
선언된 번수들은 무조건 함수내부에서만 유효하기 때문에 
외부의 다른 스코프와 충돌할수 없습니다.

2. 비공개 변수 : 외부에서 접근할 수 없습니다. (캡슐화)

3. 초기화 코드 : (단 코드가 길고,복잡할때 사용가능)
초기화 코드를 실행해서 모듈 패턴과 조합하여 모듈화된 코드구현이 가능

4.클로져
클로져란 외부 변수에 접근할 수 있는 함수를 의미합니다
함수와 해당함수가 접근할 수 있는 자유변수간의 조합입니다
즉, 외부변수에 대한 참조를 유지하는 내부 함수를 클로져 라고 합니다
let myCounter = (function (init = 0) {
    let count = init;
    return function () {
        count++
        return count
    }
})(1)

myCounter();
myCounter();
*/

/*

1. 웹 퍼블리셔 html버전의 화면구현이 목적인 퍼블

2. @@ 퍼블리셔 
자바스크립트 퍼블리셔
뷰 퍼블리셔
리액트 퍼블리셔

*/
