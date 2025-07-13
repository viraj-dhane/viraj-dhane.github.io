import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{ mt: 10, py: 4, textAlign: "center", backgroundColor: "#1e1e1e" }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mb: 1 }}
        >
          <IconButton
            component="a"
            href="https://github.com/viraj-dhane"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/virajdhane/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:virajdhane.work@gmail.com"
            color="inherit"
          >
            <Email />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Viraj Dhane. Built with React +
          Material UI.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
