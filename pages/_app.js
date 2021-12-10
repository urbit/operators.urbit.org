import { init } from "@socialgouv/matomo-next";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/prism.css";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  });

  return (
    <>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
