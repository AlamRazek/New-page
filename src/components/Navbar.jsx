import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";

const styledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Nama Dev
        </Typography>
        <Pets />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
