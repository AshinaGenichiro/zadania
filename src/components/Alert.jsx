import { react } from 'react';
import './Alert.css';

function Alert({ type = "success"||"warning"||"danger"}) {

	return (
		<div className={type} role="alert">
			<h1>Alert</h1>
			<div>To jest alert {type}</div>
		</div>
	);
}

export default Alert;

