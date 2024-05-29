import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeItem } from '../Features/Slice';

const Update = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);

    const totPrice = products.reduce((total, product) => total + product.price * (product.qtty || 0), 0);
    const totQtty = products.reduce((total, product) => total + (product.subprice || 0), 0);

    const handleAddToCart = (productId) => {
        dispatch(addToCart({ id: productId }));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart({ id: productId }));
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeItem({ id: productId }));
    };

    return (
        <div>
            <nav>
                <h1 className='tit col-sm-11 text-center'>Mobile Shop Cart</h1><br /><br />
                <h4 className='col '>
                    <div className="navi">
                        Total Quantity: <p className="tot">{totQtty}</p>
                    </div>
                    <div className="navi">
                        Total Price: <p className="tot">&#8377;{totPrice}</p>
                    </div>
                </h4>
            </nav>

            <div className="cart">
                {products.map((product) => (
                    <div key={product.id} className="card product-card">
                       <div className="row g-0">
                        <div className="col-sm-3">


                        <div id={`carousel-${product.id}`} className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {product.images.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={image} height='300' className="d-block w-100" alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        </div>
                        <div className="col product-details">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            
                            <p>Subtotal: ${product.subprice.toFixed(2)}</p>
                            <p>Quantity: &nbsp;&nbsp;
                            <span className="btn-group " role="group" aria-label="Basic example">

<button type="button" className="btn " onClick={() => handleAddToCart(product.id)}>+</button>
<div className='qtty bg-secondary'>{product.qtty}</div> 
<button type="button" className="btn " onClick={() => handleRemoveFromCart(product.id)}>-</button>
</span>
                            </p>

                            
<div>
<button type="button" className="m-2 btn-danger" onClick={() => handleRemoveItem(product.id)}>Remove Item</button>

</div>
                        </div>

                        
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Update;
