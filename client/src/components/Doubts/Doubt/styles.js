// import { makeStyles } from "@mui/material/styles";

// export default makeStyles((theme) => ({
//   addpostarea: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     maxWidth: "100px",
//     width: "50%",
//     alignItems: 'center'
//   },
//   addpost: {
//     padding: "40px 2px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   card: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '10px',
//     height: '100%',
//     position: 'relative',
//     padding: "20px 10px",
//     width: "1400px",
//     borderStyle: 'solid',
//     borderColor: 'grey'
//   },
//   secondcard: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '10px',
//     height: '100%',
//     position: 'relative',
//     padding: "20px 10px",
//     width: "1400px",
//     borderStyle: 'solid',
//     borderColor: 'grey'
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   },
// }));




/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();

  return {
    addpostarea: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 100px;
      width: 50%;
      align-items: center;
    `,
    addpost: css`
      padding: 40px 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    card: css`
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      height: 100%;
      position: relative;
      padding: 20px 10px;
      width: 1400px;
      border-style: solid;
      border-color: grey;
    `,
    secondcard: css`
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      height: 100%;
      position: relative;
      padding: 20px 10px;
      width: 1400px;
      border-style: solid;
      border-color: grey;
    `,
    details: css`
      display: flex;
      justify-content: space-between;
      margin: 20px;
    `,
    cardAction: css`
      display: block;
      text-align: initial;
    `,
  };
};

export default useStyles;