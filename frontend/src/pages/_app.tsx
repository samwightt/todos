import "react-day-picker/lib/style.css";
import "config/tailwind.css";
import NoSSR from "react-no-ssr";

import RelayEnvironment from "config/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import { Suspense } from "react";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NoSSR>
        <Suspense fallback={<h1>Hey there</h1>}>
          <Component {...pageProps} />
        </Suspense>
      </NoSSR>
    </RelayEnvironmentProvider>
  );
}

export async function getServerSideProps() {}

export default MyApp;
