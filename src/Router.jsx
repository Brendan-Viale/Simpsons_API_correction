import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import Anime from "./pages/Anime/Anime"
import Login from "./pages/Login/Login"
import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
  return (
    <Routes>
        <Route path="/">
            <Route element={<PrivateRoutes />}>
                <Route index element={<Home />} />
                <Route path="animes/:id" element={<Anime />} />
            </Route>
            <Route path="login" element={<Login />} />
        </Route>
    </Routes>
  )
}

export default Router