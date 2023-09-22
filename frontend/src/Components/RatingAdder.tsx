//import { GridProps } from "../../node_modules/@chakra-ui/react/dist/index";
import * as React from "react";
import Box from "@mui/material/Button";
import Select from "@mui/material/Button";
import MenuItem from "@mui/material/Button";
import InputLabel from "@mui/material/Button";
import FormControl from "@mui/material/Button";

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

interface Props {
  foodName: string;
  location: string;
  rating: number;
}
const RatingAdder = ({ foodName, location, rating }: Props) => {
  return <h1>add</h1>;
};

export default RatingAdder;
