import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import Missing from './Missing';
import PostLayout from './PostLayout';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ul>
          <li><Link to="/newpost">New Post</Link></li>
        </ul>
        <ul>
          <li><Link to="/postpage">Post Page</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/newpost' element={<NewPost />}/>
        {/* Grouping postpage elements into one and using index to specific first component in that */}
        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=':id' element={<Post />} />
          {/* Displaying NewPost component when two links are clicked */}
          <Route path='newpost' element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />}/>
      </Routes>
    </div>
  );
}

export default App;
