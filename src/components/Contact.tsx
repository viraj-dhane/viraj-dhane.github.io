import {
  Container,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 6, md: 4 }, pb: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: (theme: Theme) => theme.palette.primary.main,
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            Contact Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: "600px",
              mx: "auto",
              mb: 2,
              color: (theme: Theme) => theme.palette.text.secondary,
            }}
          >
            I'd love to explore how we can collaborate - let's connect.
          </Typography>
        </motion.div>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <IconButton
            href="https://github.com/viraj-dhane"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
              "&:hover": {
                color: (theme: Theme) => theme.palette.primary.main,
              },
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/virajdhane/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
              "&:hover": {
                color: (theme: Theme) => theme.palette.primary.main,
              },
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="mailto:virajdhane.work@gmail.com"
            sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
              "&:hover": {
                color: (theme: Theme) => theme.palette.primary.main,
              },
            }}
          >
            <Email />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;