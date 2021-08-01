import { withStyles } from "@material-ui/core"
import React from "react"
import Styles from "./styles"
import ContentCard from "../ContentCard"
import PropTypes from "prop-types"

class ContentList extends React.PureComponent {
    render() {
        const { classes, list } = this.props
        return (
            <div className={classes.root}>
                {list.map((content) => (
                    <ContentCard item={content} key={content.id} />
                ))}
            </div>
        )
    }
}

ContentList.propTypes = {
    // ...prop type definitions here
    list: PropTypes.arrayOf(PropTypes.object),
}

export default withStyles(Styles)(ContentList)
