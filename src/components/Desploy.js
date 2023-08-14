import { useState, useEffect } from "react";
import movieApi from "./api/MovieApi";

function Desploy() {
  const [search, setSearch] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieList = await movieApi.getAll();
      console.log(movieList);
      setPosts(movieList);
    };

    fetchMovie();
    // fetch("https://testapi-xfl4.onrender.com/List/")
    //   .then((res) => res.json())
    //   .then((res) => setPosts(res));
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {posts.map((post, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <li>{post.name}</li>
        </div>
      ))}
    </>
  );
}

export default Desploy;
