import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import { storeProducts } from '../data';

import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    // at the beginning set state to empty array
    // state = {
    //     products: []
    // }

    // state = {
    //     products: storeProducts
    // };

    render() {
        // console.log(this.state.products);
        return (
            // <div>
            //     <Product></Product>
            // </div>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {/* there will be product row*/}
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    // return <h1>{value}</h1>;
                                    // console.log(value);
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} ></Product>;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
