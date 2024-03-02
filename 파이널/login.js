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

saveId.addEventListener("change", () => {

    if(saveId.checked){

        swal({
            title : "개인 정보 보호를 위해 개인 PC에서의 사용을 권장합니다.",
            text : "개인 PC가 아닌 경우 취소를 눌러주세요.",
            icon : "warning", // 아이콘 모양 
            buttons : ["취소", "저장"],
            dangerMode : true,
        })
        .then((willDelete) => {
            if(willDelete){ // 예 버튼 클릭시
                saveId.checked = true;
            } else {
                saveId.checked = false;
            }
        });

    }
})