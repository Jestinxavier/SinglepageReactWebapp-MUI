import TopNavbar from "./component/TopNavbar";
import Navigationbar from "./component/Navigationbar";
import Feed from "./component/Feed";
import { Stack, Box, Container } from "@mui/material";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Box>
        <TopNavbar />
        <Navigationbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Feed />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
