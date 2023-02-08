import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const data = [
  "Listen to them. We give opportunities for them to express their views- personal and official.",
  "Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.",
  "Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.",
  "The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.",
  "Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.",
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PostTwo() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
    >
      <Box sx={{ flexGrow: 1, my: theme.spacing(5) }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item sx={{ boxShadow: "0px 0px 0px" }}>
              <Typography
                sx={{
                  marginBottom: theme.spacing(3),
                  width: { xs: 200, sm: 400, md: 600, lg: 800, xl: 900 },
                }}
                component="img"
                src="/images/Group.png"
              ></Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Item
              sx={{
                boxShadow: "0px 0px 0px",
                padding: { sx: 0, md: "0px 90px" },
              }}
            >
              <Typography
                variant="h5"
                sx={{ my: theme.spacing(3), color: theme.palette.common.black }}
              >
                What Do We Do To Make Our Employees Stay Happy And Satisfied ?
              </Typography>
              {data.map((value, index) => (
                <Box key={index} display="flex" sx={{ mt: theme.spacing(3) }}>
                  <CheckCircleIcon sx={{ color: "#29d089" }} />
                  <Typography
                    component="h5"
                    sx={{
                      ml: 4,
                      textAlign: "justify",
                      color: theme.palette.common.black,
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              ))}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
