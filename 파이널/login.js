// 로그인 
const loginFrm = document.getElementById("loginFrm");
const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");

loginFrm.addEventListener("submit", e => {

    if(userPw.value.trim() == 0){
        swal("비밀번호 입력해주세요.","");
        userPw.value = "";
        userPw.focus();
        e.preventDefault();
    }

    if(userId.value.trim() == 0){
        swal("아이디를 입력해주세요.","");
        userId.value = "";
        userId.focus();
        e.preventDefault();
    }
})

// 아이디 저장 체크
const saveId = document.getElementById("saveId");

saveId.addEventListener("click", ()=>{
    if(saveId.checked){
        
    }
})