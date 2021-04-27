import { withStyles } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import Styles from "./styles"
import { connect } from "react-redux"

class Base extends React.PureComponent {
    static propTypes = {
        // ...prop type definitions here
        title: PropTypes.string,
    }
    render() {
        const { classes } = this.props
        return <div className={classes.root}>Base</div>
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default withStyles(Styles)(
    connect(mapStateToProps, mapDispatchToProps())(Base)
)
