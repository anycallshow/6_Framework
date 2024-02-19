const loginFrm = document.getElementById("loginFrm");

if(loginFrm != null){

    // 로그인 시도를 할 때
    loginFrm.addEventListener("submit", e =>{
        // alert("로그인");

        // form태그 기본 이벤트 제거
        // e.preventDefault();

        // 이메일이 입력되지 않은 경우

        // const inputEmail = document.getElementsByName("memberEmail")[0];
        // const inputPw = document.getElementsByName("memberPw")[0];

        const memberEmail = document.querySelector("#loginFrm input[name='memberEmail']");
        const memberPw = document.querySelector("#loginFrm input[name='memberPw']");


        if (memberEmail.value.trim().length == 0) {
            alert("이메일을 입력해주세요.");

            memberEmail.value = ""; // 잘목 입력된 값(공백) 제거
            memberEmail.focus(); // 이메일 input 태그에 초점
            e.preventDefault(); // 제출 못하게 하기

            return;
        }

        // 비밀번호가 입력되지 않은 경우
        if(memberPw.value.trim().length == 0){
            alert("비밀번호를 입력해 주세요.");

            memberPw.value = ""; // 잘목 입력된 값(공백) 제거
            memberPw.focus(); // 비밀번호 input 태그에 초점
            e.preventDefault(); // 제출 못하게 하기

            return;
        }
    })
    
}

// 비동기로 이메일이 일치하는 회원의 닉네임 조회    
function selectNickname(email){

    fetch("/selectNickname?email=" + email) 
        // 지정된 주소로 GET방식 비동기 요청(ajax)
        // 전달하고자 하는 파라미터를 주소 뒤 쿼리스트링으로 추가

    .then(response => response.text() ) // 요청에 대한 응답 객체(response)를 필요한 형태로 파싱

    .then(nickname => {console.log(nickname)}) // 첫 번째 then에서 파싱한 데이터를 이용한 동작 작성

    .catch( e => {console.log(e)}) // 예외 발생 시 처리할 내용을 작성
}

// 닉네임이 일치하는 회원의 전화번호 조회
const inputNickname = document.getElementById("inputNickname");
const btn1 = document.getElementById("btn1");
const result1 = document.getElementById("result1");

btn1.addEventListener("click", () => {
    
    // fetch() API를 이용해서 ajax(비동기 통신)

    // GET 방식 요청 (파라미터를 쿼리스트링으로 추가)
    fetch("/selectMemberTel?nickname=" + inputNickname.value)
    .then( resp => resp.text() )
    // resp : 응답 객체
    // resp.text() : 응답 객체 내용을 문자열로 변환하여 반환
    .then( tel => {
        // tel : 파싱되어 반환된 값이 저장된 변수
        if(tel == ""){
            result1.innerText = "일치하는 회원이 없습니다.";
        }else{
            /* 비동기 요청 후 수행할 코드 */
            result1.innerText = tel; // 조회 결과를 result1에 출력
        }
    })
    .catch( err => console.log(err) );
    // 에러 발생 시 콘솔에 출력
})

// fetch() API를 이용한 POST 방식 요청

// 이메일을 입력 받아 일치하는 회원의 정보를 모두 조회
const inputEmail = document.getElementById("inputEmail");
const btn2 = document.getElementById("btn2");
const result2 = document.getElementById("result2");

btn2.addEventListener("click", () => {

    // POST 방식 비동기 요청

    // JSON.stringify() : JS객체 -> JSON 
    // JSON.parse()     : JSON -> JS 객체

    fetch("/selectMember",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({"email" : inputEmail.value})
    })
    .then( resp =>resp.json() ) // 응답 객체를 매개변수로 얻어와 파싱
    .then( member => {
        console.log(member);

        // ul(#result2)의 내부 내용 모두 없애기
        result2.innerHTML = "";

        const li1 = document.createElement("li");
        li1.innerText = `회원번호 : ${member.memberNo}`;

        const li2 = document.createElement("li");
        li2.innerText = `이메일 : ${member.memberEmail}`;

        const li3 = document.createElement("li");
        li3.innerText = `닉네임 : ${member.memberNickname}`;

        const li4 = document.createElement("li");
        li4.innerText = `전화번호 : ${member.memberTel}`;

        const li5 = document.createElement("li");
        li5.innerText = `주소 : ${member.memberAddress}`;

        const li6 = document.createElement("li");
        li6.innerText = `가입일 : ${member.enrollDate}`;

        result2.append(li1,li2,li3,li4,li5,li6);


    }) // 파싱한 데이터를 이용해서 비동기 처리 후 동작
    .catch(err => {
        console.log(err);
        result2.innerHTML = "<h4>일치하는 회원이 없습니다.</h4>";
    });
})

/*  
    1. 이메일이 일부라도 일치하는 모든 회원 조회 
    조건 1. fetch() API POST 방식으로 할 것 
    조건 2. 요청주소는 /selectMemberList
    2. 일치하는 회원이 없을 시 조회결과가 없습니다. 문구 출력
*/

// 이메일이 일부라도 일치하는 모든 회원 조회
const input = document.getElementById("input");
const btn3 = document.getElementById("btn3");
const result3 = document.getElementById("result3");

btn3.addEventListener("click", () => {

    if(input.value.trim().length == 0){
        alert("검색어를 입력해주세요.");

    }else{
        fetch("/selectMemberList",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({"input" : input.value})
        })
        .then( resp => resp.json())
        .then( memberList => {

            result3.innerText = "";
    
            if(memberList.length != 0){ // 일치하는 회원이 있을때
    
                for (let i of memberList) {
                    const tr = document.createElement("tr");
                    const td1 = document.createElement("td");
                    const td2 = document.createElement("td");
                    const td3 = document.createElement("td");
    
                    td1.innerText = i.memberNo;
                    td2.innerText = i.memberEmail;
                    td3.innerText = i.memberNickname;
    
                    tr.append(td1,td2,td3);
                    result3.append(tr);
                }
    
            }else{
                const tr = document.createElement("tr");
    
                tr.innerHTML = "<td colspan=3><h4>일치하는 회원이 없습니다.</h4></td>";
                result3.append(tr);
            }
        })
        .catch(err => console.log(err));
    }

})