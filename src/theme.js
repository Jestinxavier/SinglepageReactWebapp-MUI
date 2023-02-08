import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#940D1B",
      light: "#fff",
      dark: "#1565c0",
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});
