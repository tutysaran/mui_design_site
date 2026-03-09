import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  placeholder = "Enter your email",
  value,
  onChange,
  width = "300px"
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="small"
      sx={{
        width: { xs: "100%", sm: width },
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
          backgroundColor: "#f8fafc",
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        )
      }}
    />
  );
};

export default SearchBar;