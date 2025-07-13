// src/theme/theme.ts
import { createTheme, PaletteMode } from "@mui/material/styles";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#1976d2" : "#90caf9", // standard MUI blue
    },
    secondary: {
      main: mode === "light" ? "#9c27b0" : "#ce93d8", // standard MUI purple
    },
    background: {
      default: mode === "light" ? "#fdfdfd" : "#121212",
      paper: mode === "light" ? "#ffffff" : "#1e1e1e",
    },
    text: {
      primary: mode === "light" ? "#212121" : "#ffffff",
      secondary: mode === "light" ? "#5f6368" : "#cfcfcf",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === "light" ? "0 2px 8px rgba(0,0,0,0.05)" : "0 2px 8px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === "light" ? "#fdfdfd" : "#121212",
        },
      },
    },
  },
});

export const createAppTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
