// src/pages/About.tsx
import { Container, Typography, Box, Grid, Stack, Chip } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { motion } from "framer-motion";

const skills = {
  "Languages": ["Python", "SQL", "R", "Java", "C++", "HTML", "CSS"],
  "Database": ["Snowflake", "SQL Server", "MySQL", "PostgreSQL", "NoSQL", "MongoDB", "AWS DynamoDB", "Oracle"],
  "Data Management": ["Express", "Python"],
  "Data Visualization and Business Intelligence": ["Tableau", "Power BI", "Creating Charts & Graphs", "Looker Google Studio", "Excel (Macros, VBA, VLOOKUPs, PivotTables)", "Data Mining", "Reporting & Dashboards", "Statistical Analysis", "Regression"],
  "Cloud Computing": ["AWS (EC2, DynamoDB, S3, Redshift, Lambda, Athena)", " GCP (BigQuery)", "Snowflake", "Azure"],
  "Other Skills": [ "CI/CD", "DBT", "Airflow", "Pandas", "NumPy", "Matplotlib", "PyTorch", "PySpark", "TensorFlow", "Scikit-learn", "SciPy", "Databricks", "Google Analytics", "GenAI", "Robotic Process Automation (RPA)"],
  "Social Listening Tools": ["Meltwater", "Displayr", "MuckRack", "Talkwalker", "Puls"]
};

const About = () => (
  <Container>
    <Box
      sx={{
        pb: 2,
        px: { xs: 2, sm: 3 }, // Add horizontal padding
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
            mb: 2,
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
            <Typography variant="body1" paragraph>
              Skilled in leading BI initiatives through agile workflows, stakeholder alignment, and cross-functional teamwork. Proficient in SQL, Python, R, Tableau, MS Power BI, Cloud Computing (AWS, Azure, GCP, Snowflake), Google Analytics, Project Management, and many more.
            </Typography>
            <Typography variant="body1" paragraph>
              I get excited about opportunities where I can leverage big data to discover insights and identify patterns that have a real human impact. My work includes conducting in-depth data analysis, designing powerful visualization dashboards that deliver actionable insights, building data pipelines, optimizing workflows, and driving business intelligence initiatives.
            </Typography>
            <Typography variant="body1" paragraph>
              I love connecting with new people. Let’s connect and explore how we can work together!
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
