import { createTheme, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import addVideo from "./components/addvideo";
import Chat from "./components/chat";
import EventHandling from "./components/eventhandling";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import ListVideos from "./components/listvideos";
import Login from "./components/login";
import ProductList from "./components/productlist";
import SignUp from "./components/signup";
import ViewVideo from "./components/view";
import { ProdductProvider } from "./productContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary:{
        main:"#e6244ed7",
        dark:"red",
      },
    },


  });
const darkTheme = createTheme({
    palette: {
      mode:  "dark" ,
     background:{
       paper:"#1c113a",
     }
    },

  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>
      <ProdductProvider>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/event" component={EventHandling} />
        <Route path="/signup" component={SignUp} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/browse" component={ProductList} />
        <Route path="/addvideo" component={addVideo} />
        <Route path="/listvideo" component={ListVideos} />
        <Route path="/View/:id" component={ViewVideo} />
        <Route path="/chat" component={Chat} />
        <Footer></Footer>
      </BrowserRouter>
      </ProdductProvider>
    </ThemeProvider>
  );
}

export default App;