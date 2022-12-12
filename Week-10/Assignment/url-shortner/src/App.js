import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./Components/Nav.js";
import Shorty from "./Components/Shorty";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<Nav />
			<Shorty />
			<Footer />
		</div>
	);
}

export default App;
