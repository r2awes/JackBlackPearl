import classNames from 'classnames';
import React, { Component } from 'react';
import {
	richard,
	alex,
	lucy,
	liam,
	martin,
	sean
} from '../images/index'

const names = [
	{name: "Alex Bluestein", role: "Team Captain", image: alex, pos: '50% 10%'  },
	{name: "Liam Brady", role: "Inventor, Calculations", image: liam, pos: '40% 20%'  },
	{name: "Lucy Johnson", role: "Records", image: lucy, pos: '40% 40%' },
	{name: "Martin Ackerman", role: "Calculations", image: martin, pos: '40% 10%'  },
	{name: "Richard McHorgh", role: "AutoCad 360, Web App", image: richard},
	{name: "Sean Cooper", role: "Calculations", image: sean, pos: '40% 0%'  },
];

export default class Roster extends Component {
	constructor(props) {
		super(props);
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
			>
				<div className="people">
				{ 
					names.map( (p) => {
						let i;
						let first = p.name.split(' ')[0].toLowerCase();
						console.log(p.image);
						
						return (
							<div>
								<div style={{
									height: 120,
									width: 120,
									borderRadius: 100+"%",
									backgroundPosition: p.pos ? p.pos : 'center',
									backgroundImage: `url(${p.image})`
								}}
								/>
								<h3>{p.name}</h3>
								<h5>{p.role}</h5>
							</div>
						)
					} )
				}
				</div>
			</div>
		);
	}
}