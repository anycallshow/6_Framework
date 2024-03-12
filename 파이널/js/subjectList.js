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

// 과목 수정 버튼 클릭시
const table = document.querySelector("table");
const rowList = table.rows;

for(i=1; i<rowList.length; i++){ // thead부분 제외.

    const row = rowList[i];
    const updateBtn = row.cells[5];

    updateBtn.addEventListener("click", ()=>{
        const number = row.cells[0].innerHTML; // 과목 번호
        const department = row.cells[1].innerHTML; // 학과명
        const courseName = row.cells[2].innerHTML; // 과목명
        const professor = row.cells[3].innerHTML; // 전담 교수
        const lectureTime = row.cells[4].innerHTML; // 강의 시간

        // const str = lectureTime.split('(');

        

    })

}
