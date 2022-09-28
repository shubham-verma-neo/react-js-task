import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <React.Fragment>
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                        <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo pull-left">
                                    <Link to='/'><img src="images/home/logo.png" alt="" /></Link>
                                </div>
                                <div className="btn-group pull-right">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                            USA
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Canada</a></li>
                                            <li><a href="#">UK</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                            DOLLAR
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Canadian Dollar</a></li>
                                            <li><a href="#">Pound</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/"><i class="fa fa-user"></i> Account</Link></li>
                                        <li><Link to="/"><i class="fa fa-star"></i> Wishlist</Link></li>
                                        <li><Link to="/checkout"><i class="fa fa-crosshairs"></i> Checkout</Link></li>
                                        <li><Link to="/cart"><i class="fa fa-shopping-cart"></i> Cart</Link></li>
                                        <li><Link to="/login" class="active"><i class="fa fa-lock"></i> Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div className='container'>
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div class="mainmenu pull-left">
                                    <ul class="nav navbar-nav collapse navbar-collapse">
                                        <li><Link to="/">Home</Link></li>
                                        <li class="dropdown"><Link >Shop<i class="fa fa-angle-down"></i></Link>
                                            <ul role="menu" class="sub-menu">
                                                <li><Link to="/shop">Products</Link></li>
                                                <li><Link to="/product-details">Product Details</Link></li>
                                                <li><Link to="/checkout">Checkout</Link></li>
                                                <li><Link to="/cart">Cart</Link></li>
                                                <li><Link to="/login" class="active">Login</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link >Blog<i class="fa fa-angle-down"></i></Link>
                                            <ul role="menu" class="sub-menu">
                                                <li><Link to="/blog">Blog List</Link></li>
                                                <li><Link to="/blog-single">Blog Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/404">404</Link></li>
                                        <li><Link to="/contact-us">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="search_box pull-right">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
