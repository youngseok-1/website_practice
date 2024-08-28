const $test = document.getElementById('regist');
        $test.addEventListener('click', function(){
            alert('아이디는 이름입니다.')
            alert('비밀번호는 연락처입니다.');
        })
        document.getElementById('head').onclick = () => location =('http://127.0.0.1:5500/mainpage.html');
        document.getElementById('regist').onclick = () => location = ('http://127.0.0.1:5500/register-2.html');
        document.getElementById('cancel').onclick = () => location = ('http://127.0.0.1:5500/login.html');