import React, { Component } from 'react';
import classNames from 'classnames';
import showdown from 'showdown';

const conv = new showdown.Converter();
const history = [
	{
		d: new Date("28 Sep 2018"),
		m:`
##The First Day
On the first day we contemplated the name of our team.

Some of the ideas include:
* South Sea Company
* SS USS HMS IJN HIJMS DKM Titanic
* And our favorite, the HMS Jack Black

We also distributed the roles of each of our team members. You can find those in the Roles tab above.

After that, we went over the rules and made a plan for this year's SNAME season.
`,
	},
	{
		d: new Date("2 Oct 2018"),
		m: `
##Planning the Design
While enduring the chilly fall air, during this meeting we drew designs on paper for later conversion to AutoDesk Inventor drawings.

Before we met, Alex asked everyone to make a few rudimentary drawings of their ideas for our boat and we determined that a catamaran shape would be best.

We also looked over the guidebook, found the calculations that we needed to do, and the concepts that we needed to understand.
`,
	},
	{
		d: new Date("9 Nov 2018"),
		m: `
##Calculations and Placement
In this meeting, we firstly discussed our calculations that we were asked do from the previous meeting.

We also finalized our plans for pyramid payload and the placement of the motor and rudder in our AutoDesk Inventor design.
`,
	},
	{
		d: new Date("17 Nov 2018"),
		m: `
##Calculations and Placement: II
Between this meeting and the meeting on the 9th, we found some errors our findings.

We primarily reconsidered our rudder. We previously wanted to use a larger rudder, however we discovered that using a smaller rudder would drasticly improve the handling of our boat.`,
	},
	{
		d: new Date("6 Dec 2018"),
		m: `
##Late Epiphanies

During this meeting we discovered a spreadsheet with functions that could perform nearly all of the calculations that we needed.

Of course, this was after we did said calculations manually.

Other happenings include: 
* Conversion from Inventor to AutoCad
* Contemplating and contracting a new logo
* Finalizing development of our Web App
`,
	},
	{
		d: new Date("12 Dec 2018"),
		m: `
##Final Talks
In this short meeting a few members finished computations and discussed the conversion to AutoCad. 
`,
	}
];

export default class History extends Component {
	componentDidMount() {
		this.switch( 0 );
	}
	
	state = {
		i: 0,
		t: null,
	}

	switch = (i) => {
		let t = conv.makeHtml(history[i].m);
		this.setState({i, t});
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
				<div className="history">

					{ 
						history.map( (h, index) => {
							return (
								<div className="date" style={{ marginTop: index === 0 ? 0 : 10, backgroundColor: this.state.i === index ? "#ffffff" : null }} onClick={() => this.switch(index)}>
									<h3> 
										{h.d.toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}
									</h3>
								</div>
							)
						} )
					}


				</div>
				<div className="did" dangerouslySetInnerHTML={{__html: this.state.t}}></div>
			</div>
		);
	}
}