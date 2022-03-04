import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../src/layouts/MainLayout';
import {Provider} from 'react-redux';
import createRootReducer from '../src/store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(thunkMiddleware)))
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};
export default MyApp
