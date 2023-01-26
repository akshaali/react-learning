import {formatDate} from "../../Utility/CommonFunctions"



const ArticleContent = ({
  title = "",
  authorProfilePhoto = "",
  authorName = "",
  date = "",
  timeToRead = "",
  imagUrl = "",
  content = "",
  claps = 0,
  relatedTopics = [],
  socialMediaLinks = [],
}) => {
  return (
    <div>
      {" "}
      <div id="logo">
        <h3 className="therotate">The</h3>
        <h1 className="siren">Siren</h1>
        <button className="btn">Get Started</button>
      </div>
      <div className="main-Api">
        <h1>{title}</h1>

        <p className="logo-content">
          <img src={authorProfilePhoto} alt="Logo" className="face-logo" />
          <div className="logo-cont">
            <p>
              <b>Author Name: {authorName}</b>
            </p>
            <p className="time">{formatDate(date)} · {timeToRead} min read</p>
          </div>
        </p>

        <img src={imagUrl} alt="" id="api-img" />

        <p className="content">
          {content} 
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
