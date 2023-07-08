import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  token: null,
  user: null,
  setUser: () => {},
  setToken: () => {},
});
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [token, _setToken] = useState(localStorage.getItem('TOKEN'));
  const [token, _setToken] = useState(localStorage.getItem("TOKEN"));
  const [notification, _setNotification] = useState("");

  const setToken = (token) => {
    _setToken(token);
    if (token && token != null) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
  };

  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuthContext = () => useContext(UserContext);
