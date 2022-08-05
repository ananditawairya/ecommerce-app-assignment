import React, { useContext } from "react";
import { CategoryContext } from "../../context/Contexts";
import "./Sidebar.scss";

function Sidebar() {
  const { categoryData } = useContext(CategoryContext);
  return (
    <ul className="category_list">
      {
        categoryData?.map(
        (data) => data.order > 0 && <li key={data.id} className="category_list_item">{data.name}</li>
      )}
    </ul>
  );
}

export default Sidebar;
