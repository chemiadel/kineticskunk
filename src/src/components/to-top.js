import React from 'react';

const ToTop = () => {
	const [showButton, setShowButton] = React.useState(false);

	const _onClick = () => {
		window.scrollTo(0, 0);
	}

	const _onScroll = () => {
		if (window.pageYOffset > 200) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	}

	React.useEffect(() => {
		window.addEventListener('scroll', _onScroll);
	}, []);

	return showButton ? <button type="button" className="to-top" onClick={() => _onClick()}></button> : <div></div>;
}

export default ToTop;
