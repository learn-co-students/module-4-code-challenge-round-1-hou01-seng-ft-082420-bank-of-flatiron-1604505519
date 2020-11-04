import React from "react";

const Search = props => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.searchTransactions}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;

// class Search extends React.Component{
//   render(){
//     return (
//       <div className="ui large fluid icon input">
//       <input
//         type="text"
//         // value="Alphabetically"
//         checked={this.props.sort === 'Alphabetically'}
//         placeholder={"Search your Recent Transactions"}
//         onChange={e => this.props.handleSearchChange(e.target.value)}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//     )
//   }
// }
