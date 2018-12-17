import classNames from 'classnames';
import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

export default class Render extends Component {

	constructor(props) {
		this.unityContent = new UnityContent("unity/Build.json","unity/UnityLoader.js");
	}

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
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					flexDirection: 'row'
				}}
			>
				<Unity unityContent={this.unityContent}/>
			</div>
		);
	}
}