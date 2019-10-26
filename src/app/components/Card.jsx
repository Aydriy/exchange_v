import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Autoplay from "./Swiper.jsx"
// import card1 from '../../_/image/card/card1.jpg'
// import card2 from '../../_/image/card/card2.jpg'
// import card3 from '../../_/image/card/card3.jpg'
// import card4 from '../../_/image/card/card4.jpg'
// import card5 from '../../_/image/card/card5.jpg'
// import card6 from '../../_/image/card/card6.jpg'

const images = [
  {
    url: '../../_/image/card/card1.jpg',
    title: 'Sport',
    width: '33.33%',
    
  },
  {
    url: '../../_/image/card/card2.jpg',
    title: 'Vacation',
    width: '33.33%',
  },
  {
    url: '../../_/image/card/card3.jpg',
    title: 'Travel',
    width: '33.33%',
  },
  {
    url: '../../_/image/card/card4.jpg',
    title: 'Tools',
    width: '33.33%',
  },
  {
    url: '../../_/image/card/card5.jpg',
    title: 'Transport',
    width: '33.33%',
  },
  {
    url: '../../_/image/card/card6.jpg',
    title: 'Clothes',
    width: '33.33%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className="description">
            <div className="container">
            <div className="cards">
    
    <div className={classes.root}>
    {images.map(image => (
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: image.width,
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {image.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    ))}
  </div>
  
  </div> 
  <Autoplay/>
  </div>
  
</div>
      
  );
}

