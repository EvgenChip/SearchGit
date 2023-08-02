import { FC, ChangeEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";

type Properties = {
  handleChange: (event: ChangeEvent<any>) => void;
  search: string;
};
export const Search: FC<Properties> = ({ handleChange, search }) => (
  <Paper
    component="form"
    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 390 }}
  >
    <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
    <SearchIcon />
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Поиск..."
      inputProps={{ "aria-label": "Поиск" }}
      value={search}
      onChange={handleChange}
    />
  </Paper>
);
