import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import styling
import "./App.css";

// component imports
import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import FoodContainer from "./containers/FoodContainer";

// function imports
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/food_items");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/food_items");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <SignIn
            handleLogin={handleLogin}
          />
        </Route>
        <Route path="/register">
          <SignUp
            handleRegister={handleRegister}
          />
        </Route>
        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
        >
          <Route path="/food_items">
            <FoodContainer
              currentUser={currentUser}
            />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
