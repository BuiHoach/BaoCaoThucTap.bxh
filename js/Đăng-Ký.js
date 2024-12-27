
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
//   hợp lệ

function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn biểu mẫu tự động gửi
    
    const password = document.getElementById('password').value.trim();

    if (!isStrongPassword(password)) {
        alert('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!');
        return;
    }

    alert('Đăng ký thành công! Mật khẩu của bạn đã được xác minh!');
    this.submit();
});
// 

document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form tự động gửi

    const passwordInput = document.getElementById('password');
    const rawPassword = passwordInput.value.trim();

    if (!rawPassword) {
        alert('Vui lòng nhập mật khẩu!');
        return;
    }

    const hashedPassword = CryptoJS.SHA256(rawPassword).toString();
    passwordInput.value = hashedPassword; // Thay mật khẩu gốc bằng mật khẩu mã hóa

    this.submit(); // Gửi biểu mẫu
});


// đk facebook
document.querySelectorAll('.form-group-1, .form-group-2').forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Tính năng này hiện chưa được hỗ trợ!');
    });
});


//
function sanitizeInput(input) {
    const sanitized = input.replace(/[<>\/"';]/g, '');
    return sanitized.trim();
}

document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form tự động gửi

    const username = sanitizeInput(document.getElementById('username').value);
    const password = sanitizeInput(document.getElementById('password').value);

    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    alert('Thông tin đã được kiểm tra và gửi đi!');
    this.submit();
});
