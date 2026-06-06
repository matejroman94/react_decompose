// import a css file containig article styles
import "./Article.css" 


// Create an Article function returning the HTML of article block
const Article = () => {
    return(
        <article className="article">
            <h2>Headline</h2>
            <p className="article__paragraph">
                This is a sample article paragraph text.
            </p>
        </article>
    );
};

// Add a default export statement for Article component to use it in the other files
export default Article;
