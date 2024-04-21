import React, { Fragment } from 'react'

function home() {
    return <Fragment>
        {/* <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <img width="150px" src="/images/logo.png" />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="input-group">
                    <input
                        type="text"
                        id="search_field"
                        className="form-control"
                        placeholder="Enter Product Name ..."
                    />
                    <div className="input-group-append">
                        <button id="search_btn" className="btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <span id="cart" className="ml-3">Cart</span>
                <span className="ml-1" id="cart_count">2</span>
            </div>
        </nav> */}

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src=" /images/1.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
                            </h5>
                            <div className="ratings mt-auto">
                                <div className="rating-outer">
                                    <div className="rating-inner"></div>
                                </div>
                            </div>
                            <p className="card-text">$245.67</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="/images/2.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href=""
                                >WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a
                                >
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$150.32</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="/images/3.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href=""
                                >Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a
                                >
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$440.57</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="/images/4.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="">PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$15.46</p>

                            <a type="button" href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="/images/5.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="">Campus Men's Maxico Running Shoes</a>
                            </h5>
                            <div className="ratings mt-auto">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$10.12</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <footer className="py-1 bg-dark">
            <p className="text-center text-white mt-1 ">
                cart - 2023-2024, All Rights Reserved
            </p>
        </footer> */}

    </Fragment>


}

export default home