import "./style.css";

const BlogPost = ({ imgUrl, title, subTitle, category, date }) => {
  return (
    <div>
      <hr />
      <div className="left-news">
        <div id="news-image">
          <img src={imgUrl} alt="news-img" />
        </div>
        <div id="news-content">
          <p className="content-title">{title}</p>
          <p>{subTitle}</p>
          <p>
            {category}
            <span>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
