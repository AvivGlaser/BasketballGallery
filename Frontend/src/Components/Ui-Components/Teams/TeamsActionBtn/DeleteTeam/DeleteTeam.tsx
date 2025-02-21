import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { IOnDelete } from "../../../../../Helpers/Interfaces";
import onDeleteFN from "../../../../../Helpers/onDeleteFN";


export default function DeleteTeam(props: IOnDelete) {
    const {id, array, state} = props;
  return (
    <div>
      <Button
        startIcon={<DeleteOutline />}
        onClick={() => onDeleteFN({ id: id, array: array })}
      ></Button>
    </div>
  );
}
