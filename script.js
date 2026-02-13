document.addEventListener("DOMContentLoaded", () => {

    function checkPassword() {
        const input = document.getElementById('password-input').value;
        const lock = document.getElementById('lock-screen');
        const envelope = document.getElementById('envelope-overlay');
        const errorMsg = document.getElementById('error-msg');

        const correctDate = "070925"; 

        if (input === correctDate || input.toLowerCase() === "forever") {

            const bgMusic = document.getElementById("bgMusic");
            if (bgMusic) bgMusic.play();

            lock.style.opacity = "0";
            setTimeout(() => {
                lock.style.display = 'none';
                envelope.style.display = 'flex';
            }, 600);

        } else {
            errorMsg.style.display = 'block';

            const glassCard = document.querySelector('.glass-card');
            if (glassCard) {
                glassCard.style.animation = 'shake 0.4s';
                setTimeout(() => glassCard.style.animation = '', 400);
            }
        }
    }

    window.checkPassword = checkPassword;

    window.navigateToGift = function() {
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) {
            sessionStorage.setItem('musicPlaying', 'true');
            sessionStorage.setItem('musicTime', bgMusic.currentTime);
        }
        window.location.href = 'flower/flower.html';
    };

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password-input');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.style.opacity = type === 'password' ? '0.5' : '1';
        });
    }

    window.openEnvelope = function () {
        const envelope = document.getElementById('main-envelope');
        const overlay = document.getElementById('envelope-overlay');
        const content = document.getElementById('main-content-wrapper');

        envelope.classList.add('open');
        setTimeout(() => {
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.style.display = "none";
                content.style.display = "block";
                setInterval(createHeart, 400);
            }, 800);
        }, 700);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.moment').forEach(m => observer.observe(m));

    const message = `hello my lovey, happy 1st valentines dayy po!! just wanted to say na i'm so so so so lucky to have someone like u sa life ko, and i'm so thankful kay God na binigay ka niya sakin. you mean so much to me po, and u make me the happiest person in the world po. and i promise to u po na I would never get tired of showing my love for u po, yung love na hindi mo expect na deserve mo, na hindi mo na feel sa past mo. and yung love na pinapangarap mo. as long as I'm here by your side, u will have someone who's afraid of losing u and has the determination to love u unconditionally kahit sa hard days pa natin. and i promise na I won't leave u po.
and baby sorry, hindi kita mabigyan ng real flower sa valentines na to and hindi man lang kita mapuntahan para mag-date, pero sana mahaba pa patience mo for my excuses na wala pa me enough money. pero baby, I'll give u muna a flower na ginawa ko using my skill and effort sa pag-program hehe. sana you will appreciate this kahit na it's digital flowers lang muna :3 I love you jewel ko, always :D`;

    let index = 0;
    let hasTyped = false;

    function typeWriter() {
        if (index < message.length) {
            document.getElementById("typing-text").innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 35);
        }
    }

    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                hasTyped = true;
                typeWriter();
            }
        });
    }, { threshold: 0.5 });

    const target = document.getElementById("typing-container");
    if (target) typingObserver.observe(target);

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            bottom: -20px;
            color: #9e001c;
            font-size: ${Math.random() * 20 + 10}px;
            z-index: 1000;
            pointer-events: none;
            filter: drop-shadow(0 0 5px rgba(158, 0, 28, 0.5));
            animation: floatUp 5s linear forwards;
        `;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes floatUp {
            0% { transform: translateY(0) rotate(0); opacity: 1; }
            100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

});
