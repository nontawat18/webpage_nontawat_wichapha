import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import mypic from "../asset/pin.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


const Detail = (props) => {
    const attraction = props;
    const url = attraction.attraction.flags.png
    const urlMap = attraction.attraction.maps.googleMaps

    console.log(urlMap)

    return (
        <div className="text-center">
            <Box sx={{ flexGrow: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}  >

                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea href={urlMap}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {attraction.attraction.name.common}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {attraction.attraction.name.official}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={urlMap}>
                            Go to Map
                        </Button>
                    </CardActions>
                </Card>


            </Box>

        </div>
    );
};

export default Detail;
