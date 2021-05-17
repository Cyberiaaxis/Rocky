import ReactDOM from 'react-dom';
import Routes from "./libraries/Routes";
import './styles/style.scss';
import './styles/index.scss';
import './styles/responsive.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render (
  <Routes/>,
  document.getElementById('root')
);

serviceWorker.unregister();