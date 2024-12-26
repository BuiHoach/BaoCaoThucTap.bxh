function scrollToSection() {
  const selectElement = document.getElementById('select');
  const selectedValue = selectElement.value;

  if (selectedValue !== '#') {
      const targetElement = document.getElementById(selectedValue);

      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Đảm bảo thêm lớp "selected" cho link tương ứng
          document.querySelectorAll('#main ul li a').forEach((link) => {
              link.classList.remove('selected');
          });

          const matchingLink = document.querySelector(`#main ul li a[href="#${selectedValue}"]`);
          if (matchingLink) matchingLink.classList.add('selected');
      }
  }
}













$('.list-product').slick({
    dots: false,               // Ẩn dấu chấm điều hướng
    infinite: true,            // Vòng lặp vô hạn
    speed: 300,                // Tốc độ chuyển slide (ms)
    slidesToShow: 4,           // Hiển thị 4 sản phẩm cùng lúc
    slidesToScroll: 1,         // Cuộn 1 sản phẩm mỗi lần
    autoplay: true,            // Tự động chuyển slide
    autoplaySpeed: 1000,       // Thời gian chuyển slide tự động (2 giây)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,     // Hiển thị 3 sản phẩm với màn hình nhỏ hơn 1024px
          slidesToScroll: 3,   // Cuộn 3 sản phẩm mỗi lần
          infinite: true,      // Vòng lặp vô hạn
          dots: true           // Hiển thị dấu chấm điều hướng cho màn hình nhỏ
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,     // Hiển thị 2 sản phẩm với màn hình nhỏ hơn 600px
          slidesToScroll: 2    // Cuộn 2 sản phẩm mỗi lần
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,     // Hiển thị 1 sản phẩm với màn hình nhỏ hơn 480px
          slidesToScroll: 1    // Cuộn 1 sản phẩm mỗi lần
        }
      }
    ]
  });
  // bài viết mới
  $('.list-products').slick({
    dots: false,               // Ẩn dấu chấm điều hướng
    infinite: true,            // Vòng lặp vô hạn
    speed: 300,                // Tốc độ chuyển slide (ms)
    slidesToShow: 3,           // Hiển thị 4 sản phẩm cùng lúc
    slidesToScroll: 1,         // Cuộn 1 sản phẩm mỗi lần
    autoplay: true,            // Tự động chuyển slide
    autoplaySpeed: 1000,       // Thời gian chuyển slide tự động (2 giây)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,     // Hiển thị 3 sản phẩm với màn hình nhỏ hơn 1024px
          slidesToScroll: 3,   // Cuộn 3 sản phẩm mỗi lần
          infinite: true,      // Vòng lặp vô hạn
          dots: true           // Hiển thị dấu chấm điều hướng cho màn hình nhỏ
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,     // Hiển thị 2 sản phẩm với màn hình nhỏ hơn 600px
          slidesToScroll: 2    // Cuộn 2 sản phẩm mỗi lần
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,     // Hiển thị 1 sản phẩm với màn hình nhỏ hơn 480px
          slidesToScroll: 1    // Cuộn 1 sản phẩm mỗi lần
        }
      }
    ]
  });

  // Bắt sự kiện thêm sản phẩm vào giỏ hàng
const btn = document.querySelectorAll(".item button");

btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector(".imgs img").src;
        var productName = product.querySelector(".product-title").innerText;
        var productPrice = product.querySelector(".product-price .colorr").innerText;

        addCart(productImg, productName, productPrice);
    });
});

function addCart(productImg, productName, productPrice) {
    var cartTable = document.querySelector("tbody");
    var addtr = document.createElement("tr");

    var trcontent =
        '<td style="display: flex;align-items: center;"><img style="width:70px;" src="' +
        productImg +
        '" alt="">' +
        productName +
        '</td><td><p style="margin: 0;"><span>' +
        productPrice +
        '</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;" class="delete">Xóa</td>';
    addtr.innerHTML = trcontent;

    cartTable.append(addtr);

    cartTotal(); // Cập nhật tổng tiền
    deleteCart(); // Thêm sự kiện "Xóa"
}

function cartTotal() {
    var cartItems = document.querySelectorAll("tbody tr");
    var total = 0;

    cartItems.forEach(function (item) {
        var priceElement = item.querySelector("td p span");
        var price = parseInt(priceElement.innerText.replace(/\./g, ""));
        var quantity = item.querySelector("td input").value;

        total += price * quantity;
    });

    document.querySelector(".price-total span").innerText = total.toLocaleString();
}

function deleteCart() {
    var deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var tr = button.parentElement;
            tr.remove();

            cartTotal(); // Cập nhật lại tổng tiền sau khi xóa
        });
    });
}

// Cập nhật tổng tiền khi thay đổi số lượng
document.querySelector("tbody").addEventListener("input", function (event) {
    if (event.target.type === "number") {
        cartTotal();
    }
});
// 

// Lấy các phần tử
const cartBtnClose = document.querySelector(".fa-xmark");
const cartBtnShow = document.querySelector(".fa-cart-shopping");
const cartElement = document.querySelector(".cart");

// Hàm mở giỏ hàng
function showCart() {
  if (cartElement) {
    cartElement.style.right = "0";
  }
}

// Hàm đóng giỏ hàng
function hideCart() {
  if (cartElement) {
    cartElement.style.right = "-100%";
  }
}

// Kiểm tra và thêm sự kiện
if (cartBtnShow) {
  cartBtnShow.addEventListener("click", showCart);
}

if (cartBtnClose) {
  cartBtnClose.addEventListener("click", hideCart);
}







// header nav-icon
const navIcon = document.querySelector('.nav-icon i');

navIcon.addEventListener('click', () => {
    // Kiểm tra nếu biểu tượng là "fa-bars"
    if (navIcon.classList.contains('fa-bars')) {
navIcon.classList.replace('fa-bars', 'fa-times'); // Chuyển thành dấu X
    } else {
navIcon.classList.replace('fa-times', 'fa-bars'); // Chuyển về biểu tượng thanh ngang
    }
});
// nav-icon active
$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.header-menu').toggleClass('active');
    });
});