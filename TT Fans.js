function openLink(url) {
        window.open(url, '_blank'); 
    }

function closeModal() {
        document.getElementById('video-modal').style.display = 'none';
        document.getElementById('video-player').pause();
    }



    let currentPage = 0;
    const pages = document.querySelectorAll('.news-section');

function showPage(page) {
        pages.forEach((section, index) => {
            section.style.display = (index === page) ? 'flex' : 'none';
        });
        document.getElementById('prevBtn').style.display = page === 0 ? 'none' : 'inline-block';
        document.getElementById('nextBtn').style.display = page === pages.length - 1 ? 'none' : 'inline-block';
    }
function changePage(delta) {
        currentPage += delta;
        showPage(currentPage);
    }

function goToPage(page) {
        currentPage = page;
        showPage(currentPage);
    }

    // Initialize
    showPage(currentPage);

let currentPosition = 0;
const totalSlides = 4; // 更新为4组（每组3个，总共10个队员需要4组才能显示完）

function scrollTeamMembers(direction) {
    const container = document.querySelector('.sub-section');
    
    if (direction === 'left' && currentPosition > 0) {
        currentPosition--;
    } else if (direction === 'right' && currentPosition < totalSlides - 1) {
        currentPosition++;
    }
    
    const translateValue = -(currentPosition * 100 / totalSlides) + '%';
    container.style.transform = `translateX(${translateValue})`;
}
