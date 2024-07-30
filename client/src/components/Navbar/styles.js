// import { makeStyles } from '@mui/material/styles';
// import { deepPurple } from '@mui/material/colors';

// const drawerWidth = 240;

// export default makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 5,
//     margin: '0 0 30px 0',
//     background: "#0094de",
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: "1px 15px"
//   },
//   navBrand:{
//     display:"flex",
//     justifyContent:"space-between"
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   hide:{
//     visibility:'hidden'
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//     textDecoration: 'none',
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     width: '400px',
//   },
//   profile: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '400px',
//   },
//   userName: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   aboutMe:{
//     color: "#cfcfcf",
//   },
//   brandContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   purple: {
//     color: theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor: deepPurple[500],
//   },
//   Header:{
//     marginTop:"6px",
//     marginLeft:"15px"
//   },
//   paperWidth:{
//     width:drawerWidth,
//     background: "#0094de",
//     color:"white",
//     fontSize:"1.3rem",
//     fontFamily:"Lato"
//   },
//   root:{
//     display:"flex",
//     color:"white"
//   },
//   widthChanger:{
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
// }));





/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { deepPurple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const useStyles = () => {
  const theme = useTheme();

  return {
    appBar: css`
      border-radius: 5px;
      margin: 0 0 30px 0;
      background: #0094de;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1px 15px;
    `,
    navBrand: css`
      display: flex;
      justify-content: space-between;
    `,
    drawerHeader: css`
      display: flex;
      align-items: center;
      padding: ${theme.spacing(0, 1)};
      ${theme.mixins.toolbar};
      justify-content: flex-end;
    `,
    hide: css`
      visibility: hidden;
    `,
    heading: css`
      color: rgba(0, 183, 255, 1);
      text-decoration: none;
    `,
    image: css`
      margin-left: 15px;
    `,
    toolbar: css`
      display: flex;
      justify-content: flex-end;
      width: 400px;
    `,
    profile: css`
      display: flex;
      justify-content: space-between;
      width: 400px;
    `,
    userName: css`
      display: flex;
      align-items: center;
    `,
    aboutMe: css`
      color: #cfcfcf;
    `,
    brandContainer: css`
      display: flex;
      align-items: center;
    `,
    purple: css`
      color: ${theme.palette.getContrastText(deepPurple[500])};
      background-color: deepPurple[500];
    `,
    header: css`
      margin-top: 6px;
      margin-left: 15px;
    `,
    paperWidth: css`
      width: ${drawerWidth}px;
      background: #0094de;
      color: white;
      font-size: 1.3rem;
      font-family: Lato;
    `,
    root: css`
      display: flex;
      color: white;
    `,
    widthChanger: css`
      width: calc(100% - ${drawerWidth}px);
      margin-left: ${drawerWidth}px;
    `,
  };
};

export default useStyles;
