import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
	return (
		<React.Fragment>
			<section>
				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<div class="left-sidebar">
								<h2>Category</h2>
								<div class="panel-group category-products" id="accordian">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
													<span class="badge pull-right"><i class="fa fa-plus"></i></span>
													Sportswear
												</a>
											</h4>
										</div>
										<div id="sportswear" class="panel-collapse collapse">
											<div class="panel-body">
												<ul>
													<li><Link to="">Nike </Link></li>
													<li><Link to="">Under Armour </Link></li>
													<li><Link to="">Adidas </Link></li>
													<li><Link to="">Puma</Link></li>
													<li><Link to="">ASICS </Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#mens">
													<span class="badge pull-right"><i class="fa fa-plus"></i></span>
													Mens
												</a>
											</h4>
										</div>
										<div id="mens" class="panel-collapse collapse">
											<div class="panel-body">
												<ul>
													<li><Link to="">Fendi</Link></li>
													<li><Link to="">Guess</Link></li>
													<li><Link to="">Valentino</Link></li>
													<li><Link to="">Dior</Link></li>
													<li><Link to="">Versace</Link></li>
													<li><Link to="">Armani</Link></li>
													<li><Link to="">Prada</Link></li>
													<li><Link to="">Dolce and Gabbana</Link></li>
													<li><Link to="">Chanel</Link></li>
													<li><Link to="">Gucci</Link></li>
												</ul>
											</div>
										</div>
									</div>

									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#womens">
													<span class="badge pull-right"><i class="fa fa-plus"></i></span>
													Womens
												</a>
											</h4>
										</div>
										<div id="womens" class="panel-collapse collapse">
											<div class="panel-body">
												<ul>
													<li><Link to="">Fendi</Link></li>
													<li><Link to="">Guess</Link></li>
													<li><Link to="">Valentino</Link></li>
													<li><Link to="">Dior</Link></li>
													<li><Link to="">Versace</Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to="">Kids</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to="">Fashion</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to="">Households</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to="">Interiors</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to=">">Clothing</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to=">">Bags</Link></h4>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><Link to=">">Shoes</Link></h4>
										</div>
									</div>
								</div>

								<div class="brands_products">
									<h2>Brands</h2>
									<div class="brands-name">
										<ul class="nav nav-pills nav-stacked">
											<li><Link to=""> <span class="pull-right">(50)</span>Acne</Link></li>
											<li><Link to=""> <span class="pull-right">(56)</span>Grüne Erde</Link></li>
											<li><Link to=""> <span class="pull-right">(27)</span>Albiro</Link></li>
											<li><Link to=""> <span class="pull-right">(32)</span>Ronhill</Link></li>
											<li><Link to=""> <span class="pull-right">(5)</span>Oddmolly</Link></li>
											<li><Link to=""> <span class="pull-right">(9)</span>Boudestijn</Link></li>
											<li><Link to=""> <span class="pull-right">(4)</span>Rösch creative culture</Link></li>
										</ul>
									</div>
								</div>

								<div class="price-range">
									<h2>Price Range</h2>
									<div class="well">
										<input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
										<b>$ 0</b> <b class="pull-right">$ 600</b>
									</div>
								</div>

								<div class="shipping text-center">
									<img src="images/home/shipping.jpg" alt="" />
								</div>
							</div>
						</div>
						<div class="col-sm-9">
							<div class="blog-post-area">
								<h2 class="title text-center">Latest From our Blog</h2>
								<div class="single-blog-post">
									<h3>Girls Pink T Shirt arrived in store</h3>
									<div class="post-meta">
										<ul>
											<li><i class="fa fa-user"></i> Mac Doe</li>
											<li><i class="fa fa-clock-o"></i> 1:33 pm</li>
											<li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
										</ul>
										<span>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-half-o"></i>
										</span>
									</div>
									<Link to="">
										<img src="images/blog/blog-one.jpg" alt="" />
									</Link>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<a class="btn btn-primary" href=" ">Read More</a>
								</div>
								<div class="single-blog-post">
									<h3>Girls Pink T Shirt arrived in store</h3>
									<div class="post-meta">
										<ul>
											<li><i class="fa fa-user"></i> Mac Doe</li>
											<li><i class="fa fa-clock-o"></i> 1:33 pm</li>
											<li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
										</ul>
										<span>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-half-o"></i>
										</span>
									</div>
									<Link to="">
										<img src="images/blog/blog-two.jpg" alt="" />
									</Link>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<a class="btn btn-primary" href=" ">Read More</a>
								</div>
								<div class="single-blog-post">
									<h3>Girls Pink T Shirt arrived in store</h3>
									<div class="post-meta">
										<ul>
											<li><i class="fa fa-user"></i> Mac Doe</li>
											<li><i class="fa fa-clock-o"></i> 1:33 pm</li>
											<li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
										</ul>
										<span>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-half-o"></i>
										</span>
									</div>
									<Link to="">
										<img src="images/blog/blog-three.jpg" alt="" />
									</Link>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<a class="btn btn-primary" href=" ">Read More</a>
								</div>
								<div class="pagination-area">
									<ul class="pagination">
										<li><Link to="" class="active">1</Link></li>
										<li><Link to="">2</Link></li>
										<li><Link to="">3</Link></li>
										<li><Link to=""><i class="fa fa-angle-double-right"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}
