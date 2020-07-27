import React from 'react';
import NextApp, { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Provider, ProviderProps } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { initializeStore } from '../redux/store';
import { appWithTranslation } from '../../i18n';
import { theme } from '../styles/theme';
import main from '../styles/main';

if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

const GlobalStyles = createGlobalStyle`${main}`;

class App extends NextApp<AppProps & ProviderProps> {
  public static async getInitialProps(initProps: any) {
    const { Component, ctx } = initProps;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const namespacesRequired = ['common'];
    return { pageProps, namespacesRequired };
  }

  public render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(initializeStore)(appWithTranslation(App));
