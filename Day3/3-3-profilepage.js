console.log("password: 1234");

//선택할 요소가 한개인 경우
//document.querySelector("#아이디이름");
//document.querySelector(".클래스이름");

//선택할 요소가 여러개인 경우
//document.querySelectorAll(".클래스이름");

//enterBtn라는 변수에 버튼, 텍스트 상자를 할당한다.
const enterBtn = document.querySelector(".enter_btn");
const userPw = document.querySelector(".input-pw");

//요소.addEventListener("이벤트타입", ()=>{함수});
// 예를들어 button.addEventListener("click", ()=>{console.log("hello")});
// -> button으로 지정한 요소가 클릭되었을 때 console창에 "hello"가 찍힌다.


enterBtn.addEventListener("click", ()=>{
    //먼저 값이 잘 오는지 확인
    // console.log(userPw.value);

    
    // 값이 1234일 경우만 다음 페이지로 넘어가는 함수 실행
    if(userPw.value === "1234"){
        const firstPage = document.querySelector('.section-first_page');
        const secondPage = document.querySelector('.section-second-page');

        const nav = document.querySelector(".menu-nav")
        
        // 화면 전환 애니매이션을 클래스로 추가
        // 요소.classList.add("클래스명");을 입력하면 새로운 클래스가 추가된다.
        firstPage.classList.add('animate-slide-out');
        secondPage.classList.add('animate-slide-in');
        nav.classList.add('animate-slide-in');

        // 요소.style.CSS속성명 = "속성값"; 을 통해 자바스크립트를 사용해서 CSS를 변경할 수 있다.
        secondPage.style.display ='flex';

        // 애니메이션이 끝난 후 첫 번째 섹션을 숨기기
        firstPage.addEventListener('animationend', function() {
            firstPage.style.display = 'none';
        });
    }else{
        alert("비밀번호가 틀렸습니다");
    }
});
