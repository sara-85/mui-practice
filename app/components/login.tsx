import { Box, Typography } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GoogleIcon from "@mui/icons-material/Google";

const login = () => {
  return (
    <>
      <Box
        bgcolor={"#FEEBEB"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box mb={4}>
          <EditCalendarIcon sx={{ fontSize: 260, color: "#717171" }} />
        </Box>
        <Typography color="#717171" mb={4}>
          まとめて　整理アプリ
        </Typography>
        <Box
          bgcolor={"white"}
          width={"30%"}
          height={"8vh"}
          borderRadius={100}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography mr={20} fontSize={19}>
            Googleでログイン
          </Typography>
          <Box>
            <GoogleIcon sx={{ fontSize: 32, color: "#717171", mt: 1, ml: 3 }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default login;
