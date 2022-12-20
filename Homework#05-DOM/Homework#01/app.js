const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
  p.textContent = 'This is the new text for the paragraph';
});

const headers = document.querySelectorAll('h1, h2, h3');
headers.forEach(h => {
  h.innerHTML = 'This is the new text for the header';
});