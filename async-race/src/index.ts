import { Route } from "./components/route";
import "./styles.scss";

const route = new Route();
window.onload = () => {
  route.init();
};

window.window.onpopstate = () => {
  route.init();
};
