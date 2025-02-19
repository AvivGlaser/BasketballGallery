import React, { useEffect } from "react";
import { ITeams } from "../../../Helpers/Interfaces";
import "./TeamsPage.css";
import TeamsView from "../../Ui-Components/Teams/TeamsView/TeamsView";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchComponent from "../../Ui-Components/SearchComponent/Search";
import CreateTeam from "../../Ui-Components/Teams/CreateTeam/CreateTeam";
import { GetTeams } from "../../Ui-Components/Teams/GetTeams/GetTeams";
import Loader from "../../Ui-Components/Loader/Loader";
import PopUpModal from "../../Ui-Components/PopUpModal/PopUpModal";
import teamsDataLocalObject from "./TeamsData";

export default function TeamsPage() {
  const initialViewState: string = "grid-view";
  const [viewMode, setViewMode] = useState(initialViewState);
  const { data, error, isLoading } = GetTeams();

  const globalState: Array<ITeams> = useSelector(
    (state: any) => state?.updateArray?.dataArray
  );
  
  const [localTeamData, setLocalTeamData] = useState(globalState || []);
  console.log(localTeamData);
  if (isLoading) return <Loader />;

  return (
    <div className="teams-page">
      <TeamsView viewMode={viewMode} setViewMode={setViewMode} />
      <div className={`teams-wrapper ${viewMode}`}>
        <SearchComponent
          localData={localTeamData}
          localSetter={setLocalTeamData}
          backupState={globalState}
        />
        {error instanceof Error && (
          <PopUpModal
            header={error.name}
            description={error.message}
            btnText={"Back"}
            btnColor={"error"}
          />
        )}
        <CreateTeam teams={localTeamData} teamType="localObject" />
        <CreateTeam teams={data || []} teamType="APIObject" />
      </div>
    </div>
  );
}
