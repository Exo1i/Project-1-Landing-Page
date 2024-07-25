$(function () {
        "use strict";

        // MENU
        $(".navbar .nav-link").on("click", function () {
            $(".navbar-collapse").collapse("hide");
        });

        $(window).on("scroll", function () {
            var scrollDistance = $(window).scrollTop();
            if (scrollDistance > 72) {
                $(".navbar").addClass("scroll");
            } else {
                $(".navbar").removeClass("scroll");
            }
        });

        // SMOOTHSCROLL
        $(function () {
            $(" .navbar .nav-link").on("click", function (event) {
                const $anchor = $(this);
                $("html, body")
                    .stop()
                    .animate({
                        scrollTop: $($anchor.attr("href")).offset().top - 49,
                    }, 1000);
                event.preventDefault();
            });
        });

        const txt = "👋 I'm Youssef"; /* The initial text */
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let i = 0;

        $(function typeWriter() {
            if (document.getElementById("TypeWriter").innerHTML.length < txt.length) {
                document.getElementById("TypeWriter").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                typeWriter2(0, 0); // Start the next phase
            }
        })

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function clearText() {
            let length = document.getElementById("TypeWriter").innerHTML.length;
            console.log(`clearText() called, Length: ${length}`);
            if (length > txt.length) {
                document.getElementById("TypeWriter").innerHTML = document
                    .getElementById("TypeWriter")
                    .innerHTML.slice(0, length - 1);
                await sleep(speed);
                await clearText();
            }
        }

        async function typeWriter2(idx, i) {
            const messages = [", A Fullstack Dev", ", An Aspiring Computer Engineer", ", A Security Researcher", ", A Tech Enthusiast", ", A ML Enthusiast", ", A Cybersecurity Enthusiast",];
            let message = messages.at(idx);

            // console.log(`message: ${message}, idx:${idx}, i:${i}`);

            if (idx < messages.length && document.getElementById("TypeWriter").innerHTML.length < txt.length + message.length) {
                document.getElementById("TypeWriter").innerHTML += message.at(i);
                i++;
            } else if (idx < messages.length - 1) {
                await sleep(300); // Wait for 1000ms before clearing
                await clearText(); // Clear the text
                i = 0;
                idx++;
            } else
                idx = i = 0;


            await sleep(speed); // Wait for the typing speed
            await typeWriter2(idx, i); // Recurse
        }

    }
)

//Dark Mode
function enableDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// JavaScript code to make the navbar draggable
const navBar = document.getElementById('nav-bar'); // Assuming the navbar has an id of 'nav-bar'

let isDragging = false;
let initialX, initialY, offsetX = 0, offsetY = 0;

navBar.addEventListener('mousedown', function (e) {
    isDragging = true;
    initialX = e.clientX - offsetX;
    initialY = e.clientY - offsetY;
    // To prevent the default text selection behavior
    e.preventDefault();
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        offsetX = mouseX - initialX;
        offsetY = mouseY - initialY;

        navBar.style.left = offsetX + 'px';
        navBar.style.top = offsetY + 'px';
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
    initialX = offsetX;
    initialY = offsetY;
});