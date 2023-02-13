function solve() {

    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list');
    const deleted = document.querySelector('.delete-list');
    const sent = document.querySelector('.sent-list');



    document.getElementById('add').addEventListener('click', addToTheList);
    document.getElementById('reset').addEventListener('click', resetButton);

    function addToTheList(event) {
        event.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;


        if (name == '' || title == '' || message == '') {
            return;
        }

        const element = document.createElement('li');
        element.innerHTML =
            `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

        element.querySelector('#delete').addEventListener('click', deleteMail);
        element.querySelector('#send').addEventListener('click', sendMail);
        list.appendChild(element);

        resetInput();

        function deleteMail() {
            const mail = document.createElement('li');
            mail.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
            deleted.appendChild(mail);

            element.remove();
        }
        function sendMail(event) {
            const mail = document.createElement('li');
            mail.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;
            sent.appendChild(mail);
            element.remove();

            const deleteFromMail = document.querySelector('.delete').addEventListener('click', () => {
                const mailDelete = document.createElement('li');
                mailDelete.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
                deleted.appendChild(mailDelete);
                mail.remove();
            });
        }
    }



    function resetButton(event) {
        event.preventDefault();
        resetInput();
    }
    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }

}
solve()