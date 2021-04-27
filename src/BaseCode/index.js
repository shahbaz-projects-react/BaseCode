import { withStyles } from "@material-ui/core"
import React from "react"

class Base extends React.PureComponent {
    render() {
        const { classes } = this.props
        return <div className={classes.root}>Base</div>
    }
}

export default withStyles(Base)
