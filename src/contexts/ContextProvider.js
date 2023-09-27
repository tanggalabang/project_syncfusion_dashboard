import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  surveys: [],
  questionTypes: [],
  toast: {
    message: null,
    show: false,
  },
  setCurrentUser: () => { },
  setUserToken: () => { },
});


const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });


  const [currentUser, setCurrentUser] = useState({});
  // const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  const [userToken, _setUserToken] = useState('1223');
  // const [surveys, setSurveys] = useState(tmpSurveys)
  const [questionTypes] = useState(['text', "select", "radio", "checkbox", "textarea"])
  const [toast, setToast] = useState({ message: '', show: false })

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }

  const showToast = (message) => {
    setToast({ message, show: true })
    setTimeout(() => {
      setToast({ message: '', show: false })
    }, 5000)
  }



  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken,
      // surveys,
      questionTypes,
      toast,
      showToast,
      currentColor,
      currentMode,
      activeMenu,
      screenSize,
      setScreenSize,
      handleClick,
      isClicked,
      initialState,
      setIsClicked,
      setActiveMenu,
      setCurrentColor,
      setCurrentMode,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
