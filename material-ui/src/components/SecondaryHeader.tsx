import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SecondaryHeader = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Link 1" />
        <BottomNavigationAction label="Link 2" />
        <BottomNavigationAction label="Link 3" />
      </BottomNavigation>
    </Box>
  );
};

export default SecondaryHeader;
