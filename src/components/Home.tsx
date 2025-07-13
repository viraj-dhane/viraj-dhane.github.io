import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Code } from "@mui/icons-material";
import Download from "@mui/icons-material/Download";
import profileImg from "../assets/user.jpeg";
import { Theme } from "@mui/material/styles";

const Home = () => (
  <Box
    sx={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      background: (theme: Theme) => theme.palette.background.default,
      color: (theme: Theme) => theme.palette.text.primary,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background decoration */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        zIndex: 0,
        background: "#1976d2",
        backgroundSize: "20px 20px",
      }}
    />

    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 4, sm: 3 }, // 32px (4 * 8px) padding for mobile, 24px for larger screens
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            "& .MuiGrid-item": {
              paddingLeft: { xs: "32px", sm: "24px" },
              paddingRight: { xs: "32px", sm: "24px" },
            },
          }}
        >
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: (theme: Theme) => theme.palette.primary.main,
                  fontFamily: "'Fira Code', monospace",
                  mb: 2,
                }}
              >
                Hi, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
              >
                Viraj Dhane
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: "600px",
                  mb: 2,
                  color: (theme: Theme) => theme.palette.text.primary,
                }}
              >
                Data and Business Intelligence Analyst with 3+ years of experience in tech, consulting, and marketing. My goal is to bridge the gap between raw data and strategic decision-making.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                <Button
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Code />}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    borderColor: (theme: Theme) => theme.palette.primary.main,
                    color: (theme: Theme) => theme.palette.primary.main,
                    "&:hover": {
                      borderColor: (theme: Theme) =>
                        theme.palette.primary.light,
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                  href="https://resume_link"
                  target="_blank"
                >
                  Resume
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Stack direction="row" spacing={2}>
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
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                component="img"
                src={profileImg}
                alt="Viraj Dhane"
                sx={{
                  width: { xs: "200px", md: "270px" },
                  height: { xs: "200px", md: "270px" },
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid",
                  borderColor: (theme: Theme) => theme.palette.primary.main,
                  boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
                  mx: "auto",
                  display: "block",
                  filter: "grayscale(20%)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.02)",
                    boxShadow: "0 0 30px rgba(100, 255, 218, 0.4)",
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
);

export default Home;
