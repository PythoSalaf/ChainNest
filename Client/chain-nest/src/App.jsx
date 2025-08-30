import { Route, Routes } from "react-router-dom";
import { Dashboard, Groups, Home } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
