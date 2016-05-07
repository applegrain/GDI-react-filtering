import React from 'react';

var ListResults = React.createClass({
  render: function() {
    var listItems = this.props.results.map(function(item, i) {
      return <li key={i}>{item}</li>;
    });

    return (
      <div>
        <ul className="listItems">
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ListResults;