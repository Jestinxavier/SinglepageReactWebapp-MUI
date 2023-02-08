import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from '@emotion/styled';
import { useTheme } from "@mui/material/styles";
export default function DropDown({Data}) {
  const [anchorElDropDown, setAnchorElDropDown] = React.useState(null);
  const open = Boolean(anchorElDropDown);
  const theme = useTheme()
  const handleClickDropDown = (event) => {
    setAnchorElDropDown(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorElDropDown(null);
  };
   return (<>
   { Data?.heading?<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickDropDown}
        sx={{color: theme.palette.common.black,}}
      >
        {Data?.heading} <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElDropDown}
        open={open}
        onClose={handleCloseDropDown}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       { Data.subHeading?.map((data,index)=><MenuItem key={index} onClick={handleCloseDropDown}>{data}</MenuItem>)}
      </Menu>
    </div>:""}
    </>
  );
}