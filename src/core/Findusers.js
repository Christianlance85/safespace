import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import safespaceImg from './../assets/images/safespace.jpg'
import Grid from 'material-ui/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.primary
  },
  media: {
    minHeight: 330
  }
})

class FindUsers extends Component {
  state = {
    defaultPage: true
  }
  init = () => {
    if(auth.isAuthenticated()){
      this.setState({defaultPage: false})
    }else{
      this.setState({defaultPage: true})
    }
  }
  componentWillReceiveProps = () => {
    this.init()
  }
  componentDidMount = () => {
    this.init()
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography type="headline" component="h2" className={classes.title}>
                  Find Users
                </Typography>
                <CardMedia className={classes.media} image={safespaceImg} title="SafeSpace" />
                <CardContent>
                  <Typography type="body1" component="p">
                    Welcome to the SafeSpace!

                    This is a social media application that only shows posts in the last 24 hours,
                    preventing your posts from facing future scrutiny.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
        }
        {!this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
  }
}

FindUsers.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FindUsers)