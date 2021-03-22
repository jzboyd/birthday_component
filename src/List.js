import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;































// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));



// const Lists = ({people}) => {
//   const classes = useStyles();

//   return (
//       <>
//       {people.map((person) => {
//         const {id,name,age,image} = person;
//         return <article key={id} className="person">
//         <List className={classes.root}>
//         <ListItem alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar alt={name} src={image} />
//           </ListItemAvatar>
//           <ListItemText
//             primary={name}
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   component="span"
//                   variant="body2"
//                   className={classes.inline}
//                   color="textPrimary"
//                 >
//                   {age} Years Old
//                 </Typography>
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <Divider variant="inset" component="li" />
       
//       </List>
//       </article>
//       })}
//     </>
//   );
// }

// export default Lists