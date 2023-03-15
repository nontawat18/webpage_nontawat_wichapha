import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import mypic from "../asset/pin.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import axios from 'axios'
import { useTheme } from '@mui/material/styles';


const ListRegion = () => {
  const [region, setRegion] = React.useState([])
  const getRegion = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/independent?status=true&fields=flag,name,region")
    console.log(response.data)
    setRegion(response.data)
  }
  React.useEffect(() => {
    getRegion()
  }, [])

  const theme = useTheme();
  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>
        <Grid container spacing={2}>
          {region.map((list) => (
            <Grid item xs={6} className="" md={3} wrap="nowrap">
              <Card sx={{ display: 'flex' }}>



                <Typography
                  
                  sx={{
                    
                    display: { xs: "none", md: "flex" },
                    
                  }}
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
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {list.name.common}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {list.region}
                    </Typography>
                  </CardContent>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                      {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                  </Box> */}

                </Box>

              </Card>
            </Grid>

          ))}

        </Grid>
      </Box>
    </div>
  );
};

export default ListRegion;
