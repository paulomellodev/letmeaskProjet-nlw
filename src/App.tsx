import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/room/new" component={NewRoom} />
      </BrowserRouter>
    </>
  );
}

export default App;
