import { FC } from "react";
import { Temp1 } from "./commonType";
import { Box } from "@mui/material";

const Template1: FC<Temp1> = ({ image_url }) => {
  return (
    <Box
      sx={{
        background: `url(${image_url})`,
        height: "calc(90vh -  30px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "",
      }}
    ></Box>
  );
};

export default Template1;
