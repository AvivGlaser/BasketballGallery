import React from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import { Button, Tooltip } from "@mui/material";
import "./TeamsView.css"
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { ITeamView } from "../../../../Helpers/Interfaces";

export default function TeamsView(props: ITeamView) {
  return (
    <div className="team-view-container">
      <Tooltip title="Grid View">
        <Button
          onClick={() => {
            props.setViewMode("grid-view");
          }}
        >
          <GridOnIcon></GridOnIcon>
        </Button>
      </Tooltip>
      <Tooltip title="Card View">
        <Button
          onClick={() => {
            props.setViewMode("card-view");
          }}
        >
          <ViewCarouselIcon></ViewCarouselIcon>
        </Button>
      </Tooltip>
    </div>
  );
}
