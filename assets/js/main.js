const usernameField = document.getElementById('username');
const titleField = document.getElementById('title');
const postField = document.getElementById('blog-post');
const postForm = document.querySelector('form');
const themeSwitch = document.getElementById('theme-button')
const themeClass = document.querySelector('body')

let blogPosts = [];

const init = function() {
    let storedPosts = JSON.parse(localStorage.getItem('blog-posts'));
    let currentTheme = localStorage.getItem('theme-selection')
    if (storedPosts) {
        blogPosts = storedPosts;
    }
    themeClass.setAttribute('class', currentTheme);
}

const createPost = function(event) {
    event.preventDefault();
    if (usernameField.value && titleField.value && postField.value) {
        const post = {
            username: usernameField.value.trim(),
            title: titleField.value.trim(),
            content: postField.value.trim()
        }
        blogPosts.push(post);
        localStorage.setItem('blog-posts', JSON.stringify(blogPosts));
        window.location.href = "./blog.html";
    } else if (!usernameField.value){
        alert('A username is required to create a blog post.');
    } else if (!titleField.value) {
        alert('A title is required to create a blog post.');
    } else {
        alert('Please enter content for your blog post.')
    }
}

const darkToggle = function() {
    if (themeClass.className === 'dark') {
        themeClass.setAttribute('class', 'light');
    } else {
        themeClass.setAttribute('class', 'dark');
    }
    localStorage.setItem('theme-selection', themeClass.className)
}

themeSwitch.addEventListener('click', darkToggle);
postForm.addEventListener('submit', createPost);

init();