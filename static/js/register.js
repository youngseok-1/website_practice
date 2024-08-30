const $test = document.getElementById('regist');
        $test.addEventListener('click', function(){
            alert('아이디는 이름입니다.')
            alert('비밀번호는 연락처입니다.');
        })
        document.getElementById('head').onclick = () => location =('mainpage.html');
        document.getElementById('regist').onclick = () => location = ('register-2.html');
        document.getElementById('cancel').onclick = () => location = ('login.html');
        const $test2 = document.getElementById('buy');
        $test2.addEventListener('click', function() {
            alert('추석 연휴에는 배송이 지연 될수 있습니다.')
        });
        document.getElementById('type').onclick = () => location = ('type.html');
        document.getElementById('buy').onclick = () => location = ('buy.html')
