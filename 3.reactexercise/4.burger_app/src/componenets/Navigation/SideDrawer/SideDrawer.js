import  React from 'react';
import Logo from '../../../componenets/Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'
const sideDrawer =(props)=>{

    let attachedClasses=[classes.sideDrawer,classes.Close]

    if(props.open)
    {
        attachedClasses=[classes.sideDrawer,classes.Open]
    }

    return (
        <Aux>
            <Backdrop 
                show={props.open} 
                clicked={props.close}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                    <nav>
                        <NavigationItems/>
                    </nav>
            </div>
        </Aux>
    );}
export default sideDrawer