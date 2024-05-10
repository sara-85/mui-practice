import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Typography
        fontSize={"100px"}
        color="red"
        bgcolor={"green"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // marginTop={"100px"}  省略するかどうかは一貫性を大事に
        mt={"100px"}
        p={3}
        // ↑数字だけで書くと、これ×８が""で書いたのになる（padding）
      >
        Hello World!
      </Typography>
    </Box>
  );
};

export default page;
