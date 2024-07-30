// import React, { useState } from "react";
// import {
//   Grid,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
//   ButtonBase,
//   CardHeader,
// } from "@mui/material/";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import { EditFilled } from "@ant-design/icons";
// import { MessageFilled } from "@ant-design/icons";
// import DeleteIcon from "@mui/icons-material/Delete";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { useDispatch } from "react-redux";
// import { commentDoubt, deleteDoubt } from "../../../actions/doubts";
// import { useHistory } from "react-router-dom";
// import useStyles from "./styles";
// import CommentDoubt from "../../DoubtDetails/CommentDoubt";

// const Doubt = ({ doubt, setCurrentId }, props) => {
//   const user = JSON.parse(localStorage.getItem("profile"));
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const classes = useStyles();
  

//   const openDoubt = (e) => {
//     history.push(`/discussion/${doubt._id}`);
//   };


//   return (
//     <div>
//       <div className={classes.addpost}>
//         <div className={classes.addpostarea}>
//           <Card className={classes.card} borderradius="borderradius" elevation={6}>
//             <ButtonBase component="span" name="test" className={classes.cardAction} onClick={openDoubt}>
//               <CardHeader title={doubt.question} subheader={`Asked By: ${doubt.name}`}/>
//             {/* <CardContent>
//                 <Typography variant="h4"><strong>{doubt.question}</strong></Typography>
//               </CardContent>
//               <br />
//               <CardContent>
//                 <div className={classes.details}>
//                 <Typography variant="body1" color="textSecondary" component="p">
//                   Asked By: {doubt.name}
//                 </Typography>
//                 </div>
//               </CardContent> */}
//             </ButtonBase>

//             <CardActions>
//               {(user?.result?._id === doubt.creator) && (
//                 <div>
//                   <Button
//                     color="primary"
//                     size="small"
//                     onClick={() => setCurrentId(doubt._id)}
//                   >
//                     <EditFilled fontSize="medium" />
//                     Edit
//                   </Button>
//                   </div>
//               )}
//               <div>
//                   <Button color="primary" size="small" onClick={openDoubt}>
//                     <MessageFilled fontSize="medium" />
//                     Comment
//                   </Button>
//                   </div>
//                   {(user?.result?._id === doubt.creator) && (
//               <Button
//                 size="small"
//                 color="secondary"
//                 onClick={() => dispatch(deleteDoubt(doubt._id))}
//               >
//                 <DeleteIcon fontSize="medium" /> Delete
//               </Button>
//                   )}
//             </CardActions>
//             </Card>
//             <Card className={classes.secondcard} borderradius="borderradius" elevation={6}>
//             <CommentDoubt doubt={doubt} />
//             </Card>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doubt;



/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Button,
  ButtonBase,
} from "@mui/material/";
import { EditFilled, MessageFilled } from "@ant-design/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteDoubt } from "../../../actions/doubts";
import useStyles from "./styles";
import CommentDoubt from "../../DoubtDetails/CommentDoubt";

const Doubt = ({ doubt, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const openDoubt = () => {
    history.push(`/discussion/${doubt._id}`);
  };

  return (
    <div>
      <div css={classes.addpost}>
        <div css={classes.addpostarea}>
          <Card css={classes.card} elevation={6}>
            <ButtonBase component="span" css={classes.cardAction} onClick={openDoubt}>
              <CardHeader title={doubt.question} subheader={`Asked By: ${doubt.name}`} />
            </ButtonBase>

            <CardActions>
              {user?.result?._id === doubt.creator && (
                <Button color="primary" size="small" onClick={() => setCurrentId(doubt._id)}>
                  <EditFilled fontSize="medium" />
                  Edit
                </Button>
              )}
              <Button color="primary" size="small" onClick={openDoubt}>
                <MessageFilled fontSize="medium" />
                Comment
              </Button>
              {user?.result?._id === doubt.creator && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteDoubt(doubt._id))}>
                  <DeleteIcon fontSize="medium" /> Delete
                </Button>
              )}
            </CardActions>
          </Card>
          <Card css={classes.secondcard} elevation={6}>
            <CommentDoubt doubt={doubt} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
