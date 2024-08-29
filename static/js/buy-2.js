        document.getElementById('buy-btn').onclick = () => location =('http://127.0.0.1:5500/template/buy-3.html');
        document.getElementById('cancle').onclick = () => location = ('http://127.0.0.1:5500/template/mainpage.html');
        const $test = document.getElementById('buy');
        $test.addEventListener('click', function() {
            alert('추석 연휴에는 배송이 지연 될수 있습니다.')
        });
        document.getElementById('head').onclick = () => location =('http://127.0.0.1:5500/template/mainpage.html');
        document.getElementById('type').onclick = () => location = ('http://127.0.0.1:5500/template/type.html');
        document.getElementById('buy').onclick = () => location = ('http://127.0.0.1:5500/template/buy.html')