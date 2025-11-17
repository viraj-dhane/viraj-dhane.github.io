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
      minHeight: "60vh", // Reduced from 80vh to 60vh
      display: "flex",
      alignItems: "center",
      background: (theme: Theme) => theme.palette.background.default,
      color: (theme: Theme) => theme.palette.text.primary,
      position: "relative",
      overflow: "hidden",
      pt: { xs: 4, sm: 3, md: 2 }, // Reduced padding
      pb: { xs: 2, sm: 2, md: 1 }, // Reduced padding
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
        px: { xs: 2, sm: 2, md: 3 }, // Reduced padding
        py: { xs: 1, sm: 1, md: 0 }, // Reduced vertical padding
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }} // Reduced spacing
          alignItems="center"
          sx={{
            "& .MuiGrid-item": {
              paddingLeft: { xs: "8px", sm: "12px", md: "16px" }, // Reduced padding
              paddingRight: { xs: "8px", sm: "12px", md: "16px" }, // Reduced padding
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
                sx={{ 
                  fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" }, // Reduced font sizes
                  mt: { xs: 0, sm: 0 }, // Removed top margin
                  mb: { xs: 1, sm: 1, md: 0 }, // Reduced bottom margin
                }}
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
                  textAlign: "left", // Ensure left alignment
                  lineHeight: 1.6,
                }}
              >
                <strong>Data and Business Intelligence Analyst</strong> with 4 years of experience in consulting, marketing, tech, and operations. My goal is to bridge the gap between raw data and strategic decision-making.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}> {/* Reduced spacing and margin */}
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
                  href="https://drive.google.com/file/d/1RV7pwV_F3p0_iihmLy3CGv-WFNicFaA2/view?usp=sharing"
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
                  width: { xs: "150px", md: "200px" }, // Reduced image size
                  height: { xs: "150px", md: "200px" }, // Reduced image size
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
