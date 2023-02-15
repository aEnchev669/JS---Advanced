window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('post-title');
    const category = document.getElementById('post-category');
    const content = document.getElementById('post-content');
    document.getElementById('publish-btn').addEventListener('click', createPost);
    const uploadedPost = document.getElementById('published-list');
    const list = document.getElementById("review-list");

    let clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', clearBtnFunc)


    function createPost(e) {

        if (title.value && category.value && content.value) {
            addPost(title.value, category.value, content.value)
        }

    }

    function addPost(titleValue, categoryValue, contentValue) {

        let li = document.createElement('li');
        li.classList.add('rpost')
        let article = createArticle(titleValue, categoryValue, contentValue);

        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editBtnFunc);

        let approveBtn = document.createElement('button');
        approveBtn.classList.add('action-btn', 'approve');
        approveBtn.textContent = 'Approve';
        approveBtn.addEventListener('click', approveBtnFunc);

        li.appendChild(article);
        li.appendChild(approveBtn);
        li.appendChild(editBtn);
        list.appendChild(li);
        title.value = '';
        category.value = '';
        content.value = '';
    }

    function approveBtnFunc(e) {
        e.preventDefault();

        const elements = e.target.parentElement;

        Array.from(elements.querySelectorAll('button')).forEach(btn => btn.remove());

        uploadedPost.appendChild(elements);



       
    }

    function editBtnFunc(e) {
        e.preventDefault();

        const elements = e.target.parentElement;
        let article = elements.getElementsByTagName('article')[0].children;

        let titleVal = article[0].textContent;
        let categoryVal = article[1].textContent;
        let contentVal = article[2].textContent;

        title.value = titleVal;
        category.value = (categoryVal.split(': '))[1];
        content.value = (contentVal.split(': '))[1];

        elements.remove();
    }

    function clearBtnFunc(e) {
        e.preventDefault();
        
        let elements = uploadedPost.children;

        Array.from(elements).forEach(el => el.remove());
    }

    function createArticle(titleValue, categoryValue, contentValue) {
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = titleValue;

        let categoryP = document.createElement('p');
        categoryP.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement('p');
        contentP.textContent = `Content: ${contentValue}`;

        article.appendChild(h4);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article;
    }

}