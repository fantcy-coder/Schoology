/** 
 import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme)=>({
    root:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    }
})) 
*/
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const drawerWidth = 240;

const useStyles = {
  root: css`
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  `,
};

export default useStyles;
