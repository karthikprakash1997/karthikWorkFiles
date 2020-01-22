import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'; 
//import ToggleButton from '../Navigation/SideDrawer/ToggleButton/ToggleButton'
class Layout extends Component{

    state={
      showSideDrawer:false
    }
    DisplaySideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    SideDrawerHandler=()=>{
        this.setState((prevState)=>{return{showSideDrawer:!prevState.showSideDrawer}})
    }
  
    render(){
        return(
        <Aux>
            <Toolbar sideopen={this.SideDrawerHandler} />
            <SideDrawer 
                open ={this.state.showSideDrawer} 
                close={this.DisplaySideDrawerHandler}/>
             <main className={classes.Content}>
                 {this.props.children}
             </main>
        </Aux>);

        
    }
}


export default Layout;