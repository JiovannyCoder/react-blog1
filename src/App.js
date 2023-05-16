import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Create from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
