import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentPost } from '../../../helper/blogHelper';

class Blogs extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Lo Más Reciente</span>
                        <h3 className="title">Nuestros Artículos y Reflexiones</h3>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {getRecentPost().map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <article className="sigma_post style-15">
                                    <div className="sigma_post-thumb">
                                        <Link to={"/blog-details/" + item.id}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="sigma_post-body">
                                        <div className="sigma_post-content">
                                            {/* <div className="sigma_post-meta is-absolute">
                                                <Link to={"/blog-details/" + item.id} className="sigma_post-date">
                                                    {item.postdate}
                                                </Link>
                                            </div> */}
                                            <h5>
                                                <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                            </h5>
                                            <p>{item.shorttext}</p>
                                        </div>
                                        <Link to={"/blog-details/" + item.id} className="btn-link">
                                            Read more
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;
