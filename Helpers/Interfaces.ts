import React, { ReactNode } from "react";

export interface IRoute {
  id: string;
  path: string;
  element: React.ElementType;
  linkText: string;
  invisible?: boolean;
}

export interface ICareerTimeline {
  id: string;
  img: string;
  alt: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  timelineTitle: string;
  description: string;
}


export interface ICreateTeam {
  teams: ITeams[] | IObJTeams[] | IAPITeams[]  | [];
  teamType: string;
}
export interface ITeams {
  id: string;
  name: string;
  city: string;
}

export interface IObJTeams extends ITeams {
  img: string;
  alt: string;
  isChampion: boolean;
  arena: string;
  uniformColor: string;
  secondaryUniformColor?: string;
}

export interface IAPITeams extends ITeams {
  abbreviation: string;
  division: string;
  conference?: "East" | "West";
}

export interface IFetchData {
  API_URL: string;
  API_KEY?: string;
}

export interface IPopUpModal {
  header: string;
  message?: string;
  description?: string | any;
  image?: any;
  btnColor?: string | any;
  // severity?: AlertColor;
  btnText?: string;
  btnAction?: Function | any;
  secondBtnAction?: Function | any;
  secondBtnText?: string;
  isLoading?: boolean;
  secondBtnColor?: string | any;
}

export interface IFooterAnchor {
  tooltip: string;
  href: string;
  icon?: ReactNode;
}

export interface ITeamView {
  viewMode: string;
  setViewMode: Function;
}
export interface IOnDelete {
  id: string;
  array: Array<any>;
  state?: any;
}
export interface IFilterItems {
  userValue: string;
  localSetter: Function;
  array: Array<any>;
  backupState: Array<any>;
}
