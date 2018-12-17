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
				style={{
					width: 100 + '%',
					height: 100 + '%',
					position: 'absolute',
				}}
			>
				<Unity unityContent={this.unityContent}/>
			</div>
		);
	}
}