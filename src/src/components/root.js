import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Pages
import HomePage from '../../pages';
import AboutPage from '../../pages/about';
import ServicesPage from '../../pages/services';
import PartnersPage from '../../pages/partners';
import ResourcePage from '../../pages/resource';
import BlogsPage from '../../pages/blogs';
import MethodologyPage from '../../pages/methodology';
import WebinarsPage from '../../pages/webinars';
import DigitalTestingPage from '../../pages/service/digital-testing';
import PerformanceTestingPage from '../../pages/service/performance-testing';
import TestModernizationPage from '../../pages/service/test-modernization';
import DevSecOpsPage from '../../pages/service/devsecops';
import ContactPage from '../../pages/contact';
import GitLabPressRelease from '../../pages/press/gitlab';

// Components
import CallToAction from './call-to-action';
import Footer from './footer';
import Header from './header';
import ToTop from './to-top';
import MicroServicesPress from '../../pages/press/microservices';

const Root = ({ location }) => {
	const [isContact, setIsContact] = React.useState(false);
	
	React.useEffect(() => {
		if (location.pathname === '/contact') {
			setIsContact(true);
		} else {
			setIsContact(false);
		}
	}, [location]);

	return (
		<>
			<Header />

			<Switch>
				<Route path="/about">
					<AboutPage />
				</Route>
		
				<Route path="/services">
					<ServicesPage />
				</Route>
		
				<Route path="/partners">
					<PartnersPage />
				</Route>
		
				<Route path="/resource">
					<ResourcePage />
				</Route>

				<Route path="/press/gitlab">
					<GitLabPressRelease />
				</Route>

				<Route path="/press/microservices">
					<MicroServicesPress />
				</Route>
		
				<Route path="/blogs">
					<BlogsPage />
				</Route>
		
				<Route path="/methodology">
					<MethodologyPage />
				</Route>
		
				<Route path="/webinars">
					<WebinarsPage />
				</Route>
		
				<Route path="/service/digital-testing">
					<DigitalTestingPage />
				</Route>
		
				<Route path="/service/performance-testing">
					<PerformanceTestingPage />
				</Route>
		
				<Route path="/service/test-modernization">
					<TestModernizationPage />
				</Route>
		
				<Route path="/service/devsecops">
					<DevSecOpsPage />
				</Route>
		
				<Route path="/contact">
					<ContactPage />
				</Route>
		
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>

			<CallToAction />

			{!isContact && <ToTop />}

			<Footer />
		</>
	);
};

export default withRouter(Root);
