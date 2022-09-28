import React from 'react'

export default function ContactUs() {

    return (
        <React.Fragment>
            <div id="contact-page" className="container">
                <div className="bg">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title text-center">Contact <strong>Us</strong></h2>
                            {/* <div id="gmap" className="contact-map">
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="contact-form">
                                <h2 className="title text-center">Get In Touch</h2>
                                <div className="status alert alert-success" ></div>
                                <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                                    <div class="form-group col-md-6">
                                        <input type="text" name="name" class="form-control" required="required" placeholder="Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" name="email" class="form-control" required="required" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="text" name="subject" class="form-control" required="required" placeholder="Subject" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Your Message Here"></textarea>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="submit" name="submit" class="btn btn-primary pull-right" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-info">
                                <h2 className="title text-center">Contact Info</h2>
                                <address>
                                    <p>E-Shopper Inc.</p>
                                    <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                                    <p>Newyork USA</p>
                                    <p>Mobile: +2346 17 38 93</p>
                                    <p>Fax: 1-714-252-0026</p>
                                    <p>Email: info@e-shopper.com</p>
                                </address>
                                <div className="social-networks">
                                    <h2 className="title text-center">Social Networking</h2>
                                    <ul>
                                        <li>
                                            <a href=" # "><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href=" # "><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href=" # "><i className="fa fa-google-plus"></i></a>
                                        </li>
                                        <li>
                                            <a href=" # "><i className="fa fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}