import React from "react";
import { Tooltip } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import defaultImg from "../../../../Assets/Images/defaultBasketballImage.avif";
import {
  IAPITeams,
  ICreateTeam,
  IObJTeams,
} from "../../../../Helpers/Interfaces";
import "./CreateTeam.css";
import TeamsActionBtn from "../TeamsActionBtn/TeamsActionBtn";

export default function CreateTeam(props: ICreateTeam) {
  let { teams, teamType } = props;
  if (!Array.isArray(teams)) return null;
  return (
    <div className="projcard-container">
      {teamType === "localObject"
        ? (teams as IObJTeams[]).map((t) => {
            return (
              <div className="projcard " key={t.id}>
                <div className="projcard-innerbox">
                  <TeamsActionBtn />
                  <img
                    loading="lazy"
                    className="projcard-img"
                    src={t.img || defaultImg}
                    alt={t.alt || "Team logo image"}
                  />
                  <div className="projcard-textbox">
                    <div className="projcard-title">{t.name}</div>
                    <div className="projcard-subtitle">Arena: {t.arena}</div>
                    <div
                      className="projcard-bar"
                      style={{ backgroundColor: t.uniformColor }}
                    ></div>
                    <div className="projcard-description">
                      {t.name} is a basketball team playing in{" "}
                      {teamType === "localObject" ? "Israel" : "the NBA"}
                    </div>
                    <div className="projcard-tagbox">
                      <span>
                        {t.isChampion && (
                          <Tooltip title="Won Championship!" placement="top">
                            <span
                              className="projcard-tag"
                              style={{ display: "inline-block !important" }}
                            >
                              <EmojiEventsIcon />
                            </span>
                          </Tooltip>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : (teams as IAPITeams[]).map((t) => {
            if (!t.city) return null;
            const APIteamImage: string = `https://loodibee.com/wp-content/uploads/nba-${t.city.toLowerCase()}-${t.name.toLowerCase()}-logo-300x300.png`;

            return (
              <div className="projcard " key={t.id}>
                <TeamsActionBtn />
                <div className="projcard-innerbox">
                  <img
                    loading="lazy"
                    className="projcard-img"
                    src={APIteamImage}
                    alt={`${t.name}  Logo `}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== defaultImg) {
                        target.src = defaultImg;
                      }
                    }}
                  />
                  <div className="projcard-textbox">
                    <div className="projcard-title">{t.name}</div>
                    <div className="projcard-subtitle">City: {t.city}</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">
                      {" "}
                      {t.name} is a basketball team playing in{" "}
                      {teamType === "localObject" ? "Israel" : " the NBA"}
                    </div>
                    <div className="projcard-tagbox">
                      <span className="projcard-tag">{t.conference}</span>
                      <span className="projcard-tag">{t.abbreviation}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
