// import { makeStyles } from "@mui/material";

// const drawerWidth = 240;

// export default makeStyles((theme)=>({
//     root:{
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//     },
// }))



/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css`
      width: calc(100% - ${drawerWidth}px);
      margin-left: ${drawerWidth}px;
    `,
  };
};

export default useStyles;
