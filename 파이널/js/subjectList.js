/* 페이지네이션 클릭 효과 */
const paginations = document.getElementById('paginations');

paginations.addEventListener('click', (e) => {
    const clickedElement = e.target;

    // 기존 활성화된 요소 비활성화
    const activeElement = paginations.querySelector('.active');
    if (activeElement) {
        activeElement.classList.remove('active');
    }
    // 클릭된 요소 활성화
    clickedElement.classList.add('active');
});

// 검색 영역
const searchFrm = document.getElementById("searchFrm");
const subjectKey = document.getElementById("subjectKey");
const query = document.getElementById("subjectQuery");

searchFrm.addEventListener("submit", e => {

    if(query.value.trim().length == 0){
        swal({
            title : "검색어를 입력해주세요.",
            icon  : "error",
            closeOnClickOutside : false
        }).then(function(){
            query.value = "";
            query.focus();
        });
        e.preventDefault();
    }

})
