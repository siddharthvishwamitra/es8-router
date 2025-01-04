const loadContent = (route) => {
  document.getElementById('content').innerHTML = "";
  const script = document.createElement('script');
  script.src = `pages/${route}.js`;
  script.onload = () => {
    console.log(`${route}.js loaded successfully`);
  };
  script.onerror = () => {
    document.getElementById('content').innerHTML = "<h2>404 Not Found</h2><p>The page you are looking for doesn't exist.</p>";
  };
  document.head.appendChild(script);
};

const router = () => {
  const path = window.location.hash.substring(1) || 'home';
  loadContent(path);
};

document.querySelectorAll('a[data-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = link.getAttribute('href').substring(1);
    router();
  });
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);