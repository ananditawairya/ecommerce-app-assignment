import React, { useContext } from "react";
import { Context } from "../../context/Contexts";
import {Link,useParams} from "react-router-dom"
import "./Sidebar.scss";
function Sidebar() {
  const { categoryData,categorySelection,setCategorySelection,lastState,setLastState} = useContext(Context);
  const {id} = useParams()

  const handleFilter=(dataId)=>{
 
    if (dataId in categorySelection && lastState===dataId) {
      setCategorySelection((prev)=>({...prev,[dataId]:!categorySelection[dataId]}))
    }
    else{
      setCategorySelection((prev)=>({...prev,[dataId]:true}))
    }
    lastState===dataId ? setLastState(null): setLastState(dataId)
}

  return (
    <div className="category_list">
      {
        categoryData?.map(
        (data) => data.order > 0 && 
          <Link to={`/plp/${data.id}`} key={data.id} className="sidebar_link">
            <div  className={`category_list_item ${(data.id===id && categorySelection[data?.id]) ?'active' : 'inactive' }`} onClick={()=>handleFilter(data.id)}>{data.name}</div>
          </Link>
      )}
    </div>
  );
}

export default Sidebar;
