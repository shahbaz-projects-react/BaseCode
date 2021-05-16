import { withStyles } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import Styles from "./styles"

class ContentCard extends React.PureComponent {
    render() {
        const { classes, item } = this.props
        return (
            <div className={classes.root} id={`item${item.id}`}>
                {item.content}
            </div>
        )
    }
}

ContentCard.propTypes = {
    // ...prop type definitions here
    item: PropTypes.object.isRequired,
}
export default withStyles(Styles)(ContentCard)
