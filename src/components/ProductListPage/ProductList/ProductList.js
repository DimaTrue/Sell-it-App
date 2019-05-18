import React, { Fragment } from 'react';
import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';
import ProductItem from '../ProductItem/ProductItem';
import Proptypes from 'prop-types';
import style from './ProductList.module.scss';


const ProductList = ({ data }) => (
  <Fragment>
    <Header />
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.productList}>
          {data.map(({ images, pk, theme }) => <ProductItem key={pk} img={images[0]} id={pk} theme={theme} />)}
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
);
ProductList.propTypes = {
  data: Proptypes.array,
};
export default ProductList;
