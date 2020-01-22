import  React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton'
const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <ToggleButton clicked={props.sideopen}>MENU</ToggleButton>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems>
            </NavigationItems>
        </nav>
    </header>
)
export default toolbar