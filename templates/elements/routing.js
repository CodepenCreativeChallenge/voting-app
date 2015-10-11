
window.addEventListener('WebComponentsReady', () => {

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/
  page('/', () => {
    app.route = 'home';
    app.scrollPageToTop();
  });

  page('/dev-team', () => {
    app.route = 'dev-team';
    app.scrollPageToTop();
  });

  page('/users', () => {
    app.route = 'users';
    app.scrollPageToTop();
  });

  page('/users/:name', (data) => {
    app.route = 'user-info';
    app.params = data.params;
    app.scrollPageToTop();
  });

  page('/contact', () => {
    app.route = 'contact';
    app.scrollPageToTop();
  });

  page('/about', () => {
    app.route = 'about';
    app.scrollPageToTop();
  });

  page('/vote', () => {
    app.route = 'vote';
    app.scrollPageToTop();
  });

  // add #! before urls
  page({
    hashbang: true
  });

});
