import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  Budget,
  Users,
  Progress,
  Profit,
  SalesChart,
  DevicesChart,
  ProductList,
  Story,
  Foto,
  Tabheader,
 Status,
  Makanan,
  OrdersTable
} from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">

<AppBar style={{ background: '#fff' }} position="sticky"> <Status className={classes.item} />
      </AppBar>  


<Tabheader className={classes.item} />
          

<Foto className={classes.item} />

  <Makanan className={classes.item} />

        <div className={classes.root}>



          

  

<Grid
            container
            spacing={4}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Users className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Progress className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Profit className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <SalesChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <DevicesChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <ProductList className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <OrdersTable className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
