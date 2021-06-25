import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/room/new" component={NewRoom} />
          <Route path="/room/:id" component={Room} />
          <Route path="/admin/room/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
