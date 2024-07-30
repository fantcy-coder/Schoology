// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useTranslation } from 'react-i18next';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });

// const LeaderBoard = () => {
//   const classes = useStyles();
//   const [leaderboard, setLeaderboard] = useState([]);
//   const {t,i18n} = useTranslation();
//   useEffect(() => {
//     const getLeaderboard = async () => {
//       const board = await axios.get("http://localhost:5000/leaderboard");

//       setLeaderboard(board.data);
//     };
//     getLeaderboard();
//   }, []);
//   return (
// <div>
//     <Typography variant="h3" color="primary">{t("Leaderboard")}</Typography>
//     <br/>
//             <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="simple table">  
//               <TableHead>
//                 <TableRow>
//                   <TableCell ><Typography variant="h5" color="primary"><strong>{t("Rank")}</strong></Typography></TableCell>
//                   <TableCell align="right"><Typography variant="h5" color="primary"><strong>{t("Name")}</strong></Typography></TableCell>
//                   <TableCell align="right"><Typography variant="h5" color="primary"><strong>{t("Score")}</strong></Typography></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {leaderboard
//               .sort((a, b) => (a.count < b.count ? 1 : -1))
//               .map((leaderboard, i) => (
//                 <TableRow key={leaderboard._id}>
//                   <TableCell
//                     className={classes.tableCell}
//                     component="th"
//                     scope="row"
//                   >
//                     <Typography variant="h6" color="primary">
//                       {i + 1}
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="right">
//                     <Typography variant="h6" color="primary">
//                      {leaderboard.name}
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="right">
//                     <Typography variant="h6" color="primary">
//                       {leaderboard.count}
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           </div> 
//         );
//       };

// export default LeaderBoard;




/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';

const tableStyles = css`
  min-width: 650px;
`;

const tableCellHeaderStyles = css`
  font-weight: bold;
  color: #3f51b5; /* primary color */
`;

const tableCellBodyStyles = css`
  color: #3f51b5; /* primary color */
`;

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getLeaderboard = async () => {
      const board = await axios.get("http://localhost:5000/leaderboard");
      setLeaderboard(board.data);
    };
    getLeaderboard();
  }, []);

  return (
    <div>
      <Typography variant="h3" color="primary">{t("Leaderboard")}</Typography>
      <br/>
      <TableContainer component={Paper}>
        <Table css={tableStyles} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography css={tableCellHeaderStyles} variant="h5">{t("Rank")}</Typography></TableCell>
              <TableCell align="right"><Typography css={tableCellHeaderStyles} variant="h5">{t("Name")}</Typography></TableCell>
              <TableCell align="right"><Typography css={tableCellHeaderStyles} variant="h5">{t("Score")}</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard
              .sort((a, b) => (a.count < b.count ? 1 : -1))
              .map((leaderboard, i) => (
                <TableRow key={leaderboard._id}>
                  <TableCell component="th" scope="row">
                    <Typography css={tableCellBodyStyles} variant="h6">
                      {i + 1}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography css={tableCellBodyStyles} variant="h6">
                      {leaderboard.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography css={tableCellBodyStyles} variant="h6">
                      {leaderboard.count}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaderBoard;