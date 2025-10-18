// src/pages/About.tsx
import { Container, Typography, Box, Grid, Stack, Chip } from "@mui/material";
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
        pb: 2,
        px: { xs: 4, sm: 3 }, // Increased mobile padding
        pt: { xs: 2, sm: 3 }, // Reduced top padding
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
            mb: 3, // Increased margin bottom
            textAlign: "left", // Ensure left alignment
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
                lineHeight: 1.6,
                mb: 2
              }}
            >
              Skilled in leading BI initiatives through agile workflows, stakeholder alignment, and cross-functional teamwork. Proficient in SQL, Python, R, Tableau, MS Power BI, Cloud Computing (AWS, Azure, GCP, Snowflake), Google Analytics, Project Management, and many more.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: "left",
                lineHeight: 1.6,
                mb: 2
              }}
            >
              I get excited about opportunities where I can leverage big data to discover insights and identify patterns that have a real human impact. My work includes conducting in-depth data analysis, designing powerful visualization dashboards that deliver actionable insights, building data pipelines, optimizing workflows, and driving business intelligence initiatives.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: "left",
                lineHeight: 1.6,
                mb: 2
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
              }}
            >
              Technical Skills
            </Typography>

            {Object.entries(skills).map(([category, items]) => (
              <Box
                key={category}
                sx={{
                  mb: 2,
                  p: 2,
                  borderLeft: "2px solid",
                  borderColor: (theme: Theme) => theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.09)",
                    transform: "translateX(10px)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: (theme: Theme) => theme.palette.text.primary,
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: "rgba(25, 118, 210, 0.7))",
                        color: (theme: Theme) => theme.palette.primary.main,
                        borderRadius: "16px",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default About;