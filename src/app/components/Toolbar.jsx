import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Вхідні', 'Помічені', 'Надіслати email', 'Чернетки'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['Всі листи', 'Сміття', 'Спам'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

  

//   return (
//     <div className="toolbarbutton">
//       <Button onClick={toggleDrawer('left', true)}>
//           <div className="buttonMenu">
//           <div>
//             <span className="line"></span>
//           </div>
//           <div>
//             <span className="line"></span>
//           </div>
//           <div>
//             <span className="line"></span>
//           </div>
//           </div>
//       </Button>
      
//       <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
//         {sideList('left')}
//       </Drawer>
      
//     </div>
//   );
// }
class TemporaryDrawer extends React.Component {
  
  handleClick = () => {
  }


  render() {
      return (
          
       
  <section className="toolbarbuttonPosition">
        <div className="toolbarbutton">
            
        
        <div className="buttonMenu"   onClick={this.handleClick=()=>(showToolbar('block'))}>
        <div>
          <span className="line"></span>
        </div>
        <div>
          <span className="line"></span>
        </div>
        <div>
          <span className="line"></span>
        </div>
        </div>
        
        </div>
        </section>
        
      );
  }
}

export default TemporaryDrawer;




  
  