const nav = document.getElementsByTagName('nav')[0];
const templates = Array.from(document.getElementsByTagName('template'));
const pages = templates.map(template => {
  return {
    id: template.getAttribute('id'),
    title: template.getAttribute('data-title')
  };
});

pages.forEach(page => {
  let navItem = document.createElement('A');
  navItem.className = 'item';
  navItem.href = '#';
  navItem.setAttribute('data-page', page.id);
  navItem.innerHTML = page.title;
  nav.append(navItem);
});

nav.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName == 'A') {
    setPage(event.target.getAttribute('data-page'));
  }
});

setPage(pages[0].id);

function setPage(page) {
  const container = document.getElementById('content-container');
  const pageTemplate = document.querySelector('template#' + page);

  Array.from(document.querySelectorAll('nav a.item')).forEach(item => {
    if (item.getAttribute('data-page') == page) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  document.title = pageTemplate.getAttribute('data-title');

  const node = document.importNode(pageTemplate.content, true);
  container.innerHTML = '';
  container.append(node);
}
