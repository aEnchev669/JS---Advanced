import { html, render } from './node_modules/lit-html/lit-html.js';



const contactTemplate = () => html`
<div class="contact card">
<div>
<i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
<h2>Name: John</h2>
<button class="detailsBtn">Details</button>
<div class="details" id="1">
<p>Phone number: 0847759632</p>
<p>Email: john@john.com</p>
</div>
</div>
</div>`;

const div = document.getElementById('contacts');

render(contactTemplate(), div);