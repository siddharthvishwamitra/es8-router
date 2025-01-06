const loadContent = (route) => {
  const content = document.getElementById('content');
  content.innerHTML = "<p>Loading...</p>";

  const script = document.createElement('script');
  script.src = route;

  script.onload = () => {};
  script.onerror = () => {
    content.innerHTML = "<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>";
  };

  document.head.appendChild(script);
};

const router = () => {
  const path = window.location.hash.substring(1) || '/pages/home.js';
  loadContent(path);
};

document.querySelectorAll('a[data-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = link.getAttribute('href').substring(1);
    window.location.hash = route;
    router();
  });
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);