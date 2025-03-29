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
