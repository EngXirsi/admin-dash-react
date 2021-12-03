import { List  , ListItem  , ListItemText, Drawer, makeStyles} from '@material-ui/core'
import Icon from "@material-ui/core/Icon";
import React from 'react'
import {NavLink , useLocation} from 'react-router-dom'
import classNames from "classnames";
import styles from 'assets/jss/material-dashboard-react/components/sidebarStyle.js'
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
    const classes = useStyles();
    let location = useLocation();
    const {color , logo , image , logoText , routes } = props
    function activeRoute(routeName) {
        return location.pathname === routeName;
      }
    var links = (
        <List className = {classes.list}>
            {routes.map( (prop , key) =>{
                var listItemClasses;
       
                listItemClasses = classNames({
                  [" " + classes[color]]: activeRoute(prop.layout + prop.path),
                });
              
               return (
                <NavLink
                to={prop.layout + prop.path}
                className={classes.item}
               
                key={key}
              >
                       <ListItem button className={classes.itemLink  + listItemClasses}>
                    
                                <prop.icon 
                                className = {classes.itemIcon}
                                />
                        
                           <ListItemText 
                           primary = {prop.name}
                           disableTypography = {true}
                           className = {classes.itemText}

                           />

                       </ListItem>

                   </NavLink>
               ) 
            })}
        </List>
    );

    var brand = (
        <div className = {classes.logo}>
            <a href = "#"
              className={classes.logoLink}>
            
                <div className = {classes.logoImage}>
                    <img src ={logo} alt = "logo" 
                    className={classes.img}
                    />
                </div>
                {logoText}
           </a>
        </div>
    )
    
    return (
        <div>
            <Drawer
            anchor = "left"
            variant = "permanent"
            open
            classes = {{paper: classes.drawerPaper}}

            >
                    {brand}
                    <div className = {classes.sidebarWrapper}>
                        {links}
                    </div>
                    {image !== undefined ?
                    
                (<div
                    className = {classes.background}
                    style = {{backgroundImage : "linear-gradient(rgba(34, 42, 69, 0.96), rgba(34, 42, 69, 0.96)),url(" + image + ")"}}
                    
                />):null
                }
            {/* background-image: linear-gradient(rgba(34, 42, 69, 0.96), rgba(34, 42, 69, 0.96)), url(/assets/images/sidebar/sidebar-bg-dark.jpg); */}
            </Drawer>
        </div>
    )
}
