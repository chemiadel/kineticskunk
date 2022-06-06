import LinkedIn from '../../assets/img/linkedin.svg';
import Twitter from '../../assets/img/twitter.svg';
import Instagram from '../../assets/img/instagram.svg';

const Footer = () => (
	<footer>
		<div className="footer-social-media">
			<ul>
				<li>
					<a href="https://www.instagram.com/kineticskunk/?hl=en" rel="noreferrer" target="_blank">
						<i>
							<img src={Instagram} alt=""/>
						</i>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/kineticskunk-its/" rel="noreferrer" target="_blank">
						<i>
							<img src={LinkedIn} alt=""/>
						</i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/kineticskunk?lang=en" rel="noreferrer" target="_blank">
						<i>
							<img src={Twitter} alt=""/>
						</i>
					</a>
				</li>
			</ul>
		</div>

		<div className="footer-copyright">
			<p>Copyright 2021 Kinetic Skunk - All Rights Reserved</p>
		</div>

		<div className="footer-documents">
			<ul>
				<li><a href="/KS-Websitecookiepolicy-030621-1634.pdf" target="_blank">Cookie Policy</a></li>
				<li><a href="/KS-Websiteprivacypolicy-030621-1625.pdf" target="_blank">Privacy Policy</a></li>
				<li><a href="/KS-Websitestandardtermsandconditions-030621-1625.pdf" target="_blank">Terms & Conditions</a></li>
				<li><a href="/PAIA-Manual.pdf" target="_blank">PAIA</a></li>
			</ul>
		</div>
	</footer>
);

export default Footer;