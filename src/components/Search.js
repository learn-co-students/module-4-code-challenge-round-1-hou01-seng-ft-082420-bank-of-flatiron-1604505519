import React from "react";

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = (e) => {
    this.props.handleSearch(e.target.value)
  }



  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleChange}
        />
        <i onClick = {this.props.executeSearch} className="circular search link icon">Click To Search</i>
      </div>
    );
  }
};

export default Search;
