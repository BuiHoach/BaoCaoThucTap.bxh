
// bảo mật mât khẩu
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

// Xác minh đầu vào
document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn không cho gửi form trước khi kiểm tra

    const username = document.querySelector('.form-input[type="text"]').value.trim();
    const password = document.querySelector('.form-input[type="password"]').value.trim();

    if (!username) {
        alert('Vui lòng nhập tên đăng nhập!');
        return;
    }

    if (!password) {
        alert('Vui lòng nhập mật khẩu!');
        return;
    }

    alert('Đăng nhập thành công!');
    this.submit(); // Gửi form nếu kiểm tra thành công
});



// Lưu thông tin đăng nhập
document.getElementById('form-login').addEventListener('submit', function () {
    const rememberMe = document.querySelector('input[name="Lưu thông tin"]').checked;
    const username = document.querySelector('.form-input[type="text"]').value.trim();

    if (rememberMe && username) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }
});

// Tự động điền tên đăng nhập nếu đã lưu trước đó
window.addEventListener('load', function () {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.querySelector('.form-input[type="text"]').value = savedUsername;
        document.querySelector('input[name="Lưu thông tin"]').checked = true;
    }
});


//  xửa lý nút Đn fb/sdt
document.querySelectorAll('.form-input-1, .form-input-2').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn không gửi biểu mẫu
        alert('Tính năng này hiện chưa được hỗ trợ!');
    });
});


// quên mk
document.querySelector('.link').addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn mở trang mới trong ví dụ demo
    alert('Chúng tôi sẽ hỗ trợ bạn khôi phục mật khẩu qua email!');
});