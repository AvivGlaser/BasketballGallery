import React from "react";
import { IOnDelete } from "./Interfaces";
import { updateArray } from "../Redux/Features/UpdateArray/updateArraySlice";
import { store } from "../Redux/store";

export default function onDeleteFN(props: IOnDelete) {
  const { id, array } = props;
  if (!id || !Array.isArray(array)) return;
  const updatedArray: Array<any> = array.filter((items) => items.id !== id);
  store.dispatch(updateArray(updatedArray));
}
