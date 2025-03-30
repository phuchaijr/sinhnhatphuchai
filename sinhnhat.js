document.addEventListener("DOMContentLoaded", function () {
  const topLayer = document.querySelector(".layer.top");

  // Kiểm tra nếu không tìm thấy tầng trên cùng
  if (!topLayer) {
    console.error("Không tìm thấy tầng trên cùng!");
    return;
  }

  // Xóa nến cũ (nếu có) trước khi thêm mới
  topLayer.innerHTML = "";

  // Tạo 6 cây nến trên tầng trên cùng
  for (let i = 0; i < 6; i++) {
    let candle = document.createElement("div");
    candle.classList.add("candle");
    candle.style.left = `${15 + i * 25}px`; // Điều chỉnh khoảng cách giữa các nến
    topLayer.appendChild(candle);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Đặt vị trí ngẫu nhiên trên chiều ngang
    let randomX = Math.random() * window.innerWidth;
    balloon.style.left = `${randomX}px`;

    // Thêm vào body
    body.appendChild(balloon);

    // Xóa bóng bay sau khi bay lên
    setTimeout(() => {
      balloon.remove();
    }, 5000);
  }

  // Tạo bóng bay liên tục
  setInterval(createBalloon, 1000);
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
