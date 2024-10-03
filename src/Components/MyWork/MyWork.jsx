import "./MyWork.css";
import { mywork_data } from "../../assets/mywork_data";

export const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        {/* <img src='' alt='' /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              style={{ height: "498px", width: "844px", paddingTop: "40px" }}
              src={work.w_img}
              alt=""
            />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
      </div>
    </div>
  );
};
