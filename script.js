// =========================
// Active Navigation
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// =========================
// Fade Animation
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.8s";

    observer.observe(card);

});

// =========================
// SEARCH POSTS
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const posts = document.querySelectorAll(".post-card");
    const noResults = document.getElementById("noResults");

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();
        let found = 0;

        posts.forEach(function(post) {

            const searchable =
                post.textContent.toLowerCase() + " " +
                (post.dataset.search || "").toLowerCase();

            if (searchable.includes(keyword)) {
                post.style.display = "";
                found++;
            } else {
                post.style.display = "none";
            }

        });

        noResults.style.display = found === 0 ? "block" : "none";

    });

});
const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

// Load saved mode
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

toggle.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","light");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","dark");
    }

});
