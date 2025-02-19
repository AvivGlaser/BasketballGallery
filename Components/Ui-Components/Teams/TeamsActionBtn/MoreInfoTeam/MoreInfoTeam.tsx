import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { Info } from "@mui/icons-material";
export default function MoreInfoTeam() {
  const initalState: boolean = false;
  const [isMoreInfo, setMoreInfo] = useState(initalState);
  return (
    <div className="more-info">
      <Button
        variant="outlined"
        className="favorite-icon"
        size={"small"}
        onClick={() => setMoreInfo((prevState) => !prevState)}
        startIcon={<InfoIcon color={isMoreInfo ? "success" : "warning"} />}
      ></Button>
    </div>
  );
}
