import './App.css'

import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';

// NOTE: Auth Pages Routes for Future References
// import Login from './pages/Login';
// import { Signup } from './pages/Signup';

function App() {

  const theme = createTheme({
    primaryColor: "lime",
  });

  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* // NOTE: Auth Routes for Future References */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
