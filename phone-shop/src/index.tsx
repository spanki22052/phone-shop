import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Locator from './components/locator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
document.body.style.backgroundColor = '#C3E0E5';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Locator />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
