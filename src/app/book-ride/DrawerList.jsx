import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox'
import React from "react";

export const drawerList = (anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    role="presentation"
  >
    <List>
      {["Book Your Ride", "Rate Card", "Support"].map((text,index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary={"Your Ride"} />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
