import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Supports from "./pages/Supports";
import Nav from "./components/Nav";
import Sos from "./pages/Sos";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supports" element={<Supports />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/sos" element={<Sos />} />
      </Routes>
    </>
  );
};

export default App;
