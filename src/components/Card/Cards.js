import React from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import "./Cards.css";

function Cards({ title, image, body }) {
  return (
    <div>
      <Card style={{ width: 345, height: 345, backgroundColor: "rosybrown" }}>
        <CardMedia component="img" alt="" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
