import { Typography } from "@material-ui/core";
import { SToolbar } from "./styles";

export const Header = () => (
  <SToolbar variant="dense" color="blue">
    <Typography variant="h6" component="div">
      Search for SkyEng by Nechiporenko
    </Typography>
  </SToolbar>
);
