document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const closeButton = document.querySelector(".close-button");

  // Khi trang tải xong, đảm bảo không có class 'closed'
  container.classList.remove("closed");

  // Sau 0.5s, thêm class 'show' để thư trượt lên
  setTimeout(function () {
    container.classList.add("show");
  }, 500);

  // Khi nhấn nút "Đóng thư"
  closeButton.addEventListener("click", function (event) {
    container.classList.remove("show"); // Loại bỏ hiệu ứng mở
    container.classList.add("closed"); // Thêm hiệu ứng đóng
    event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
  });
});
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Danh sách màu ngẫu nhiên
  const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  // Kích thước ngẫu nhiên
  const size = Math.random() * 30 + 40; // 40px - 70px
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.4}px`; // Tỉ lệ giống bóng bay thật

  // Tạo hiệu ứng bay lên với tốc độ khác nhau
  const duration = Math.random() * 3 + 4; // 4s - 7s
  balloon.style.animationDuration = `${duration}s`;

  document.body.appendChild(balloon);

  // Xóa bóng sau khi bay lên trên
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

// Tạo bóng bay liên tục với số lượng nhiều hơn
setInterval(() => {
  for (let i = 0; i < 3; i++) {
    createBalloon();
  }
}, 500);
function openLetter() {
  let container = document.querySelector(".container");
  container.classList.remove("closed");
  container.classList.add("open");
}

function closeLetter() {
  let container = document.querySelector(".container");
  container.classList.remove("open");
  container.classList.add("closed");
}
