import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    const input = document.getElementById('towns');
    const data = input.value.split(', ');

    renderComponentTowns(data);

    input.value = '';
}
const renderComponentTowns = (data) => {
    const root = document.getElementById('root');
    render(cardTemplate, root);
}

const cardTemplate = html`
    <ul>
    ${data.map((item) => html`<li> ${item}</li>`)}
    </ul>
    `;


