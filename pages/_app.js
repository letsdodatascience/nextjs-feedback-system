import { ProvideAuth } from '../lib/auth';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
};

export default MyApp;
