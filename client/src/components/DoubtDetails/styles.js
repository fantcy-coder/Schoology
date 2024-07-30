// import { makeStyles } from "@mui/material/styles";
// const drawerWidth = 240;

// export default makeStyles((theme) => ({
//   commentsOuterContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   commentsInnerContainer: {
//     height: "200px",
//     overflowY: "auto",
//     marginRight: "30px",
//   },
//   root: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
// }));



/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const useStyles = () => {
  const theme = useTheme();

  return {
    commentsOuterContainer: css`
      display: flex;
      justify-content: space-between;
    `,
    commentsInnerContainer: css`
      height: 200px;
      overflow-y: auto;
      margin-right: 30px;
    `,
    root: css`
      width: calc(100% - ${drawerWidth}px);
      margin-left: ${drawerWidth}px;
    `,
  };
};

export default useStyles;
