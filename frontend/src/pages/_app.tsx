import "react-day-picker/lib/style.css";
import "config/tailwind.css";

import RelayEnvironment from "config/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import { Suspense } from "react";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<h1>Hey there</h1>}>
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
