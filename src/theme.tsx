// Central theme file for the entire app
// Theme Properties
// --Color
// --Typography
// --Shape
// --Spacing
// --Breakpoints
// --Z-index

const theme = {
  color: {
    primary: { main: "#0078AE", light: "#449DD1", dark: "#150578" },
    secondary: { main: "#676DB2", light: "#8189DF", dark: "#565B94" },
    error: { main: "#D14C44", light: "#EB534A", dark: "#B94038" },
    warning: { main: "#EFCA08", light: "#F1D335", dark: "#DAB805" },
    success: { main: "#00A6A6", light: "#01BBBB", dark: "#009191" },
    background: "#2F3136",
    white: "#E5E5E5",
    text_primary: "#E5E5E5",
    text_secondary: "#362C2C",
    text_disabled: "#E5E5E588",
    transparent: { main: "#00000000" },
  },
  typography: {
    fonts: { primary: "Roboto" },
    root_size: "16px",
    size: {
      sm: "0.5rem",
      md: "0.8rem",
      lg: "1.3rem",
    },
  },
  shape: {
    border_radius: "16px",
    relative_border_radius: "1em",
  },
  spacing: {
    margin: {
      sm: "0.5rem",
      md: "0.8rem",
      lg: "1.3rem",
    },
    padding: {
      sm: "0.5rem",
      md: "0.8rem",
      lg: "1.3rem",
    },
    relative_margin: {
      sm: "0.5em",
      md: "0.8em",
      lg: "1.3em",
    },
    relative_padding: {
      sm: "0.5em",
      md: "0.8em",
      lg: "1.3em",
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
  z_index: {
    header: 99,
    drawer: 150,
    chatbar: 250,
    modal: 350,
  },
};

export default theme;
