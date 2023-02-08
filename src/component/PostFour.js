import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const data = [
  "Our mission is to put in effort wholeheartedly to:",
  "Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.",
  "Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.",
  "Share part of the profit to ensure the welfare of the employees, society & the environment.",
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ImageBox = styled(Typography)(({ theme }) => ({
  width: 350,
  height: 300,
  objectFit: "contain",
  backgroundRepeat: "no-repeat",
}));

export default function PostFour() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
    >
      <Stack
        sx={{ flexDirection: { sm: "column", md: "row" } }}
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={12}
      >
        <Item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 0px 0px",
          }}
        >
          <ImageBox
            sx={{
              marginBottom: theme.spacing(3),
              width: { xs: 200, sm: 400, md: 600, lg: 800, xl: 900 },
              backgroundImage: "url('/images/block.png')",
              backgroundSize: { xs: "cover", sm: "contain" },
              backgroundRepeat: "no-repeat",
              width: { xs: 300, sm: 520 },
              display: "flex",
              backgroundPositionX: "center",
              height: 300,
              flexDirection: "column",
              justifyContent: "center",
            }}
            component="div"
          >
            <Box
              sx={{
                padding: " 0px 50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: 23,
                  color: theme.palette.background.default,
                  mb: theme.spacing(3),
                }}
              >
                Our Vision
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  textAlign: "justify",
                  color: theme.palette.background.default,
                  fontSize: 14,
                }}
              >
                Our vision is to provide prime value to customers by delivering
                supreme quality undergarments in the global market with the
                intent to touch the lives of our employees, immediate society
                and the world community with the understanding -‘we exist
                because they exist’.
              </Typography>
            </Box>
          </ImageBox>
          <ImageBox
            sx={{
              width: 520,
              backgroundImage:
                "url('/images/andrew-neel-cckf4TsHAuw-unsplash.png')",
              marginBottom: theme.spacing(3),
              width: { xs: 300, sm: 520 },
            }}
            component="div"
          ></ImageBox>
        </Item>
        <Item sx={{ boxShadow: "0px 0px 0px" }}>
          <ImageBox
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundImage: "url('/images/Article.png')",
              marginBottom: theme.spacing(3),
              width: 400,
              height: 500,
            }}
            component="div"
          >
            <Box
              sx={{
                padding: " 0px 50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignContent: "center",
                justifyContent: "center",
                mt: 10,
              }}
            >
              <Typography
                component="h3"
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: 23,
                  color: theme.palette.background.default,
                  mb: theme.spacing(3),
                }}
              >
                Our Vision
              </Typography>
              {data.map((value, index) => (
                <Box>
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      textAlign: "justify",
                      color: theme.palette.background.default,
                      fontSize: 14,
                    }}
                  >
                    {value}
                  </Typography>
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      background: theme.palette.background.default,
                      borderRadius: 204,
                      position: "relative",
                      top: -38,
                      right: 14,
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
          </ImageBox>
        </Item>
      </Stack>
    </Container>
  );
}
