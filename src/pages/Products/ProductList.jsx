// vendors
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
} from "@mui/material";

// components
import Loader from "../../components/Loader/Loader";

// services
import { getAllProducts } from "../../services/product.service";

// utils
import routerLinks from "../../data/routerLinks";

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductsListBycategory = (category) => {
    setLoading(true);
    getAllProducts()
      .then((response) => {
        let products = response.data.filter(
          (product) => product.categoryId === category.id
        );
        setProductsList(products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (location?.state?.category)
      getProductsListBycategory(location?.state?.category);
  }, []);

  const handleProductClick = (product) => {
    navigate(routerLinks.PRODUCT_DETAIL, {
      state: { product },
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="products-container mt-5">
      {productsList && productsList.length > 0 ? (
        productsList.map((product) => {
          return (
            <Card
              key={product.id}
              className="product-item__wrap mt-3"
              onClick={() => handleProductClick(product)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imgUrl}
                  alt="product"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="body2">{`₹ ${product.price}`}</Typography>
                  <Typography
                    className={`${
                      product.availability === "Available"
                        ? "available"
                        : "out-of-stock"
                    }`}
                    variant="body2"
                  >
                    {product.availability}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Add to Wishlist
                </Button>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
              </CardActions> */}
            </Card>
          );
        })
      ) : (
        <Typography>No products</Typography>
      )}
    </div>
  );
};

export default ProductList;
