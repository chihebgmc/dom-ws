console.dir(document);

document.title = 'DOM WORKSHOP';

const mainHeading = document.getElementById('main-heading');
console.log(typeof mainHeading);
mainHeading.innerText = 'DOM Workshop updated title';

// document.body.innerHTML = `<h2>New Content Here</h2>
// <p>This is a new paragraph</p>
// `;

const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.innerText = 'New Content Here';
p.innerText = 'This is a new paragraph';

// document.body.appendChild(h2);
// document.body.appendChild(p);
document.body.append(h2, p);

console.log(h2);
console.log(p);
