// interface IProps {}

import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const BreadcrumbsItem = () => {
  const {
    clickedFile: { id },
  } = useSelector((state: RootState) => state.tree);
  return <li>{id}</li>;
};

export default BreadcrumbsItem;
