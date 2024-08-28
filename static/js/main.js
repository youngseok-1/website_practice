const $test = document.getElementById('buy');
        $test.addEventListener('click', function() {
            alert('추석 연휴에는 배송이 지연 될수 있습니다.')
        });
        document.getElementById('head').onclick = () => location.reload();
        document.getElementById('type').onclick = () => location = ('http://127.0.0.1:5500/type.html');
        document.getElementById('buy').onclick = () => location = ('http://127.0.0.1:5500/buy.html')
        document.getElementById('login').onclick = () => location = ('http://127.0.0.1:5500/login.html');