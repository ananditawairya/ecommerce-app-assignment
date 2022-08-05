import React,{useState,useEffect} from 'react'
import "./ProductsPage.scss"
import Button from '../../utilities/Button/Button';
function ProductsPage() {
const [productsData, setProductsData] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:3010/products`)
        .then((res) => res.json())
        .then((data) => {
          data.sort(function (a, b) {
            return a.order - b.order;
          });
          setProductsData(data);
        })
        .catch((err) => console.log(err));
    }, []);
  
  return (
    <section className='products_section'>
            <div className='products_card_list'>
            {productsData?.map((data)=>{
                return <div className="product_card" key={data.id}>
                  <h3>{data.name}</h3>
                  <div className="item_details">
                    <img src={data.imageURL} alt="" className="item_image" />
                    <p className="image_description">{data.description}</p>
                  </div>
                  <div className="item_purchase_section">
                   <p className="item_price">{`MRP Rs.${data.price}`}</p>
                   <Button className="buy" buttonText="Buy Now"/>
                  </div>
                </div>
            })}
            </div>
    </section>
  )
}

export default ProductsPage