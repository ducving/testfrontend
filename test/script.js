let slideIndex = 0;
const groupSize = 4; // Số lượng ảnh hiển thị cùng lúc
showSlides();

function changeSlide(n) {
    slideIndex += n; // Chuyển đến ảnh tiếp theo hoặc trước đó
    showSlides();
}

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Kiểm tra giới hạn để không vượt quá số lượng ảnh
    if (slideIndex >= totalSlides) {
        slideIndex = totalSlides - 1; // Quay về ảnh cuối cùng
    }
    if (slideIndex < 0) {
        slideIndex = 0; // Quay về ảnh đầu tiên
    }

    // Tính chỉ số hình ảnh đầu tiên trong nhóm hiển thị
    const startSlide = Math.floor(slideIndex / groupSize) * groupSize;

    // Ẩn tất cả các ảnh
    slides.forEach((slide, index) => {
        slide.style.display = (index >= startSlide && index < startSlide + groupSize) ? 'block' : 'none';
    });
}
