import { IFilterItems } from "./Interfaces";
import { store } from "../Redux/store";

export default function filterItemFN(props: IFilterItems) {
  const { userValue, array, localSetter, backupState } = props;
  if (!userValue || !Array.isArray(array) || array.length <= 0) {
    localSetter(backupState);
    return;
  }
  console.log(array)
  const updatedArray: Array<any> = array.filter((item) =>
    item?.name?.toLowerCase().includes(userValue)
  );
  localSetter(updatedArray);
}
