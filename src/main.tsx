import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Paltform from "./pages/Paltform";
import Genre from "./pages/Genre";
import Review from "./pages/Review";
import Publishers from "./pages/Publishers";
import Profile from "./pages/Profile";
import Nomatch from "./components/Nomatch";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
<BrowserRouter>
    <Routes>
        <Route  path="/" element={<App />} />
        <Route  path="home" element={<App />} />
         <Route path="genre" element={<Genre/>} />
         <Route path="platform" element={<Paltform />} />
         <Route path="reviews" element={<Review />} />
         <Route path="publishers" element={<Publishers />} />
         <Route path="profile" element={<Profile />} />
         <Route path="*" element={<Nomatch />}/>
    </Routes>
</BrowserRouter>


)

