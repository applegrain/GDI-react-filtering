import React from 'react';

var SearchBox = React.createClass({
  handleInputChange: function(event) {
    var filterTerm = event.target.value;
    this.props.setFilter(filterTerm);
  },

  render: function() {
    return (
      <input onChange={this.handleInputChange} placeholder="Enter search term" />
    )
  }
});

module.exports = SearchBox;