import React from "react";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection/ProjectsSection";
import AssociationProfileSection from "./Section/AssociationProfileSection";
import Grid from "./Section/Grid";
import JoinUsSection from "./Section/JoinUsSection";
import Section from "./Section/Section";
import SectionWithImage from "./Section/SectionWithImage";

/**
 * utility function
 */
export function extractBlocs(arg: any) {
  const arrayOfBlocs = [];
  if (!Array.isArray(arg)) {
    arrayOfBlocs.push(arg);
  } else {
    arrayOfBlocs.push(...arg);
  }

  console.log(arrayOfBlocs);

  // we want to treat the carousel bloc specially
  const carouselBloc = arrayOfBlocs.find(
    (item) => item.typename === "Carousel"
  );
  const hero = arrayOfBlocs.find((item) => item.typename === "Hero");
  const restBlocs = arrayOfBlocs.filter(
    (item) => item.typename !== "Carousel" && item.typename !== "Hero"
  );

  return {
    carousel: carouselBloc,
    arrayOfBlocs: restBlocs,
    hero,
  };
}

interface Props {
  blocs: any[];
}

const BlockManager: React.FC<Props> = React.memo(({ blocs }) => {
  const arrayOfComponents = [];

  for (const bloc of blocs) {
    const { typename, id, ...props } = bloc;
    switch (typename) {
      case "Section":
        arrayOfComponents.push(<Section key={id} {...props} />);
        break;
      case "ProjectsContainer":
        arrayOfComponents.push(<ProjectSection key={id} {...props} />);
        break;
      case "Hero":
        arrayOfComponents.push(<Hero key={id} {...props} />);
        break;
      case "TeamSection":
        arrayOfComponents.push(
          <Grid type="TeamSection" key={id} data={{ ...props }} />
        );
        break;
      case "SponsorSection":
        arrayOfComponents.push(
          <Grid type="SponsorSection" key={id} data={{ ...props }} />
        );
        break;
      case "Grid":
        arrayOfComponents.push(
          <Grid type={props.type} key={id} data={{ ...props }} />
        );
        break;
      case "JoinUsSection":
        arrayOfComponents.push(<JoinUsSection key={id} {...props} />);
        break;
      case "SectionWithImage":
        arrayOfComponents.push(<SectionWithImage key={id} {...props} />);
        break;
      case "AssociationProfileSection":
        arrayOfComponents.push(
          <AssociationProfileSection key={id} details={{ ...props }} />
        );
        break;
      default:
        arrayOfComponents.push(<React.Fragment></React.Fragment>);
    }
  }

  return <React.Fragment>{arrayOfComponents}</React.Fragment>;
});

export default BlockManager;
