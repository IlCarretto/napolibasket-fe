import * as React from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DiscountIcon from "@mui/icons-material/Discount";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import { useAuthDispatch } from "@/app/context/AuthContext";
import { Divider, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

interface IMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export default function Menu({ anchorEl, open, handleClose }: IMenuProps) {
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    handleClose();
  };

  return (
    <MuiMenu
      sx={{
        "& .MuiList-root": {
          "& .MuiMenuItem-root": {
            "& span": {
              color: "#000",
              fontSize: 14,
            },
            "& .MuiListItemIcon-root": {
              justifyContent: "flex-end",
              "& svg": {
                color: "#000",
              },
            },
          },
        },
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemText>Area personale</ListItemText>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemText>I miei biglietti</ListItemText>
        <ListItemIcon>
          <BookOnlineIcon fontSize="small" />
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemText>Vouchers</ListItemText>
        <ListItemIcon>
          <DiscountIcon fontSize="small" />
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemText>Impostazioni</ListItemText>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemText>Privacy e autorizzazioni</ListItemText>
        <ListItemIcon>
          <SecurityIcon fontSize="small" />
        </ListItemIcon>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemText>
          <Typography variant="body2" className="!text-pink-500">
            Esci
          </Typography>
        </ListItemText>
        <ListItemIcon>
          <LogoutIcon fontSize="small" className="!text-pink-500" />
        </ListItemIcon>
      </MenuItem>
    </MuiMenu>
  );
}
