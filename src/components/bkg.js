import React, { Component } from 'react';
import jbp from '../images/jbp.png';
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
					width: 100 + "% ",
					display: 'flex',
					justifyContent: 'center'
				}}>
					<div className="sun"></div>
				</div>
				<div className="box-drift">
					<div className="box-bob">
						<div className="box-pitch">
							<div className="left-sail"/>
							<div className="hull"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}