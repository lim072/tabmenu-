// 생성자 함수와 생성자 함수의 프로토타입 메서드를 사용하여,
// 생성자 함수는 대문자로 시작
// 인스턴스를 생성하고 이벤트 바인딩을 처리하는 객체지향 코드
/*
es5버전의 객체지향입니다.
장점 : 호환성이 좋다, es6이전버전은 모두 적용이 가능함
단점 : 프로토타입으로 메서드를 정의하기 때문에 es6클래스문법에 비해 복잡합니다
그리고 ()=>{} 화살표함수를 사용하지 않기 때문에 함수내부에서 this를 고정시키는
bind(this)와 같은 추가작업이 꼭 필요합니다 따라서 가독성이 떨어집니다.
*/

console.log(this)

function MyTab(el) {
    //초기화과정을 어떤 틀로 고정시킵니다
    this.tab = document.querySelector(el);
    this.btns = this.tab.querySelectorAll("ul li");
    this.boxes = this.tab.querySelectorAll("article div");

    //이벤트 
    this.bindingEvent();
    //여기서 this는 인스턴스를 의미
    //인스턴스란 생성자함수로 찍어내서 나온것을 의미 
    console.log(this)
    //여기서 this는 인스턴스를 의미
}

/*
prototype은 자바스크립트에서 객체 생성자 함수의 프로퍼티입니다.
객체 생성자 함수를 정의할때, prototype를 사용해서 해당 생성자 함수로
생성된 모든 인스턴스가 공유할 수 있는 메서드나 속성을 정의합니다
이렇게 생성자 함수의 prototype에 메서드, 속성을 추가하면
생성된, 생성될 모든 인스턴스가 해당 메서드,속성을 복사해서 가져가는것이 아닌
공유하면서 사용할 수 있기 때문에 메모리 절약과 효율성을 높일수 있습니다.
*/
//바인딩 이벤트
MyTab.prototype.bindingEvent = function () {
    this.btns.forEach(function (el, index) {
        el.addEventListener("click", function (e) {
            e.preventDefault()
            this.active(this.btns, index)
            this.active(this.boxes, index)
        }.bind(this))
        //이벤트 밖에서 내부 this객체값을 인스턴스 this로 고정을
        //하도록 bind로 묶어줌
    }.bind(this))
    //forEach밖에서 내부 this객체값을 인스턴스 this로 고정

    /*
    bind 자바스크립트 함수의 this값을 고정시키는 용도로 사용합니다
    원하는 동작을 진행하도록 하려면 내부에서의 this도 
    MyTab인스턴스 객체를 참조해야 동작할 수 있기 때문에
    bind로 고정 합니다 그 결과 this.active를 참조할때도 올바른 문맥의
    MyTab을 this로 유지할수있습니다
    */
}

MyTab.prototype.active = function active(arr, index) {
    for (let el of arr) el.classList.remove("on");
    arr[index].classList.add("on");
}


const useTab = new MyTab("#tab")
const useTab2 = new MyTab("#tab2")
const useTab3 = new MyTab("#tab3")
const useTab4 = new MyTab("#tab4")

/*
this
1. DOM 이벤트핸들러에서의 this
이벤트가 발생한 요소를 지칭합니다

2. 함수에서의 this

2-1 일반함수일 경우
say()
function say() {
    console.log(this);
} 
window 객체를 호출합니다. 

2-2 메서드로 this를 호출할때
const obj = {
    greet: "hello", say() { console.log(this) }
}
obj.say()
메서드를 소유한 객체의 값을 호출합니다

2-3 생성자 함수에서의 this
생성된(생성될) 인스턴스르를 지칭

2-4 bind메서드를 사용해서 호출 this
bind(걊)은 bind앞의 값의 this를 값으로 고정시킴

*/

