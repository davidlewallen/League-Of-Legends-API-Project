import React from 'react';

import UserstatsWindow from './UserstatsWindow'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<div>
				<UserstatsWindow />
			</div>
		)
	}
}