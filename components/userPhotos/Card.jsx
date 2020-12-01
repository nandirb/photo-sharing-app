import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
     margin:"10px"
  },
  comment: {
      padding:5,
      marginTop:7,
      border: 0,
      borderRadius: 5,
      background: 'rgb(245, 245, 245)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  datetime:{
      right:0,
      bottom: -4,
      position:"relative",
      color: "rgb(138, 138, 138)"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {
    console.log(props)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`images/${props.data.file_name}`}
      /> 
       <CardHeader
        subheader={props.data.date_time}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {
             props.data.comments ? (
                props.data.comments.map(
                    (el, i)=>
                    (
                        
                        <div key={i}   className={classes.comment}>
                            <b>{el.user.first_name} </b>
                            <span>{el.comment} </span>
                            <p className={classes.datetime}>{el.date_time}</p>
                        </div>
                    )
         
                )
             ) : ""
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}
