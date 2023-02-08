import React from "react";
import { Typography } from "@mui/material";

import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
const Datas = [
  {
    heading: "History",
    subheading: [
      "Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.",
      "By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.",
      "ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.",
    ],
  },
  {
    heading: "Why The Brand Name Alba?",
    subheading: [
      "Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.",
    ],
  },
  {
    heading: "Why The Brand Name Alba?",
    subheading: [
      "Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.",
    ],
  },
];
const WhiteTextTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: "Roboto",
  fontWeight: 700,
  textDecoration: "none",
  color: theme.palette.common.black,
}));
function PostFive() {
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
        }}
      >
        Corporate Info
      </WhiteTextTypography>

      {Datas?.map((value, index) => (
        <>
          <Typography
            component="h3"
            sx={{ fontSize: 18, my: 3, mt: 5, fontWeight: "bold" }}
            variant="h3"
            key={index}
          >
            {value.heading}
          </Typography>
          {value.subheading?.map((data, index) => (
            <Typography
              key={index}
              display="flex"
              justifyContent="center"
              textAlign="center"
              sx={{
                fontSize: { xs: 12, md: 14 },
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              {data}
            </Typography>
          ))}
        </>
      ))}

      <Typography
        component="img"
        sx={{ my: 5 }}
        src="/images/meetinghall.png"
      ></Typography>
    </Container>
  );
}

export default PostFive;
