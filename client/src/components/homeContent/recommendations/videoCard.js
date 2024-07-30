import React from "react";
import "./videoCard.css";
import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function VideoCard(props) {
  return (
    <div className="videoCard">
     
      <h3>{props.courseTitle}</h3>
      <p>{props.instructor}</p>
    <div className="bestsellerBadge">Enroll here</div>
    <br>
    </br>
    
    <div className="information">More Information</div>
    </div>
  );
}

export default VideoCard;
