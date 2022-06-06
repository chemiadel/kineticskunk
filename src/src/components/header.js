// Packages
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Images
import Logo from '../../assets/img/logo.png';

const Header = ({ history }) => {
	const [isMenuOpen, setMenuStatus] = React.useState(false);

	history.listen((location) => {
		console.log({location})
		setMenuStatus(false);
	})

	return (
		<header className={isMenuOpen ? 'is-open' : ''}>
			<div className="header-item">
				<div className="header-item-logo">
					<Link to="/">
					 	<img src={Logo} alt="logo" />
					</Link>
				</div>
				<div className="header-item-toggle">
					<button type="button" onClick={() => setMenuStatus(!isMenuOpen)}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>

			<div className="header-item">
				<div className="header-item-menu">
					<ul>
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/about">ABOUT US</Link></li>
						<li><Link to="/methodology">METHODOLOGY</Link></li>
						<li><Link to="/services">SERVICES</Link></li>
						<li><Link to="/partners">PARTNERS</Link></li>
						<li><Link to="/resource">RESOURCES</Link></li>
						<div class="dropdown"> 
						<li class="dropbtn">LEGAL▼</li>
						<div class="dropdown-content">
							<Link to={`/KS-Websitecookiepolicy-030621-1634.pdf`} target="_blank">COOKIE POLICY</Link>
							<Link to={`/KS-Websiteprivacypolicy-030621-1625.pdf`} target="_blank">PRIVACY POLICY</Link>
							<Link to={`/KS-Websitestandardtermsandconditions-030621-1625.pdf`} target="_blank">TERMS & CONDITIONS</Link>
							<Link to={`/PAIA-Manual.pdf`}  target="_blank">PAIA</Link>
						</div>
						</div> 
						<li><Link to="/contact" className="btn btn-orange">CONTACT US</Link></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default withRouter(Header);
