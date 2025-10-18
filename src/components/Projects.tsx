import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { GitHub } from "@mui/icons-material";
import NavLinks from "./NavLinks";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image?: string;
}

const projects: Project[] = [
    {
    title: "Data Warehousing and Analytics",
    description:
      "This project demonstrates a comprehensive data warehousing and analytics solution. Developed a data warehouse using SQL Server to consolidate sales data and SQL-based analytics queries to deliver detailed insights into customer behavior, product performance, and sales trends.",
    tags: ["SQL", "MS SQL Server"],
    github: "https://github.com/viraj-dhane/sql-data-warehouse-project",
  },  {
    title: "Sales Dashboard",
    description:
      "This project involves building Tableau dashboards to help stakeholders analyze sales performance and customer behavior. Sales dashboard presents an overview of the sales metrics and trends. Customers dashboard provides insights into customer data, trends and behaviors.",
    tags: ["Tableau"],
    github: "https://public.tableau.com/app/profile/viraj.dhane/viz/Tableau_SalesDashboard_17214314296390/SalesDashboard",
  },  {
    title: "Marketing and Sales Data Analysis",
    description:
      "This project aims to develop test attribution models using SQL queries to understand customer touchpoints and identify the highest revenue-generating marketing and sales channels and segments.",
    tags: ["SQL", "MS SQL Server"],
    github: "https://github.com/viraj-dhane/sql-marketing-data-analysis",
  },  {
    title: "ETL Pipeline / End-to-End Data Pipeline",
    description:
      "This project involves implementing a ETL pipeline that integrates the Spotify API with AWS services. Used Python for data extraction and transformation; AWS Lambda for automated data processing and scheduling; AWS S3 for storage, Glue for data cataloging, and Athena for SQL-based analytics.",
    tags: ["Python", "AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena"],
    github: "https://github.com/viraj-dhane/spotify-end-to-end-data-pipeline",
  },  {
    title: "Crime Analysis",
    description:
      "Conducted an in-depth analysis of 231,000 crime incidents across seven datasets using Python. The project focused on trends by time, location, and crime type, with data cleaning, aggregation, and visualization to uncover insights for crime prevention and resource planning.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Math"],
    github: "https://github.com/viraj-dhane/python-crime-data-analysis",
  },  {
    title: "Customer Survey Data Analysis",
    description:
      "This project involves the analysis of survey data using Python to evaluate marketing effectiveness and service performance. Performed data cleaning, one-hot encoding, and visualizations to extract insights. Conducted comparative analysis and provided recommendations to improve campaign strategies and customer experience.",
    tags: ["Python", "MS Excel"],
    github: "https://github.com/viraj-dhane/marketing-survey-data-analysis",
  }
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: (theme) => theme.palette.background.paper,
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
        "&:hover": {
          borderColor: (theme) => theme.palette.primary.main,
          transform: "translateY(-4px)",
          transition: "all 0.3s ease-in-out",
        },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: 600,
            fontSize: "1.25rem",
            mb: 2,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, minHeight: "60px", lineHeight: 1.6 }}
        >
          {project.description}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: "rgba(25, 118, 210, 0.7))",
                color: (theme: Theme) => theme.palette.primary.main,
                borderRadius: "4px",
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", p: 2, pt: 0 }}>
        <IconButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            "&:hover": {
              color: (theme) => theme.palette.primary.main,
              transform: "scale(1.1)",
            },
            transition: "all 0.2s ease-in-out",
          }}
        >
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
);

const Projects = () => (
  <>
    <NavLinks />
    <Container maxWidth="lg" sx={{ px: { xs: 3, md: 3 } }}>
      <Box sx={{ pt: { xs: 1, md: 2 }, pb: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontWeight: 700,
              mb: 2, // Reduced margin bottom
              textAlign: "left", // Ensure left alignment
              fontSize: { xs: "1.8rem", sm: "2rem" }, // Reduced font size
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2, // Reduced gap from 4 to 2
            width: "100%",
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </Box>
      </Box>
    </Container>
  </>
);

export default Projects;