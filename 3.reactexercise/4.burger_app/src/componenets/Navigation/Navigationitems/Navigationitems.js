import  React from 'react';
import NavigationItem from './Navigationitem/Navigationitem';
import classes from './Navigationitems.css'
const navigationitems =(props)=>(
    <ul className={classes.NavigationItems}>
          <NavigationItem link='/' >BurgerBuilder  </NavigationItem>
          <NavigationItem link='/Orders'> ORDERS</NavigationItem>
    </ul>
);
export default navigationitems