import React, { useContext, useState, useEffect } from "react";
import "./Home.scss";
import Button from "../../utilities/Button/Button";
import { CategoryContext } from "../../context/Contexts";
import CarousalItem from "../../utilities/CarousalItem/CarousalItem";
import Carousal from "../../utilities/Carousal/Carousal";
function Home() {
  const { categoryData } = useContext(CategoryContext);
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3010/banners`)
      .then((res) => res.json())
      .then((data) => {
        data.sort(function (a, b) {
          return a.order - b.order;
        });
        setBanner(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home_container">
      <div className="home_page">
        <div className="banner_container">
     {   /* <Carousal>
            {banner?.map((data) => {
              if (data.isActive) {
                return (
         <CarousalItem>
           
                  <div className="banner_content" key={data.id}>
                    <img
                      src={data.bannerImageUrl}
                      alt={data.bannerImageAlt}
                      className="banner_image"
                    />
                  </div>
            </CarousalItem>
                  
                );
              }
            })}
            </Carousal> */}
        </div>
        <div className="category_data">
          {categoryData?.map((data) => {
            if (data.order > 0) {
              if (data.order % 2 !== 0)
                return (
                  <article key={data.id} className="category_card">
                    <img
                      src={`${data.imageUrl}`}
                      alt={data.name}
                      className="category_image"
                    ></img>
                    <div className="category_item_details">
                      <h1 className="category_name">{data.name}</h1>
                      <p className="category_description">{data.description}</p>
                      <Button
                        className="category_action"
                        buttonText={`Explore ${data.key}`}
                      />
                    </div>
                  </article>
                );
              else {
                return (
                  <article key={data.id} className="category_card">
                    <div className="category_item_details">
                      <h1 className="category_name">{data.name}</h1>
                      <p className="category_description">{data.description}</p>
                      <Button
                        className="category_action"
                        buttonText={`Explore ${data.key}`}
                      />
                    </div>
                    <img
                      src={`${data.imageUrl}`}
                      alt={data.name}
                      className="category_image"
                    ></img>
                  </article>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
