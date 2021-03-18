// styles
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// outsource dependencies
import {client} from '../apollo-client';
import {ApolloProvider} from '@apollo/client';

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
