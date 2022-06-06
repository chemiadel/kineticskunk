import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import IconPhone from '../assets/img/icon-phone.png';
import IconEmail from '../assets/img/icon-email.png';
import LinkedIn from '../assets/img/linkedin.svg';
import Twitter from '../assets/img/twitter.svg';
import Instagram from '../assets/img/instagram.svg';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [privacy, setPrivacy] = useState(false);

	const _onSubmit = async e => {
		e.preventDefault();

		setLoading(true);
		setErrors({});
		setSuccess(false);

		const { data } = await axios.post('https://www.qodify.eu/mailer/mail.php', qs.stringify({ name, email, message }));
		if (data.type === 'validation') {
			setErrors(data.message);
		} else if (data.type === 'error') {
			setErrors({ error: 'An error occured.' });
		} else if (data.includes('SMTP Error: Could not authenticate.')) {
			setErrors({ error: 'An error occured.' });
		} else {
			setSuccess(true);
			setName('');
			setEmail('');
			setMessage('');
			setPrivacy(false);
		}

		setLoading(false);
	}

	return (
		<main className="main-contact">
			<section className="contact">
				<div className="container">
					<div className="contact-title"><h1>CONTACT US</h1></div>

					<div className="contact-body">
						<div className="row">
							<div className="col-lg-5">
								<div className="contact-body-form">
									<h5>Get In Touch</h5>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="contact-body-form">
									{errors.error && <div className="alert alert-danger">{errors.error}</div>}
									{success && <div className="alert alert-success">Thank you so much for your message! We've received your message.</div>}

									<form onSubmit={e => _onSubmit(e)}>
										<div className="row">
											<div className="col-lg-12">
												<div className="form-group">
													<input
														type="text"
														className={`form-control ${errors.name ? 'is-error' : ''}`}
														placeholder="Name"
														value={name}
														onChange={({ target }) => setName(target.value)}
													/>
													{errors.name && (<small>{errors.name}</small>)}
												</div>
											</div>

											<div className="col-lg-12">
												<div className="form-group">
													<input
														type="text"
														className={`form-control ${errors.email ? 'is-error' : ''}`}
														placeholder="Email"
														value={email}
														onChange={({ target }) => setEmail(target.value)}
													/>
													{errors.email && (<small>{errors.email}</small>)}
												</div>
											</div>

											<div className="col-lg-12">
												<div className="form-group">
													<textarea
														rows="5"
														className={`form-control ${errors.message ? 'is-error' : ''}`}
														placeholder="Message"
														defaultValue={message}
														value={message}
														onChange={({ target }) => setMessage(target.value)}
													/>
													{errors.message && (<small>{errors.message}</small>)}
												</div>
											</div>

											<div className="col-lg-12">
												<div className="form-group is-checkbox">
													<input type="checkbox" id="privacy-policy" checked={privacy} defaultChecked={privacy}
														onChange={() => setPrivacy(!privacy)} required />
													<label htmlFor="privacy-policy">I agree to the processing of my personal data in accordance with Kinetic Skunk's <a href="/KS-Websiteprivacypolicy-030621-1625.pdf" target="_blank">Privacy Policy</a></label>
												</div>
											</div>

											<div className="col-lg-12">
												<div className="call-to-action-form-button">
													<button className="btn btn-block btn-orange" type="submit" disabled={loading}>
														{loading ? 'SENDING' : 'SEND MESSAGE'}
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="col-lg-5 ml-auto">
								<div className="contact-body-information">
									<div className="contact-body-information-item">
										<div className="contact-body-information-item-title">
											<h5>Call us</h5>
										</div>

										<div className="contact-body-information-item-body">
											<a href="tel:+27 21 300 6295">
												<i>
													<img src={IconPhone} alt="" />
												</i>

												+27 21 300 6295
											</a>
										</div>
									</div>

									<div className="contact-body-information-item">
										<div className="contact-body-information-item-title">
											<h5>Email us</h5>
										</div>

										<div className="contact-body-information-item-body">
											<a href="mailto:hello@kineticskunk.com">
												<i>
													<img src={IconEmail} alt="" />
												</i>

												hello@kineticskunk.com
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Contact;
