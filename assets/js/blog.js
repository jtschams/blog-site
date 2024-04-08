const themeSwitch = document.getElementById('theme-button');
const themeClass = document.querySelector('body');
const postList = document.getElementById('post-list')

let blogPosts = [];

const init = function() {
    let storedPosts = JSON.parse(localStorage.getItem('blog-posts'));
    let currentTheme = localStorage.getItem('theme-selection');
    if (storedPosts) {
        blogPosts = storedPosts;
    }
    themeClass.setAttribute('class', currentTheme);
    postPlacement();
}

const postPlacement = function() {
    for (i = 0; i < blogPosts.length; i++) {
        const singlePost = document.createElement('article');
        const postHeader = document.createElement('h2');
        const postContent = document.createElement('p');
        const postAuthor = document.createElement('h3');
        postHeader.textContent = blogPosts[i].title;
        postContent.textContent = blogPosts[i].content;
        postAuthor.textContent = blogPosts[i].username;
        postList.appendChild(singlePost);
        singlePost.appendChild(postHeader);
        singlePost.appendChild(postContent);
        singlePost.appendChild(postAuthor);
    }
}

const darkToggle = function() {
    if (themeClass.className === 'dark') {
        themeClass.setAttribute('class', 'light');
    } else {
        themeClass.setAttribute('class', 'dark');
    }
    localStorage.setItem('theme-selection', themeClass.className);
}

themeSwitch.addEventListener('click', darkToggle);

init();