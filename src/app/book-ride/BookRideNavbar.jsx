"use client"
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { deepOrange } from "@mui/material/colors";
import { drawerList } from "./DrawerList";
function BookRideNavbar() {
    const [sidebarOpen,setSidebarOpen]=useState(false);
    const handleSidebarClose=()=>setSidebarOpen(false);
    const handleSidebarOpen=()=>setSidebarOpen(true);

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#120E43" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bipro Cab
          </Typography>

          {true ? (
            <Avatar
              className="cursor-pointer"
              // onclick={()=>router.push("/profile")}
              sx={{ bgcolor: deepOrange[500] }}
            >
              B
            </Avatar>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
}

export default BookRideNavbar;
