import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewContainer";
// import NewIceCreamContainer from "./components/NewIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Welcome to My Bakery</h1>
        {/* <CakeContainer />
        <IceCreamContainer /> */}
        {/* <NewCakeContainer />
          <NewIceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
