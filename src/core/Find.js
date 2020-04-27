// import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {withStyles} from 'material-ui/styles'
// import auth from './../auth/auth-helper'
// import FindPeople from './../user/FindPeople'

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     margin: 30,
//   },
//   card: {
//     maxWidth: 600,
//     margin: 'auto',
//     marginTop: theme.spacing.unit * 5
//   },
//   title: {
//     padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
//     color: theme.palette.text.primary
//   },
//   media: {
//     minHeight: 330
//   }
// })
// class Find extends Component {
//     state = {
//       defaultPage: true
//     }
//     init = () => {
//       if(auth.isAuthenticated()){
//         this.setState({defaultPage: false})
//       }else{
//         this.setState({defaultPage: true})
//       }
//     }
//     componentWillReceiveProps = () => {
//       this.init()
//     }
//     componentDidMount = () => {
//       this.init()
//     }
//     render() {
//         const {classes} = this.props
//     return (
//       <div className={classes.root}>
// <FindPeople/>
//       </div>
//     )
//     }
// }
// Find.propTypes = {
//     classes: PropTypes.object.isRequired
//   }
  
//   export default withStyles(styles)(Find)
  