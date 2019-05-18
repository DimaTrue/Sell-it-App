import React from 'react';
import style from './ProductItemPage.module.scss';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import { Store } from '../../store';
import { fetchProductItem } from '../../actions/products';
import item from '../../img/item.jpg';


const ProductItemPage = (props) => {

  const { state: { products }, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    (products.dataItem && (+products.dataItem.pk === +props.match.params.id)) ||
      fetchProductItem(dispatch, props.match.params.id);
  }, [products]);

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.section}>
        <div className={style.container}>
          <h2 className={style.heading}>{products.dataItem && products.dataItem.theme}</h2>
          <div className={style.product}>
            <div className={style.outPic}>
              <img className={style.pic} src={products.dataItem.images && products.dataItem.images.length ? products.dataItem.images[0].file : item} alt="product" />
            </div>
            <div className={style.description}>
              <div className={style.text}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </div>
              <input type="button" className={style.btn} value="buy" />
            </div>
          </div>
          <Link className={style.link} to='/' >Return to Product List</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductItemPage;
