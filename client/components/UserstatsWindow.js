import React from 'react';

import {fetchSummonerInfo} from '../models/userInfo'

export default class UserstatsWindow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			summonerName: '',
			summoner: '',
		}
	}

	fetchSummonerInfo(name) {
		fetchSummonerInfo(name)
			.then((summonerInfo) => {
				this.setState({summonerName: name, summoner: summonerInfo })
		})
	}
	render() {
		return (
			<div className="summoner-info">
				<form className='input-info'>
					<input className='summonerName' 
								 type="text" 
								 placeholder="Enter a Summoner's name"
				  />
					<button name='submit' 
									type='button' 
									value='Submit' 
									onClick={(e) => { 
										var name = document.getElementsByClassName('summonerName')[0].value.toLowerCase()
										this.fetchSummonerInfo(name);
										document.getElementsByClassName('summonerName').value = "";
				 }}> Submit </button>
				</form>
				{this.state.summoner === '' 
					? null
					:<div>
						<p>Summoner's Name:  {this.state.summonerName}</p>
						<p>Summoner's Level: {this.state.summoner[this.state.summonerName].summonerLevel}</p>
						<p>Summoner's ID:    {this.state.summoner[this.state.summonerName].id}</p>
					</div>
				}
			</div>
		)
	}
}

