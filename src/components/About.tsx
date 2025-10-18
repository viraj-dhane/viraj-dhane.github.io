// src/pages/About.tsx
import { Container, Typography, Box, Grid } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { motion } from "framer-motion";

const skills = {
  "Languages": ["SQL", "Python", "R", "Java", "C++", "JavaScript", "HTML", "CSS"],
  "Database": ["Snowflake", "BigQuery", "SQL Server Management Studio (SSMS)", "MySQL", "PostgreSQL"],
  "Data Engineering & Management": ["ETL/ELT Pipelines", "Data Modeling", "Data Warehousing", "Data Integration", "Data Quality", "Data Governance", "Data Privacy", "API Integration", "Data Advocacy"],
  "Data Visualization & Business Intelligence": ["Tableau", "Tableau Prep Builder", "MS Power BI", "Excel (VLOOKUPs, PivotTables, Macros, VBA)"],
  "Cloud Computing": ["AWS", "GCP", "Snowflake", "Azure", "Databricks"],
  "Data Orchestration & DevOps": ["Azure DevOps", "Airflow", "CI/CD"],
  "Media Intelligence": ["Google Analytics", "Meltwater", "MuckRack"],
  "Other Skills": ["Pandas", "NumPy", "Matplotlib", "PyTorch", "PySpark", "TensorFlow", "Scikit-learn", "SciPy", "GenAI", "Statistical Analysis", "Descriptive Analytics", "Predictive Analytics", "Prescriptive Analytics", "Robotic Process Automation (RPA)"]
};

const About = () => (
  <Container maxWidth="lg">
    <Box
      sx={{
        pb: 1, // Reduced bottom padding
        px: { xs: 3, sm: 2 }, // Reduced padding
        pt: { xs: 1, sm: 2 }, // Further reduced top padding
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: (theme: Theme) => theme.palette.primary.main,
            fontWeight: 700,
            mb: 2, // Reduced margin bottom
            textAlign: "left", // Ensure left alignment
            fontSize: { xs: "1.8rem", sm: "2rem" }, // Reduced font size
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={1}
        sx={{
          mt: 0, // Remove top margin
        }}
      >
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: "left",
                lineHeight: 1.5, // Reduced line height
                mb: 1, // Reduced margin
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Reduced font size
              }}
            >
              Skilled in leading BI initiatives through agile workflows, stakeholder alignment, and cross-functional teamwork. Proficient in SQL, Python, R, Tableau, MS Power BI, Cloud Computing (AWS, Azure, GCP, Snowflake), Google Analytics, Project Management, and many more.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: "left",
                lineHeight: 1.5, // Reduced line height
                mb: 1, // Reduced margin
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Reduced font size
              }}
            >
              I get excited about opportunities where I can leverage big data to discover insights and identify patterns that have a real human impact. My work includes conducting in-depth data analysis, designing powerful visualization dashboards that deliver actionable insights, building data pipelines, optimizing workflows, and driving business intelligence initiatives.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: "left",
                lineHeight: 1.5, // Reduced line height
                mb: 1, // Reduced margin
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Reduced font size
              }}
            >
              I love connecting with new people. Let's connect and explore how we can work together!
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: (theme: Theme) => theme.palette.primary.main,
                mb: 2,
                fontSize: { xs: "1.1rem", sm: "1.2rem" }, // Smaller heading
              }}
            >
              Technical Skills
            </Typography>

            {/* Compact skills layout */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gap: 2,
                mb: 2,
              }}
            >
              {Object.entries(skills).map(([category, items]) => (
                <Box
                  key={category}
                  sx={{
                    p: 1.5, // Reduced padding
                    border: "1px solid",
                    borderColor: (theme: Theme) => theme.palette.primary.main,
                    borderRadius: 1,
                    backgroundColor: "rgba(25, 118, 210, 0.05)",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.1)",
                      transform: "translateY(-2px)",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "0.9rem", // Smaller category text
                    }}
                  >
                    {category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme: Theme) => theme.palette.text.secondary,
                      fontSize: "0.8rem", // Smaller skill text
                      lineHeight: 1.4,
                    }}
                  >
                    {items.slice(0, 4).join(" • ")} {/* Show only first 4 skills */}
                    {items.length > 4 && " • +" + (items.length - 4) + " more"}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default About;