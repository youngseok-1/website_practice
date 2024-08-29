        document.getElementById('head').onclick = () => location =('http://127.0.0.1:5500/template/mainpage.html');
        document.getElementById('type').onclick = () => location =('http://127.0.0.1:5500/template/type.html');
        document.getElementById('btn1').onclick = () => location =('http://127.0.0.1:5500/template/buy-2.html');
        document.getElementById('btn2').onclick = () => location =('http://127.0.0.1:5500/template/buy-2.html');
        document.getElementById('btn3').onclick = () => location =('http://127.0.0.1:5500/template/buy-2.html');
        document.getElementById('login').onclick = () => location = ('http://127.0.0.1:5500/template/login.html');;
        const $test = document.getElementById('buy');
        $test.addEventListener('click', function() {
            alert('추석 연휴에는 배송이 지연 될수 있습니다.')
        });