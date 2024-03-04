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