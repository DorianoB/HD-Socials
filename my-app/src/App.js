import "./App.css";
// Bootstrap CSS
import "./components/custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
