import React, { useState, useEffect } from "react";
import GreetingsPopup from "./components/GreetingsPopup";

import { AnimatePresence } from "framer-motion";

function App() {
  //const location = useLocation();

  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      <AnimatePresence>
        {isVisible && <GreetingsPopup setVisible={setVisible} />}
        <h1>fds</h1>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
        <h1>fds</h1>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
        <div>fds</div>
      </AnimatePresence>
    </div>
  );
}

export default App;

// return (
//   <div className="app">
//     <div>fds</div>
//     {/* <AnimatePresence> */}
//     <Router>
//       <div>fds</div>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/introduction">
//           <span>fds</span>
//         </Route>
//         <Route path="/">
//           <div>fds</div>
//         </Route>
//       </Routes>
//     </Router>
//     {/* <AnimatePresence> */}
//   </div>
// );
