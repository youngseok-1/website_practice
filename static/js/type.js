const $test = document.getElementById('buy');
        $test.addEventListener('click', function() {
            alert('추석 연휴에는 배송이 지연 될수 있습니다.')
        });
        document.getElementById('head').onclick = () => location =('http://127.0.0.1:5500/mainpage.html');
        document.getElementById('buy').onclick = () => location = ('http://127.0.0.1:5500/buy.html');
        document.getElementById('login').onclick = () => location = ('http://127.0.0.1:5500/login.html');
        document.getElementById('kenya').onclick = () => location = ('http://127.0.0.1:5500/kenya.html');
        document.getElementById('indonesia').onclick = () => location = ('http://127.0.0.1:5500/indonesia.html');
        document.getElementById('Brazill').onclick = () => location = ('http://127.0.0.1:5500/brazill.html');