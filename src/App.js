// react router dom
import { BrowserRouter } from  'react-router-dom';

// markup
import Markup from './markup/Markup';
import CustomScrollbar from './markup/components/CustomScrollbar';

// css
import 'bootstrap/dist/css/bootstrap.min.css';


// sass
import './assets/scss/style.scss';

// js
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {


  return (
      <BrowserRouter basename="/satgur-react">
        <CustomScrollbar/>
        <Markup />
      </BrowserRouter>
  );
}

export default App;
