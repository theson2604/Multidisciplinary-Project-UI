import Home from "../pages/Home/index";
import Trending from "../pages/Trending/index";
import Administration from "../pages/Administration/index";
import Setting from "../pages/Setting/index";
import Empty from "../pages/Empty/index";
import Post from "../pages/Post/index";
import Add from "../components/Add";

const allRoutes = [
    // {path: 'unauthorized', component: Unauthorized, layout:'unauthorized'},
    {path: 'home', component: Home},
    {path: 'trending', component: Trending},
    {path: 'requesting', component: Requesting},
    {path: 'setting', component: Setting},
    { path: 'post/*', component: Post },
    {path: 'add', component: Add},
    {path: '*', component: Empty, layout:'empty'}

]

export default allRoutes;