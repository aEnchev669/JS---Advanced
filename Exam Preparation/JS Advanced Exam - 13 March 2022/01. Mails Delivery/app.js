function solve() {
    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list');

    document.getElementById('add').addEventListener('click', addFunc);
    document.getElementById('reset').addEventListener('click', resetButton);

    const sentMails = document.querySelector('.sent-list')
    const deletedMails = document.querySelector('.delete-list')


    function addFunc(e) {
        e.preventDefault();
        const element = document.createElement('li');

        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == '') {
            return;
        }

        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button><button type="submit" id="delete">Delete</button>
        </div>`;
        list.appendChild(element);

        document.getElementById('send').addEventListener('click', sendFunc);
        document.getElementById('delete').addEventListener('click', deleteFunc);

        resetFunc();


        function sendFunc(event) {
            event.preventDefault();

            const sendElement = document.createElement('li');
            sendElement.innerHTML = `
        <span>To: ${name}</span>
        <span>Title: ${title}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>`;
            sentMails.appendChild(sendElement);
            element.remove();

            const deleteFromMail = document.querySelector('.delete').addEventListener('click', () => {
                event.preventDefault();

                const deleteEl = document.createElement('li');

                deleteEl.innerHTML = `
                <span>To: ${nameInput.value}</span>
                <span>Title: ${titleInput.value}</span>`;

                deletedMails.appendChild(deleteEl);
                sendElement.remove();
            });
        }

        function deleteFunc(event) {
            event.preventDefault();

            const mail = document.createElement('li');

            mail.innerHTML = `
            <span>To: ${nameInput.value}</span>
            <span>Title: ${titleInput.value}</span>`;

            deletedMails.appendChild(mail);
            element.remove();
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