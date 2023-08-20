import { useState, useEffect } from "react";
import movieApi from "./api/MovieApi";

function Desploy() {
  const [search, setSearch] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const fetchMovie = async () => {
    //   const movieList = await movieApi.getAll();
    //   console.log(movieList);
    //   setPosts(movieList);
    // };

    // fetchMovie();
    fetch("https://api.themoviedb.org/8d12775adaf4e75ea96c81ec66ddd3fe")
      .then((res) => res.json())
      .then((res) => console.log(res));
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
