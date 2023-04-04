
import Index from "views/Index.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
/*
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
**/
import Presentation from "views/examples/Presentation.js";
import Statistiques from "views/examples/Statistiques";

var routes = [
  {
    path: "/index",
    name: "Acceuil",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/Presentation",
    name: "Presentation de la protail",
    icon: "ni ni-planet text-blue",
    component: Presentation,
    layout: "/admin"
  },
  {
    path: "/Statistiques",
    name: "Statistiques",
    icon: "ni ni-planet text-blue",
    component: Statistiques,
    layout: "/admin"
  },
  /*
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  }
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },*/
  {
    path: "/register",
    name: "Inscription",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Se connecter",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
 
];
export default routes;
