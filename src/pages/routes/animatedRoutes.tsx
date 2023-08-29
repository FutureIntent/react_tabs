import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "../Index";
import Login from "../Login";
import Registration from "../Registration";
import Tabs from "../Tabs";
import Error from "../Error";

const AnimatedRoutes = () => {

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/tabs" element={<Tabs />} />
              <Route path="/error" element={<Error />} />
            </Routes>
      </AnimatePresence>
    );
};

export default AnimatedRoutes;