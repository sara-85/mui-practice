import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Typography
        fontSize={{ sm: "10", md: "100" }}
        color={{ sm: "red", md: "blue" }}
        bgcolor={"green"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // marginTop={"100px"}  省略するかどうかは一貫性を大事に
        mt={"100px"}
        p={3}
        // ↑数字だけで書くと、これ×８が""で書いたのになる（padding）
        // 水色のがprops ライトグリーンのはcomponentsかタグって呼ばれてる
      >
        Hello World!
      </Typography>
    </Box>
  );
};

export default page;
