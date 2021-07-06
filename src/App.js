import axios from 'axios';
import { useState, useEffect } from 'react';
import { Posts } from './components/Posts';
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastPosts = currentPage * displayPostsPerPage; // 1 * 5  = 5
  const indexOfFirstPosts = indexOfLastPosts - displayPostsPerPage; //  5 - 5  = 0
  const currentPageDisplay = posts.slice(indexOfFirstPosts, indexOfLastPosts);
  // console.log(indexOfFirstPosts,indexOfLastPosts) // slice(0,5)

  // set currentPage pass to reactPaginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber + 1);

  return (
    <div className="container py-2 text-primary">
      <h1 className="text-center display-sm-5 fw-bolder my-5">
        JSON Placeholder Posts List.
      </h1>
      <Posts posts={currentPageDisplay} loading={loading} />
      {posts.length !== 0 ? (
        <Pagination
          postPerPage={displayPostsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
