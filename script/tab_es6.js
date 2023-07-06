/*
class 선언을 사용한 객체지향 코드
장점 : 코드의 가독성과 이해하기가 비교적 쉽다
메서드를 화살표 함수로 정의하므로 this가 알아서 
바인딩 되므로 추가작업이 필요없다
또한 상속과 같은 객체지향 고급 기능을 추가적으로 구현하기 용이합니다
 */

/*
자바스크릡트를 기반으로하는 프레임워크인 
뷰, 리액트에서는 class를 사용할수 없습니다
왜?> 명령어 class로 들어있기 때문에 사용할수없다

react의 경우 js파일에 html이 들어있습니다.
그래서 html에 주는 class -> className
*/

class MyTab {
    constructor() {
        //생성자 메서드 객체 인스턴스를 초기화 하는 역할을 합니다
        //매번 만들어지는 인스턴스를 각 개체에 맞춰서 새로 생성해주는것
        this.tab = document.querySelector('#tab2');
        this.btns = this.tab.querySelectorAll("ul li");
        this.boxes = this.tab.querySelectorAll("article div");
        this.bindingEvent();
    }
    bindingEvent() {
        this.btns.forEach((el, index) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                this.active(this.btns, index)
                this.active(this.boxes, index)
            })
        })
    }
    active(arr, index) {
        for (let el of arr) el.classList.remove("on");
        arr[index].classList.add("on")
    }
}

new MyTab("#tab")

new MyTab("#tab3")
new MyTab("#tab4")

//상속
class ExTab extends MyTab {
    constructor() {
        super();
        /*
        super(); 를 호출함으로써 ExTab이라는 클래스는 MyTab클래스의 생성자를 실행합니다
        이를 통해서 MyTab클래스에 정의된 초기화 작업을 수행합니다.
        */
        this.tab.addEventListener("mouseenter", () => {
            console.log("상속자 임땡칠")
        })

        //상속을 통해서 기본적인 작업을 진행하고 추가적인 작업을 실행할수있습니다.
    }
    addMethod() {
        this.tab.style.backgroundColor = "pink";
        console.log("멧후드를 추가했습니다.")
    }
}

//인스턴스를 생성
const extendTab = new ExTab("#tab2")
extendTab.addMethod();
//상속된 개체의 추가 메서드로 작업된 addMethod는 반드시 추가적으로 호출을 해주어야 합니다
extendTab.active(extendTab.btns, 0);
//active라는 함수는 부모인 MyTab에 적용된(추가된)메서드이기 때문에 상속받는
//ExTab은 추가 메서드없이도 가능합니다

//다형성
//다형성은 상속개념을 깔고, 그위에 동일한 메서드를 각각 다른 클래스의 인스턴스에서
//다르게 동작하도록 하는 개념

class Music {
    constructor(name) {
        this.name = name
    }
    musicSound() {
        console.log("음악소리")
    }
}

const sound = new Music("mu");
sound.musicSound();

class Viola extends Music {
    musicSound() {
        console.log("비올라")
    }
}
const vSound = new Viola("ga");
vSound.musicSound();