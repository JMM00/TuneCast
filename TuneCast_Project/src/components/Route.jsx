import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import MemberPage from "../pages/TuneCastPage";
import Chart from "../pages/Chart";
import Playlist from "../pages/Playlist";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<MemberPage />} />
        <Route pathe="/:playlist" element={Chart}/>
        <Route path="/mypage" element={Playlist}/>
      </Routes>
    </BrowserRouter>
  );
}