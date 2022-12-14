import Home from "../pages/Home/index";
import Trending from "../pages/Trending/index";
import Requesting from "../pages/Requesting/index";
import Setting from "../pages/Setting/index";
import Empty from "../pages/Empty/index";

const allRoutes = [
    // {path: 'unauthorized', component: Unauthorized, layout:'unauthorized'},
    {path: 'home', component: Home},
    {path: 'trending', component: Trending},
    {path: 'requesting', component: Requesting},
    {path: 'setting', component: Setting},
    {path: '*', component: Empty, layout:'empty'}
]

export default allRoutes;