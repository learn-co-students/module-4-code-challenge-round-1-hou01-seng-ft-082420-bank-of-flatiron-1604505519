import React from "react";

const Filter = ({sortTransactions}) => {
    return (
        <label> Sort Alphabetically By
            <select onChange={(e)=>sortTransactions(e)}>
                <option></option>
                <option>Description</option>
                <option>Category</option>
            </select>
        </label>
  );
};

export default Filter;