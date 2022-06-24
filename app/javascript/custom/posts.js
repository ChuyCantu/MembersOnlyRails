document.documentElement.addEventListener('turbo:load', () => {
    const posts = document.getElementsByClassName("post");
    let maxHeight = 0;
    if (posts.length > 0) 
        maxHeight = Number(window.getComputedStyle(posts[0]).maxHeight.match(/\d+/));
    
    Array.from(posts).forEach((post) => {
        if (post.clientHeight >= (maxHeight - 5)) {
            const showMoreBtn = post.getElementsByClassName("show-more-btn")[0];
            const panel = post.getElementsByClassName("panel")[0];
            showMoreBtn.classList.toggle("hidden");
            panel.classList.toggle("hidden");

            showMoreBtn.addEventListener('click', () => {
                post.classList.toggle("post-size-limit");
                panel.classList.toggle("hidden");
                
                showMoreBtn.innerText = post.classList.contains("post-size-limit") ? "Show more..." : "Show less...";
            });

            console.log(post.getElementsByClassName("title")[0].innerText);
        }
    });
});