import React from "react";
import { Box, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
const WhiteTextTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: "Roboto",
  fontWeight: 700,
  textDecoration: "none",
  color: theme.palette.primary.main,
}));
function Post() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
    >
      <WhiteTextTypography
        variant="h4"
        display="flex"
        justifyContent="center"
        sx={{
          marginBottom: theme.spacing(3),
          fontSize: { xs: 17, sm: 25, md: 33 },
          fontSize: { xs: 17, sm: 25, md: 33 },
        }}
      >
        Happiness Is Our Culture
      </WhiteTextTypography>

      <Typography
        display="flex"
        justifyContent="center"
        textAlign="center"
        sx={{
          marginBottom: theme.spacing(3),
          px: { xs: 0, md: theme.spacing(5) },
          mx: { xs: 0, md: theme.spacing(5) },
          fontSize: { xs: 12, md: 16 },
        }}
      >
        The productivity and prosperity of an organisation is the reflection of
        the happiness and contentment of its employees. We believe that is what
        builds a family and the nation too. Happy employees are not just an
        asset to the organisation, but the love, contentment and enthusiasm they
        display build the whole world.So it is our prime responsibility to give
        a conducive, happy work culture for our employees, a climate which gives
        them opportunities for self growth and skill development.
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            marginBottom: theme.spacing(3),
            width: { xs: 200, sm: 400, md: 600, lg: 800, xl: 900 },
          }}
          component="img"
          src="/images/mars-sector-6-7d4LREDSPyQ-unsplash.png"
        ></Typography>
      </Box>
    </Container>
  );
}

export default Post;
