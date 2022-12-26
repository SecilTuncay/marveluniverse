import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/ui/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />;
        </Provider>
      </Layout>
    </div>
  );
}

export default MyApp;
