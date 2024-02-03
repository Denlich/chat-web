import { Stack } from "@mui/material";
import ChatList from "./components/chat-list";
import Header from "./components/header";
import * as styles from "./SideBar.styles";

const SideBar = () => {
  return (
    <Stack sx={styles.rootStack}>
      <Header />
      <ChatList />
    </Stack>
  );
};

export default SideBar;
