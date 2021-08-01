import React from "react"
import Styles from "./styles"
import { withStyles } from "@material-ui/core"
import Content from "../../Utils/content"
import DrawerItem from "../DrawerItem"

class DrawerList extends React.PureComponent {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                {Content.map((content) => (
                    <DrawerItem id={content.id} key={content.id} />
                ))}
            </div>
        )
    }
}

export default withStyles(Styles)(DrawerList)
