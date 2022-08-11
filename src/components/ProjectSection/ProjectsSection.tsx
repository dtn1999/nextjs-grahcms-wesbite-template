import React from "react";
import cn from "classnames";
import { Project } from "src/types/common";
import { BaseProps } from "src/types/components";
import Container from "src/components/Container";
import HomeProjectCard from "src/components/projects/HomeProjectCard";

interface Props extends BaseProps {
  projects: Project[];
}

const ProjectsSection: React.FC<Props> = React.memo(
  ({ className, projects }) => {
    return (
      <Container
        className={cn(
          "w-full bg-background-light space-y-4 px-4 lg:px-[145px] mt-8 md:mt-20",
          className
        )}
      >
        {projects.map((project, index: number) => (
          <HomeProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
            delay={index * 0.1}
          />
        ))}
      </Container>
    );
  }
);

export default ProjectsSection;
