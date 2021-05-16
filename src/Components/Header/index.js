import { withStyles } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import React from "react"
import Styles from "./styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { OPEN_DRAWER } from "./actions"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import DrawerList from "../DrawerList"

class Header extends React.PureComponent {
    static propTypes = {
        // ...prop type definitions here
        title: PropTypes.string,
        open: PropTypes.bool,
        openDrawer: PropTypes.func,
    }
    closeDrawer = () => {
        const { openDrawer } = this.props
        openDrawer(false)
    }
    handleDrawerOpen = () => {
        const { openDrawer, open } = this.props
        openDrawer(!open)
    }
    render() {
        const { title, classes, open } = this.props
        return (
            <div className={classes.root}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open-drawer'
                            onClick={this.handleDrawerOpen}
                            edge='start'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' noWrap>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant='temporary'
                    anchor='left'
                    open={open}
                    onClose={this.closeDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {open && <DrawerList />}
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    open: state.header.open,
})
const mapDispatchToProps = (dispatch) => ({
    openDrawer: OPEN_DRAWER,
})
export default withStyles(Styles)(
    connect(mapStateToProps, mapDispatchToProps())(Header)
)
