//import { GridProps } from "../../node_modules/@chakra-ui/react/dist/index";
import * as React from "react";
import Box from "@mui/material/Button";
import Button from "@mui/material/Button";

interface Props {
  content: string;
  rating: number;
}

// function newRating() {
//   <Box>
//     new!
//   </Box>
// }

const Clicker = ({ content, rating }: Props) => {
  return (
    <Box style={{ justifyContent: "center", alignItems: "center" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert("clicked");
        }}
      >
        {content}
      </Button>
    </Box>
  );
};

export default Clicker;
