import { Button, Card, CardContent, CardMedia, Container, Grid, Paper } from "@mui/material";
import { grid } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config"
import Swiper from "swiper";
import "./slider.css";

const ListVideo=()=>{
const url =app_config.api_url;

const [videoData, setvideoData] = useState([]);
const [loading, setLoading] = useState(true);



const fetchVideos =()=>{
    fetch(url +"/video/getall")
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        setvideoData(data)
        setLoading(false)
    });
};

const displayVideos = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {videoData.map((video) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + video.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <Link
                    to={"/view/" + video._id}
                    component={Button}
                    variant="contained"
                    color="primary"
                  >
                    Play Video
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const swiper = useRef(null);
  useEffect(() => {
    swiper.current = new Swiper(".mySwiper", {
      effect: "fade",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
    fetchVideos();
  }, []);

  return (
    <Paper className="mb-5">
      <Container maxWidth="xl">
        <header style={{ height: "30rem", marginBottom: "5rem" }}>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </header>

        <Grid container justifyContent="space-between" className="mb-3">
          <Grid item>
            <h3 classNameName="subtitle">All Videos</h3>
          </Grid>

          <Grid item>
            <Button color="secondary" variant="contained">
              Show More
            </Button>
          </Grid>
        </Grid>
        {displayVideos()}
      </Container>
    </Paper>
  );
};


export default ListVideo;