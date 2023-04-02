import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { makeStore, persistor } from "./reduxs/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import client from "./utils/apollo-client";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<React.StrictMode>
				<Provider store={makeStore()}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</React.StrictMode>
		</BrowserRouter>
	</ApolloProvider>
);
