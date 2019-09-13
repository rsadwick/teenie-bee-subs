import App, { Container } from 'next/app';
import Head from 'next/head';
import SubscriptionProvider from '../components/SubscriptionProvider';
import subscriptions from '../data/Subscriptions';
import ringSizeCollection from '../data/RingSizeCollection';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <SubscriptionProvider 
            subscriptions={subscriptions} 
            ringSizeCollection={ringSizeCollection}>
          <Component {...pageProps} />
        </SubscriptionProvider>
      </Container>
    );
  }
}

export default MyApp;