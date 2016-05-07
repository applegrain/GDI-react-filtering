import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SearchBox from './SearchBox';
import ListResults from './ListResults';

var Root = React.createClass({
  getInitialState: function() {
    return { filter: '', data: [] }
  },

  // executed right after component is mounted on DOM
  componentWillMount: function() {
    $.ajax({
      url: 'http://congress.api.sunlightfoundation.com/legislators',
      type: 'GET',
      data: { apikey: '08ca56fde5df4bf5a60411116b6ca372' },
      success: function(response) {
        var legislators = response.results.map(function(obj) {
          return obj.first_name + " " + obj.last_name;
        });

        this.setState({ data: legislators });
      }.bind(this), error: function(xhr) {
        console.log(':(');
      }
    });
  },

  handleFilterChange: function(filter) {
    this.setState({ filter: filter });
  },

  render: function() {
    var filteredData = this.state.data.filter(function(datum) {
      var lowerCaseDatum = datum.toLowerCase();
      var lowerCaseFilter = this.state.filter.toLowerCase();

      return lowerCaseDatum.indexOf(lowerCaseFilter) >= 0;
    }.bind(this));

    return (
      <div>
        <SearchBox setFilter={this.handleFilterChange} />
        <ListResults results={filteredData} />
      </div>
    );
  }
});


ReactDOM.render(<Root />, document.getElementById('container'));
