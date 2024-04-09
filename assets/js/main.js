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
    lavaLamp();
}

const lavaLamp = function() {
    const colorsArray = [];
    const anglesArray = [];
    for (i = 0; i < 5; i++) {
        let color = Math.floor(Math.random() * 16777216).toString(16);
        while (color.length < 6) {
            color = '0' + color; 
        }
        colorsArray.push(color);
        anglesArray.push(Math.floor(Math.random() * 360));
    }
    document.querySelector('figure').setAttribute('style', `background: linear-gradient(${anglesArray[1]}deg, #${colorsArray[1]}, #${colorsArray[0]}00 70%), linear-gradient(${anglesArray[2]}deg, #${colorsArray[2]}, #${colorsArray[0]}00 70%), linear-gradient(${anglesArray[3]}deg, #${colorsArray[3]}, #${colorsArray[0]}00 70%), linear-gradient(${anglesArray[4]}deg, #${colorsArray[4]}, #${colorsArray[0]}00 70%);`);
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