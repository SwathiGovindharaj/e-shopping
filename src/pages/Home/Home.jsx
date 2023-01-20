// vendors
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// components
import Loader from "../../components/Loader/Loader";

// services
import { getAllCategories } from "../../services/category.service";

// utils
import routerLinks from "../../data/routerLinks";

const Home = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategoriesList = () => {
    setLoading(true);
    getAllCategories()
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(routerLinks.PRODUCTS_LIST, {
      state: { category },
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="categories-container mt-5">
      {categories &&
        categories.length > 0 &&
        categories.map((category) => {
          return (
            <Card
              key={category.id}
              className="category-item__wrap"
              onClick={() => handleCategoryClick(category)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.imgUrl}
                  alt="category"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-center"
                  >
                    {category.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </div>
  );
};

export default Home;
