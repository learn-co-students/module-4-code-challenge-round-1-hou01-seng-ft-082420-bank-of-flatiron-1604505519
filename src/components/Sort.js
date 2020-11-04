import React from "react";

const Sort = (props) => {
    return (
        <div>
            <label>
            <input onChange={(e) => props.sortTrans(e)}
            checked={props.selected === "category"}  type="radio" value="category" name="category" />
            Category
            </label>
            <label>
            <input onChange={(e) => props.sortTrans(e)}
            checked={props.selected === "description"} 
             type="radio" value="description" name="Description"/>
            Description
            </label>
        </div>
    );
};

export default Sort;