import http from 'http';
import app from './app';
import environment from './environment';

const server = http.createServer(app);
let currentApp = app;

server.listen(environment.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${environment.port}/. `);
});

if (module.hot) {
  // eslint-disable-next-line no-console
  console.log('Server-side HMR enabled!');

  module.hot.accept([
    './app',
  ], () => {
    server.removeListener('request', currentApp);

    // eslint-disable-next-line global-require
    const newApp = require('./app').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
