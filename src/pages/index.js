import Forecast from "./Forecast";
import Main from "./Main";

const pages = [
  {
    id: 0,
    element: <Main />,
    url: "/",
  },
  {
    id: 1,
    element: <Forecast />,
    url: "/forecast/:location",
  },
];

export default pages;
