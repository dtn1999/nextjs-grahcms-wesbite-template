import { default as Title } from "./containers/blocs/Section/Title";
import { default as Grid } from "./containers/Grid";
import { default as Text } from "./Text";
import { default as MdText } from "./common/MdText";
import { default as RichTextWrapper } from "./common/RichText";
import { ContainerComponent } from "./common/Container";

import React from "react";
import {
  ContainercomponentsUnion,
  ContainerModels,
} from "src/types/graphql";
import PersonCard from "./common/Cards/PersonCard";
import SponsorCard from "./common/Cards/SponsorCard";
import { EventCard } from "./common/Cards/EventCard";
import ServiceCard from "./services/ServiceCard";

type ComponentsType = Exclude<
  Pick<ContainercomponentsUnion, "__typename">["__typename"],
  undefined
>;

type ModelsType = Exclude<
  Pick<ContainerModels, "__typename">["__typename"],
  undefined
>;

export type ContainerComponentType = ModelsType | ComponentsType | "RichText";

interface Props {
  typename: any;
  data: any;
}
export const ComponentSwitch: React.FC<Props> = React.memo(
  ({ typename, data }) => {
    console.log("typename is ", typename, data);
    const { id } = data;
    switch (typename) {
      case "Button":
        return <React.Fragment />;
      case "Card":
        return <React.Fragment />;
      case "Container":
        return <ContainerComponent key={id} {...data} />;
      case "Form":
        return <React.Fragment />;
      case "FormCheckbox":
        return <React.Fragment />;
      case "FormInput":
        return <React.Fragment />;
      case "FormRadio":
        return <React.Fragment />;
      case "FormTextarea":
        return <React.Fragment />;
      case "FromSelect":
        return <React.Fragment />;
      case "Grid":
        return <Grid key={id} {...data} />;
      case "Link":
        return <React.Fragment />;
      case "MdText":
        return <MdText key={id} {...data} />;
      case "RichTextWrapper":
      case "RichText":
        return <RichTextWrapper key={id} {...data} />;
      case "Text":
        return <Text key={id} {...data} />;
      case "Title":
        return <Title key={id} {...data} />;
      case "Person":
        return <PersonCard key={id} {...data} />;
      case "Sponsor":
        return <SponsorCard key={id} {...data} />;
      case "Event":
        return <EventCard key={id} {...data} />;
      case "Service":
        return <ServiceCard key={id} {...data} />;
      default:
        return <React.Fragment />;
    }
  }
);

export default ComponentSwitch;
