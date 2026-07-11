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

<!-- ================= SEARCH FUNCTION ================= -->

<script>

const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase().trim();
    let visiblePosts = 0;

    posts.forEach(function(post){

        const text = post.textContent.toLowerCase();

        if(text.includes(keyword)){

            post.style.display = "";
            visiblePosts++;

        }else{

            post.style.display = "none";

        }

    });

    if(noResults){

        noResults.style.display =
            visiblePosts === 0 ? "block" : "none";

    }

});

</script>
