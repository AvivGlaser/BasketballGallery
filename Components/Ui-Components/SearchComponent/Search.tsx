import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import filterItemFN from "../../../Helpers/filterItemsFN";
import { useSelector } from "react-redux";


interface ISearch {
  
}

export default function Search(props: any) {
  const { localData, localSetter, backupState } = props;
  return (
    <div className="search-component">
      <TextField
        id="standard-basic"
        label="Search..."
        variant="standard"
        aria-label="Search..."
        onChange={(e) =>
          filterItemFN({
            userValue: e.target.value,
            array: localData,
            localSetter: localSetter,
            backupState: backupState,
          })
        }
      />
    </div>
  );
}
