import Home from "./components/Home.vue";
import Portifolio from "./components/portifolio/Portifolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Vtnc from "./components/portifolio/Vtnc.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portifolio },
  { path: "/stocks", component: Stocks },
  { path: "/vtnc", component: Vtnc },
];
