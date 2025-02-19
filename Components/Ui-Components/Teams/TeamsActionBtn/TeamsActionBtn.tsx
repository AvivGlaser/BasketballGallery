import React from "react";
import FavoriteTeam from "./FavoriteTeam/FavoriteTeam";
import DeleteTeam from "./DeleteTeam/DeleteTeam";
import MoreInfoTeam from "./MoreInfoTeam/MoreInfoTeam";

export default function TeamsActionBtn() {
  return (
    <div className="teams-action-toolbar">
      <FavoriteTeam />
      {/* <DeleteTeam /> */}
      <MoreInfoTeam />
    </div>
  );
}
