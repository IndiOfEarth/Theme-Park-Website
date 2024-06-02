let swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    }
})

// Reference - https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
// This code is for the about.html about-park section
// Function called when button clicked
function showInfo(tab, elmnt) {
    let i, content, tablinks;

    // Hides elements with class="content" to begin with 
    content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Removes background color of all buttons
    tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].classList.remove('active');
    }

    // Shows the info content
    document.getElementById(tab).style.display = "block";
    elmnt.classList.add('active');
}

document.getElementById("defaultOpen").click();
