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
  for (let i = 0; i < 3; i++) {
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
