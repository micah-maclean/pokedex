import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Home } from './pages';
import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { Container, Header } from './components';

const Routers = () => {
  const [ theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header themeChange={changeTheme} theme={theme}/>
        <Container maxWidth='1140px' margin="auto" padding="16px">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routers