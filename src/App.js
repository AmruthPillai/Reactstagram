import "./App.css";
import Post from "./Post";
import posts from "./posts.json";

const App = () => {
  return (
    <div className="App">
      <header className="row">
        <div className="offset-lg-3 col-lg-4">Reactstagram</div>
      </header>

      <div className="row mt-5">
        <div className="offset-lg-3 col-lg-4">{posts.map(Post)}</div>
      </div>
    </div>
  );
};

export default App;
