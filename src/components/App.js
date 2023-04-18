import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <header> 
        <header name={blogData.name}/>
        </header>
        <main>
        <ArticleList posts ={blogData.posts}/>
        </main>
        <About src={blogData.image} alt="blog logo" about={blogData.about} />
    </div>
  );
}

export default App;
