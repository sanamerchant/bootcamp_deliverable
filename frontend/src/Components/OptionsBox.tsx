import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

interface Props {
  food1: string;
  food2: string;
  food3: string;
  dataItemId: string; // Add a prop for the data item ID
}

const OptionsBox = ({ food1, food2, food3, dataItemId }: Props) => {
  return (
    <div
      style={{ background: "#d1f0ff", padding: "30px", marginBottom: "10px" }}
    >
      <h2 align-items="top" style={{ color: "#670a91" }}>
        Enter a new rating
      </h2>
      <div>
        <Select
          sx={{
            width: "20%",
            marginBottom: "15px",
          }}
        >
          <MenuItem value={1}>{food1}</MenuItem>
          <MenuItem value={2}>{food2}</MenuItem>
          <MenuItem value={3}>{food3}</MenuItem>
        </Select>
      </div>
      <div>
        <Box>
          <Button
            sx={{
              marginTop: "20px",
              border: 1,
              display: "inline",
              alignContent: "top",
              color: "white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            1
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              border: 1,
              display: "inline",
              alignContent: "top",
              color: "white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            2
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              border: 1,
              display: "inline",
              alignContent: "top",
              color: "white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            3
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              border: 1,
              display: "inline",
              alignContent: "top",
              color: "white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            4
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              border: 1,
              display: "inline",
              alignContent: "top",
              color: "white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            5
          </Button>
        </Box>
      </div>
      <h4>Thank you for your rating!</h4>
    </div>
  );
};

export default OptionsBox;
