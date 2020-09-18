import Home from "./components/Home.vue";
import Portifolio from "./components/portifolio/Portifolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/portifolio", component: Portifolio },
  { path: "/stocks", component: Stocks },
];
