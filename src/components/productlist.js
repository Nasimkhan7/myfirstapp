import "./productlist.css";
import productData from "./productdata";
import { Button, Card, CardContent, CardMedia, Grid ,  Paper} from "@mui/material";
import { ProductContext } from "../productContext";
import { useContext } from "react";

const ProductList = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const displayNumbers = () => {
    return nums.map((n) => (
      <div className="col-md-4 col-sm-6 col-lg-3">
        <h1 className="nums">{n}</h1>
      </div>
    ));
  };

const {productData} =useContext (ProductContext);


const btnStyles ={
  backgroundColor:"codetblue",
};


  const displayGames = () => {
    return productData.map((game) => (
      <Grid item md={4} lg={3} sm={6} sx={12}>
        <Card>
          <CardMedia component="img" image={game.img_url} height={200} />
          <CardContent>
            <h3>{game.name}</h3>
            <p className="text-muted">{game.publisher}</p>
            <Button style={btnStyles} variant="contained" color="secondary">₹ {game.price}</Button>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Paper style={{ height:"100vh"}}>
    <div className="container">
      <h1>Product Listing</h1>
      <Grid container spacing={3}>
        {displayGames()}
      </Grid>
    </div>
    </Paper>
  );
};

export default ProductList;