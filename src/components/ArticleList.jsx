import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  console.log(articles, "<articles in list component");
  return (
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
