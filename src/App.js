import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./hoc/layout/layout";
import Home from "./containers/home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Services from "./containers/Services/Services";
import Checklist from "./containers/Checklist/Checklist";
import ContactUs from "./containers/ContactUs/ContactUs";
import KnowMore from "./containers/KnowMore/KnowMore";
import News from "./containers/News/News";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact render={(props) => <Home />}></Route>
          <Route path="/about" exact render={(props) => <AboutUs />}></Route>
          <Route
            path="/services"
            exact
            render={(props) => <Services />}
          ></Route>
          <Route
            path="/document-checklist"
            exact
            render={(props) => <Checklist />}
          ></Route>
          <Route
            path="/contact-us"
            exact
            render={(props) => <ContactUs />}
          ></Route>
          <Route
            path="/know-more"
            exact
            render={(props) => <KnowMore />}
          ></Route>
          <Route
            path="/news"
            exact
            render={(props) => <News />}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
