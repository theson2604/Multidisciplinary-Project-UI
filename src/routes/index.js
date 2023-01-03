import Home from "../pages/Home/index";
import Trending from "../pages/Trending/index";
import Administration from "../pages/Administration/index";
import Setting from "../pages/Setting/index";
import Empty from "../pages/Empty/index";
import Post from "../pages/Post/index";
import Edit from "../pages/Edit";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const allRoutes = [
    // {path: 'unauthorized', component: Unauthorized, layout:'unauthorized'},
    {path: '/', component: Login, layout: 'authen'},
    {path: '/register', component: Register, layout: 'authen'},
    {path: 'home', component: Home},
    {path: 'trending', component: Trending},
    {path: 'requesting', component: Administration},
    {path: 'setting', component: Setting},
    // {path: 'edit', component: Edit},
    { path: 'post/:id', component: Post },
    {path: '*', component: Empty, layout:'empty'}

]

export default allRoutes;