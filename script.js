let intro = document.querySelector('.intro');
let introHeader = document.querySelector('.intro-header');
let splashSpan = document.querySelectorAll('.splash');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splashSpan.forEach((span, index) => {
            // Set a timeout to handle how quickly the two welcome text spans will appear ("Hi there!" and "I'm Kevin")
            setTimeout( () => {
                span.classList.add('active');
            }, (index + 1) * 600)
        });

        // Set a timeout for the welcome prompt text - how long it will be displayed on the screen
        setTimeout(() => {
            splashSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 50)
            })
        }, 2000)    // 2 seconds


        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)
    })
})