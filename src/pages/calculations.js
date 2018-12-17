
import classNames from 'classnames';
import React, { Component } from 'react';

export default class Calculations extends Component {

	render() {
		return(
			
			<div
				className={
					classNames({
						data: true,
						active: this.props.animate,
					})
				}
				style={{
					width: 90 + '%',
				}}
			>
				<iframe 
					src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKRLH5_4l2ZkjFeAKyqfseIMk_t0ceZ_NdlsgLQY_T9b2tXw3hqKyxrk6k1aBa1cYmptXmgivh0xzE/pubhtml?widget=true&amp;headers=false" 
					width="100%" 
					height="700px" 
					className="table"
				></iframe>
			</div>

		);
	}
}