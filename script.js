const form = document.querySelector('form');
const commentList = document.querySelector('#comment-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const comment = event.target.elements.comment.value;

  const li = document.createElement('li');
  const nameSpan = document.createElement('span');
  const commentSpan = document.createElement('span');

  nameSpan.textContent = `${name}: `;
  commentSpan.textContent = comment;

  li.appendChild(nameSpan);
  li.appendChild(commentSpan);

  commentList.appendChild(li);

  event.target.reset();
});
