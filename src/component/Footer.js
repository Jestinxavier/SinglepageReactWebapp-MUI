import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import SearchBox from "./Element/SearchBox";

const Data = [
  {
    heading: "QUICK LINKS",
    subheading: [
      "Gift Card",
      "Lookbook 2021",
      " Privacy Policy",
      "Shipping & Refund",
    ],
  },
  {
    heading: "COMPANY",
    subheading: ["About Us", "Contact Us", "Pricing Plan", "Knowledge Base"],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.common.white,
  backgroundColor: "#242424",
  boxShadow: "0px 0px 0px",
}));
const WhiteTextTypography = styled(Typography)(({ theme }) => ({
  height: 30,
}));
const CopyWriteTextTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: 55,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
}));
const WhiteTextBox = styled(Box)(({ theme }) => ({
  height: 30,
  borderRadius: 100,
  width: 30,
  padding: 10,
  border: "1px solid #fff",
  margin: 8,
}));
function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#242424",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
      >
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
              borderBottom: "1px solid #fff",
            },
          }}
          justifyContent="space-between"
          alignItems="center"
          spacing={12}
        >
          <Item>
            <Box>
              <Typography
                component="img"
                sx={{ my: 5, width: 60 }}
                src="/images/van.png"
              />
              <Typography sx={{ mt: 2 }}>Fast delivery in 3-5 Days</Typography>
            </Box>
          </Item>
          {Data.map((value, index) => (
            <Item key={index}>
              <Box>
                <Typography
                  sx={{ mt: 2, mb: 4, fontSize: 20, fontWeight: 500 }}
                >
                  {value.heading}
                </Typography>
              </Box>
              {value.subheading.map((content, index) => (
                <Item sx={{ mx: 4 }} key={index}>
                  {content}
                </Item>
              ))}
            </Item>
          ))}
          <Item>
            <Box>
              <Typography sx={{ mt: 2 }}>Fast delivery in 3-5 Days</Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                Sign up & get all our latest updates and special offers
              </Typography>
              <SearchBox />
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <WhiteTextBox>
                  <WhiteTextTypography
                    src="/images/icon/fb.svg"
                    component="img"
                  />
                </WhiteTextBox>
                <WhiteTextBox>
                  <WhiteTextTypography
                    src="/images/icon/linkedin.svg"
                    component="img"
                  />
                </WhiteTextBox>
                <WhiteTextBox>
                  <WhiteTextTypography
                    src="/images/icon/twitter.svg"
                    component="img"
                  />
                </WhiteTextBox>
                <WhiteTextBox>
                  <WhiteTextTypography
                    src="/images/icon/youtube2.svg"
                    component="img"
                  />
                </WhiteTextBox>
              </Box>
            </Box>
          </Item>
        </Stack>
        <CopyWriteTextTypography>
          © 2021 Alba. All Rights Reserved.
        </CopyWriteTextTypography>
      </Container>
    </Box>
  );
}

export default Footer;
