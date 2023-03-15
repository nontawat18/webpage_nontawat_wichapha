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


const ListRegion = (props) => {
  const attraction = props.attraction;
  const [region, setRegion] = React.useState([])
  const getRegion = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/independent?status=true&fields=flag,name,region")
    console.log(response.data)
    setRegion(response.data)
  }
  React.useEffect(() => {
    // getRegion()
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingLeft: 5, paddingRight: 5,}}>
         
              <Card sx={{ display: 'flex' }}>

                <CardActionArea href={"/"+attraction.name.common}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography
                      sx={{ display: { xs: "none", md: "flex" }, }}
                    >
                      <Image
                        src={mypic}
                        component="img"
                        alt="Picture of the author"
                        width={120}
                        height={80}
                        className="text-center"
                      />
                    </Typography>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {attraction.name.common}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {attraction.region}
                      </Typography>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
   
      </Box>
    </div>
  );
};

export default ListRegion;
