// import { makeStyles } from '@mui/material/styles';
// const drawerWidth = 240;

// export default makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(2),
//   },
//   root: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   googleButton: {
//     marginBottom: theme.spacing(2),
//   },
// }));





/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const useStyles = () => {
  const theme = useTheme();
  return {
    paper: css`
      margin-top: ${theme.spacing(8)}px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${theme.spacing(2)}px;
    `,
    root: css`
      width: calc(100% - ${drawerWidth}px);
      margin-left: ${drawerWidth}px;
      & .MuiTextField-root {
        margin: ${theme.spacing(1)}px;
      }
    `,
    avatar: css`
      margin: ${theme.spacing(1)}px;
      background-color: ${theme.palette.secondary.main};
    `,
    form: css`
      width: 100%; // Fix IE 11 issue.
      margin-top: ${theme.spacing(3)}px;
    `,
    submit: css`
      margin: ${theme.spacing(3, 0, 2)}px;
    `,
    googleButton: css`
      margin-bottom: ${theme.spacing(2)}px;
    `,
  };
};

export default useStyles;
