var logoutBlock = document.querySelector('.logout-block');
var addForm = document.querySelector('.add-blog-form');
var signIn = document.querySelector('.sign-in');

var users = [{
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    address: 'Grbavicka br12',
    username: 'johny',
    password: '123456',
}];

var loggedUser = {};

var allBlogs = [];

var signupForm = document.getElementById('signup-form');
signupForm.style.display = 'none';

function isUserLogged() {
    var userData = localStorage.getItem('loggedUser');
    if (userData) {
        var user = JSON.parse(userData);
        login(user.email, user.password);
    } else {
        hide(logoutBlock);
        hide(addForm);
        displayBlog()
    }
}

isUserLogged();


function login(p_email, p_password) {
    var email = p_email || document.getElementById('email').value;
    var password = p_password || document.getElementById('password').value;
    var usersData = localStorage.getItem('users');
    if (usersData) {
        users = JSON.parse(usersData);
    }
    for (var user of users) {
        if ((email === user.email || email === user.username) && password === user.password) {
            var loginForm = document.getElementById('login-form');
            loginForm.style.display = 'none';
            hide(signIn);
            var nav = document.querySelector('.wrapper');
            nav.style.display = 'block';
            var name = document.getElementById('user-name');
            name.innerHTML = user.name;
            addForm.style.display = 'block';
            logoutBlock.style.display = 'flex';
            loggedUser = user;
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            clearValue('email');
            clearValue('password');
        } else {
            var errorMsg = document.querySelector('#login-form .error-msg');
            errorMsg.style.display = 'block';
        }
    }

    displayBlog();
}

function loginOnEnter(e) {
    if (e.keyCode === 13) {
        console.log('User je pritisnuo enter');
        login();
    }
}

function logout() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
    var nav = document.querySelector('.wrapper');
    nav.style.display = 'none';
    document.querySelector('#login-form .error-msg').style.display = 'none';
    loggedUser = {};
    localStorage.removeItem('loggedUser');
}

function goToSignupForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

function goToLoginForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

function registerNow() {
    console.log('logika za dodavanje korisnika');
    var name = getValue('name');
    var email = getValue('su-email');
    var address = getValue('address');
    var username = getValue('username');
    var password = getValue('su-password');
    if (name === '' || email === '' || address === '' || username === '' || password === '') {
        return alert('Unesite sve podatke')
    }
    var user = {
        name,
        email,
        address,
        username,
        password
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users))
    clearValue('name');
    clearValue('su-email');
    clearValue('address');
    clearValue('username');
    clearValue('su-password');

    goToLoginForm();
}

function getValue(id) {
    return document.getElementById(id).value;
}

function clearValue(id) {
    document.getElementById(id).value = '';
}

function postBLog() {
    var blogTitle = getValue('blog-title');
    var blogDesc = getValue('blog-desc');

    if (blogTitle === '' || blogDesc === '') {
        return alert('Popunite sve podatke')
    }

    var blog = {
        blogTitle,
        blogDesc,
        postDate: new Date(),
        author: loggedUser.name,
        comments: []
    };

    allBlogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(allBlogs));
    displayBlog();

    clearValue('blog-title');
    clearValue('blog-desc');
}

function displayBlog() {
    var blogsData = localStorage.getItem('blogs');
    if (blogsData) {
        allBlogs = JSON.parse(blogsData);
    }
    renderBlogs(allBlogs);
}

function searchBlogs(e) {
    var searchBy = e.target.value;
    var filteredBlogs = [];
    for (var blog of allBlogs) {
        if (blog.blogTitle.toLowerCase().indexOf(searchBy.toLowerCase()) > -1) {
            filteredBlogs.push(blog);
        }
    }
    renderBlogs(filteredBlogs);
}

function renderBlogs(blogs) {
    blogs.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
    var publishedBlogs = document.getElementById('published-blogs')
    publishedBlogs.innerHTML = '';
    for (var blog of blogs) {
        var h3 = document.createElement('h3');
        h3.innerHTML = blog.blogTitle;
        h3.classList.add('blog-title');
        h3.appendChild(createDeleteBtn(blog));
        var div = document.createElement('div');
        div.classList.add('posted-blog');
        var p = document.createElement('p');
        p.innerHTML = blog.blogDesc;
        var span = document.createElement('span');
        span.innerHTML = `Author: <span style="font-weight:bold;">${blog.author}</span>`;
        var datum = document.createElement('i');
        datum.style.paddingLeft = '30px';
        datum.innerHTML = new Date(blog.postDate).toLocaleString();
        div.appendChild(p);
        div.appendChild(span);
        div.appendChild(datum);
        publishedBlogs.appendChild(h3);
        publishedBlogs.appendChild(div);
        showComments(blog.comments)
        publishedBlogs.appendChild(addComment(blog))
    }
}

function addComment(blog) {
    var input = document.createElement('input');
    input.classList.add('blog-input');
    input.placeholder = 'Leave a comment...';
    input.style = 'width:40%;margin-left:60%;margin-top:5px;';
    input.addEventListener('keyup', function (e) {
        var text = e.target.value;
        if (e.keyCode !== 13) return;
        if (isGuest())  return alert('Molimo Vas registrujte se');
        var comment = {
            text,
            author: loggedUser.name,
            postedDate: new Date()
        }
        if (!blog.comments) {
            blog.comments = [];
        }

        blog.comments.push(comment);
        localStorage.setItem('blogs', JSON.stringify(allBlogs));
        input.value = '';
        renderBlogs(allBlogs)
    });
    return input;
}

function showComments(comments) {
    var publishedBlogs = document.getElementById('published-blogs')
    for (var comment of comments) {
        var div = document.createElement('div');
        div.classList.add('posted-blog');
        div.style = 'width:60%;margin-left:40%;margin-top:4px;padding:7px 15px;'
        var p = document.createElement('p');
        p.innerHTML = comment.text;
        p.style = 'margin-bottom:5px;margin-top:5px;'
        var span = document.createElement('span');
        span.innerHTML = `Author: ${comment.author}`;
        var datum = document.createElement('i');
        datum.style.paddingLeft = '30px';
        datum.innerHTML = new Date(comment.postedDate).toLocaleString();
        div.appendChild(p);
        div.appendChild(span);
        div.appendChild(datum);
        publishedBlogs.appendChild(div);
    }

}

function createDeleteBtn(blog) {
    var btn = document.createElement('button');
    btn.classList.add('blog-delete-btn');
    btn.style.display = loggedUser.name === blog.author ? 'block' : 'none';
    btn.innerHTML = '<i class="fa fa-trash" style="font-size:22px;cursor: pointer;"></i>'
    btn.addEventListener('click', function () {
        var index = allBlogs.indexOf(blog);
        var response = confirm('Jeste li sigurni?');
        if (!response) return;
        allBlogs.splice(index, 1);
        //localStorage.setItem('blogs',JSON.stringify(allBlogs));
        renderBlogs(allBlogs);
    })
    return btn;
}

function isGuest() {
    return !loggedUser.name;
}

function hide(el) {
    el.style.display = 'none';
}