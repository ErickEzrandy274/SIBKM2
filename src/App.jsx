import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import CreateAccountForm from "./components/Account/CreateAccountForm";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateProductWrapper from "./components/Product/Form/CreateProductWrapper";
import DetailProductPage from "./components/Product/DetailPage/DetailProductPage";
import ProductTable from "./components/Product/ListProduct/ProductTable";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />

			<Route
				path="/create-product"
				element={
					<>
						<Navbar />
						<CreateProductWrapper />
					</>
				}
			/>

			<Route
				path="/create-account"
				element={
					<>
						<Navbar />
						<CreateAccountForm />
					</>
				}
			/>

			<Route
				path="/product/:name"
				element={
					<>
						<Navbar />
						<DetailProductPage />
					</>
				}
			/>

			<Route
				path="/product-list"
				element={
					<>
						<Navbar />
						<ProductTable />
					</>
				}
			/>
		</Routes>
	);
}

export default App;
