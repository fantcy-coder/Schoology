// import { makeStyles } from "@mui/material/styles";

// export default makeStyles((theme) => ({
//   card: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: '100%',
//     position: 'relative',
//     padding: "20px 10px",
//     borderStyle: 'solid',
//     borderColor: 'grey'
//   },

// }));


/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  return {
    card: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      padding: 20px 10px;
      border-style: solid;
      border-color: grey;
    `,
  };
};

export default useStyles;