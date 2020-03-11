import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
class Foto extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Foto">
        <div className={classes.root}>
       


            <Carousel>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/03/08/22/50/laughing-kookaburra-4913972_1280.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/03/08/22/50/laughing-kookaburra-4913972_1280.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/03/08/22/50/laughing-kookaburra-4913972_1280.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
      </DashboardLayout>
    );
  }
}

Foto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Foto);
