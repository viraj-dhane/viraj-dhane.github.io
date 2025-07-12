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
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
  },  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
  },  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
  },  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
  },  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
  },  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    tags: ["HTML", "CSS"],
    github: "https://github.com/viraj-dhane/viraj-dhane.github.io",
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
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
      <Box sx={{ pt: { xs: 6, md: 4 }, pb: 2 }}>
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
              mb: 2,
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
            gap: 4,
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
