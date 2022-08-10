import React, { useContext } from "react";
import { Context } from "../../context/Contexts";
import {Link,useParams} from "react-router-dom"
import "./Sidebar.scss";
function Sidebar() {
  const { categoryData } = useContext(Context);
const {id} = useParams()

  return (
    <div className="category_list">
      {
        categoryData?.map(
        (data) => data.order > 0 && <Link to={`/plp/${data.id}`} key={data.id} className="sidebar_link"><div  className={`category_list_item ${data.id===id && 'active' }`} >{data.name}</div></Link>
      )}
    </div>
  );
}

export default Sidebar;
