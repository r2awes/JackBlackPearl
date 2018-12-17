import React, { Component } from 'react';
import Background from '../components/bkg';
import {wheel, jbp} from '../images';
import classNames from 'classnames';
import {Roster, Render, History} from './index';
import Calculations from './calculations';

const pages = [
	{ n: "Main", t: "Welcome to the Jack Black Pearl" },
	{ n: "Roles", t: "Meet the Crew" },
	{ n: "Calculations", t: "See Arr Math" },
	//{ n: "Render", t: "Check Out the Boat" },
	{ n: "History", t: "The Captain's Log" },
	{ n: "Rules", p: "https://higherlogicdownload.s3.amazonaws.com/SNAME/d8529458-b5f3-4aea-965c-a288f5b69c12/UploadedImages/2019/2019_Guidelines.pdf" }
]
export default class Main extends Component {

	state = {
		loc: "Main",
		act: false,
		tagline: `Welcome to the Jack Black Pearl`
	}

	activePage = (loc) => {
		if( loc === 'Roster' ) {
			return <Roster/>
		}
	}

	goto = loc => {
		this.setState({loc: loc.n, tagline: loc.t});
		if( loc.n !== "Main") {
			this.setState({act: true});
		}
		else {
			this.setState({act: false});
		}

		console.log("Going to", loc);
	}

	render() {
		return(
			<div className="main">
				<img 
					className={
						classNames({
							"wheel": true,
							"active": this.state.act 
						}) 
					} 
					src={wheel} 
					alt="wheel"/>
				<div 
					className={
						classNames({
							"textbox": true,
							"active": this.state.act 
						}) 
					}
				>
					<div className={
						classNames({
							"img": true,
							"active": this.state.act,
						})
					} 
					
					style={{
						backgroundImage: `url(${jbp})`
					}}/>
					<h1>{this.state.tagline}</h1>
					<h4>2018-2019 <a className="wj" href="https://www.montgomeryschoolsmd.org/SCHOOLS/wjhs/" >Walter Johnson</a> SNAME Team</h4>

					<div className={"menu"}>
						{ 
							pages.map( (p) => {
								if(p.p && p.n !== this.state.loc ) {
									return( <a href={ p.p } className="menuButton" >{p.n}</a> )
								}
								else if(p.n !== this.state.loc) {
									return( <p className="menuButton" onClick={ () => this.goto( p )}>{p.n}</p> )
								}
							} ) 
						}
					</div>
				</div>
				
				{ this.state.loc === 'Roles' ? <Roster animate={this.state.act}/> : this.state.loc === 'Render' ? <Render animate={this.state.act}/> : this.state.loc === 'History' ? <History animate={this.state.act}/> : this.state.loc === 'Calculations' ? <Calculations /> : null }
				
				<Background/>
			</div>
		);
	}
}