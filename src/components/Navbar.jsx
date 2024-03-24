import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import { Mail } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({}));

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Nama Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Avatar src="https://images.pexels.com/photos/20508966/pexels-photo-20508966/free-photo-of-man-sitting-in-eyeglasses-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
