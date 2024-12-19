import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {

  // use state to define sort criteria

  // store sorted articles in new variable ie [..articles].sort((a,b) => {})
// OR state in child component... 

  return (

    //  add div class for sorting component (child) and pass down handler function? 

    <div className="articles-list-parent-component">
      <ul className="articles-list-component">
        {articles.map((currentArticle) => {
          return (
            <ArticleCard
              article={currentArticle}
              key={currentArticle.article_id}
            />
          );
        })}
      </ul>
    </div>
  );
}
