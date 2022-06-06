import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const CallToAction = () => {
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

		const { data } = await axios.post(
			'https://www.qodify.eu/mailer/mail.php',
			qs.stringify({ name, email, message })
		);

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
		<section className="call-to-action">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="call-to-action-body">
							<h3>Ready to get started?</h3>

							<p>Contact us today for software quality <br /> assurance solutions.</p>

							<Link to="/contact" className="btn btn-orange">CONTACT US</Link>
						</div>
					</div>

					<div className="col-lg-5 ml-auto">
						<div className="call-to-action-form">
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
												onChange={() => setPrivacy(!privacy)}
												required />
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
				</div>
			</div>
		</section>
	);
}

export default CallToAction;