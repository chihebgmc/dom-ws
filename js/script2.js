const mainHeading = document.getElementById('main-heading');
console.dir(mainHeading.className);
console.dir(mainHeading.classList);

const headingTwo = document.getElementById('heading-two');
// headingTwo.className += ' text-danger';
// headingTwo.classList.add('text-danger', 'abc');
// headingTwo.classList.remove('text-xl');

const mainBtn = document.getElementById('main-btn');

mainBtn.addEventListener('click', function (event) {
  console.log(event.target);
  event.target.innerText = "I'm clicked";

  headingTwo.classList.toggle('text-danger');
});
console.log(headingTwo);
