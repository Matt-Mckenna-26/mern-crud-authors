import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Router} from '@reach/router';
import './views/ViewAuthors';
import ViewAuthors from './views/ViewAuthors';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import ErrorPage from './views/ErrorPage';

const App = () => {
  return (
    <div className="App">
      <h1 className='text-primary m-3'>Favorite Authors</h1>
      <Router>
        <ViewAuthors path='/'/>
        <AddAuthor path='/new'/>
        <EditAuthor path='/edit/:id'/>
        <ErrorPage path='/error'/>
      </Router>
    </div>
  );
}

export default App;
