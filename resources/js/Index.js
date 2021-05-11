import ReactDOM from 'react-dom';
import routes from "./libraries/Routes";
import './styles/style.scss';
import './styles/index.scss';
import './styles/responsive.scss';
import * as serviceWorker from './serviceWorker';

const allRoutes = routes;

ReactDOM.render (
  allRoutes,
  document.getElementById('root')
);

serviceWorker.unregister();