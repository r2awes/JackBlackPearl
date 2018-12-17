import React, { Component } from 'react';
import './bkg.css';

export default class Background extends Component {
	render() {
		return(
			<div 
				style={{
					position: 'fixed',
					zIndex: 1
				}}
				className="ocean"
			>
				<div className="wave"></div>
				<div className="wave"></div>
				<div style={{
					zIndex: 1,
					position: "absolute",
					bottom: 100,
					margin: "auto",
					width: 100 + "%",
					display: 'flex',
					justifyContent: 'center'
				}}>
					<div className="sun"></div>
				</div>
				<div className="island"></div>
			</div>
		);
	}
}