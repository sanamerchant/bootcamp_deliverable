//import { GridProps } from "../../node_modules/@chakra-ui/react/dist/index";
import * as React from "react";
import Box from "@mui/material/Button";

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

interface Props {
  foodName: string;
  rating: number;
}

const Card = ({ foodName, rating }: Props) => {
  return (
    <Box
      sx={{
        border: 1,
        display: "inline",
        color: "secondary.dark",
        width: "20%",
        height: "200px",
        margin: "20px",
        "&:hover": {
          backgroundColor: "secondary.main",
          opacity: [0.7, 0.6, 0.5],
          color: "white",
        },
      }}
    >
      <h3>{foodName}</h3>
    </Box>
  );
};

export default Card;
