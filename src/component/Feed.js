import React from "react";
import { Box } from "@mui/material";

import Post from "./Post";
import PostTwo from "./PostTwo";
import PostFour from "./PostFour";
import PostFive from "./PostFive";
import Footer from "./Footer";

function Feed() {
  return (
    <Box bgcolor="white" p={2}>
      <Box p={2}>
        <Post />
        <PostTwo />
        <PostFour />
        <PostFive />
      </Box>
      <Footer />
    </Box>
  );
}

export default Feed;
