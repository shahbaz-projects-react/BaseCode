import { withStyles } from "@material-ui/core"
import React from "react"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import ScrollTo from "react-scroll-into-view"
import Styles from "./styles"

class DrawerItem extends React.PureComponent {
    render() {
        const { classes, id } = this.props
        return (
            <div className={classes.root}>
                <ScrollTo selector={`#item${id}`}>
                    <Button color='primary' size='medium'>
                        Item {id}
                    </Button>
                </ScrollTo>
            </div>
        )
    }
}

DrawerItem.propTypes = {
    // ...prop type definitions here
    id: PropTypes.any,
}
export default withStyles(Styles)(DrawerItem)
