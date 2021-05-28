import environment from './environment';
import server from './server';

server.listen(environment.port)
  // eslint-disable-next-line no-console
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
