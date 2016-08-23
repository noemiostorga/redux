import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Drawer>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/example"><MenuItem>Example</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
})  