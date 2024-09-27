import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';

class Header extends Navhelper {
    render() {
        return (
            <Fragment>
                {/* Mobile Menu */}
                <aside className={this.state.navMethod === true ? 'sigma_aside aside-open' : 'sigma_aside'}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Mobile Menu */}
                {/* Header */}
                <header className="sigma_header header-absolute style-5 other can-sticky">
                    <div className="sigma_header-top dark-bg d-none d-md-block">
                        <div className="container-fluid">
                            <div className="sigma_header-top-inner">
                                <div className="sigma_header-top-links">
                                    <ul className="sigma_header-top-nav">
                                        <li>
                                            <Link to="#">
                                                <i className="fal fa-envelope" />
                                                example@example.com
                                            </Link>
                                        </li>
                                        <li>
                                        <a href="https://www.google.com.mx/maps/place/Dental+Diaz/@32.6369644,-115.436959,17z/data=!4m15!1m8!3m7!1s0x80d77127a2c0d655:0x86acb3965b5add76!2sDental+Diaz!8m2!3d32.6369599!4d-115.4343841!10e1!16s%2Fg%2F11k50jvfjk!3m5!1s0x80d77127a2c0d655:0x86acb3965b5add76!8m2!3d32.6369599!4d-115.4343841!16s%2Fg%2F11k50jvfjk?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <i className="fal fa-map-marker-alt" />
                                                 Oakwood, Los Angeles, CA 1098
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sigma_header-top-contacts">
                                    <ul className="sigma_header-top-nav">
                                         <li>
                                            <a href="https://www.facebook.com/DentalDiazmxl" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-google" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sigma_header-middle">
                        <div className="container-fluid">
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link to="/" className="sigma_logo">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo-light.png"} alt="logo" />
                                    </Link>
                                </div>
                                <ul className="navbar-nav">
                                    {/* Data */}
                                    {navigation.map((item, i) => (
                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                            {item.child === true ?
                                                <Link to="#">{item.linkText}</Link>
                                                :
                                                <Link to={item.link}>{item.linkText}</Link>
                                            }
                                            {item.child === true ?
                                                <ul className="sub-menu">
                                                    {item.submenu.map((item, i) => (
                                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                                            {item.child === true ?
                                                                <Link to="#">{item.linkText}</Link>
                                                                :
                                                                <Link to={item.link}>{item.linkText}</Link>
                                                            }
                                                            {item.child === true ?
                                                                <ul className="sub-menu">
                                                                    {item.submenu.map((item, i) => (
                                                                        <li className="menu-item" key={i}>
                                                                            <Link to={item.link}>{item.linkText}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                : ''}
                                                        </li>
                                                    ))}
                                                </ul>
                                                : ''}
                                        </li>
                                    ))}
                                    {/* Data */}
                                </ul>
                                <div className="sigma_header-controls style-2">
                                    <ul className="sigma_header-controls-inner">
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <Link to="#" className="sigma_header-control-search bg-transparent border-0" title="Search" onClick={this.toggleSearch}>
                                                <i className="far fa-search" />
                                            </Link>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <Link to="/contact" className="sigma_btn btn-sm">
                                                Get a Quote
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </li>
                                        <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header */}
                {/* Search Bar */}
                <div className={this.state.searchMethod === true ? 'search-form-wrapper open' : 'search-form-wrapper'}>
                    <div className="search-trigger sigma_close" onClick={this.toggleSearch}>
                        <span />
                        <span />
                    </div>
                    <form className="search-form">
                        <input type="text" placeholder="Search..." required />
                        <button type="submit" className="search-btn">
                            <i className="fal fa-search m-0" />
                        </button>
                    </form>
                </div>
                {/* Search Bar */}
            </Fragment>
        );
    }
}

export default Header;