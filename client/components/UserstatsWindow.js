import React from 'react';

import {fetchSummonerInfo} from '../models/userInfo'

export default class UserstatsWindow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<input className="username" type="text" placeholder="Enter a Summoner's Name" />
				<input className="userSubmit" type="submit" onClick={fetchSummonerInfo} value="Submit" />
			</div>
		)
	}
}

// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Faxious?api_key=dbada37c-b6c0-43fe-bf1f-f1819507b3d7
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Faxious?api_key=dbada37c-b6c0-43fe-bf1f-f1819507b3d7