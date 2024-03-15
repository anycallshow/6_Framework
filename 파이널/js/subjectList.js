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

        const classNo = row.cells[0].innerHTML; // 과목 번호
        const departmentName = row.cells[1].innerHTML; // 학과명
        const className = row.cells[2].innerHTML; // 과목명
        const professor = row.cells[3].innerHTML; // 전담 교수
        const classTime = row.cells[4].innerHTML; // 강의 시간

        const modal = document.querySelector(".modal"); // 수정 모달창

        const inputDeptName = document.getElementById("departmentName");
        const inputClassTime = document.getElementById("className");
        const inputProfessor = document.getElementById("professor");
        const classStart = document.getElementById("classStart"); // 시작 시간
        const classEnd = document.getElementById("classEnd"); // 종료 시간

        const calssDay = document.getElementById("calssDay"); // 요일

        const regex = /^([가-힣]+)\((\d+)교시~(\d+)교시\)$/;
        // 원하는 부분 추출
        const match = classTime.match(regex);
        day = match[1][0];
        startPeriod = parseInt(match[2]);
        endPeriod = parseInt(match[3]);


        modal.style.display="flex";

        inputDeptName.value = departmentName;
        inputClassTime.value = className;
        inputProfessor.value = professor;
        classStart.value = startPeriod;
        classEnd.value = endPeriod;
        calssDay.value = day;

        


        
        

    })

}
