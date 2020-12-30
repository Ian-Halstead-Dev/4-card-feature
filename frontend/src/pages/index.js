import React from 'react';

// Components
import Card from '../components/Card';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<div className="header-content">
					<div className="header">
						<h2>Reliable, efficient delivery</h2>
						<h1>Powered by Technology</h1>
						<p>
							Our Artificial Intelligence powered tools use millions of project data points to ensure that
							your project is successful
						</p>
					</div>
				</div>

				<div className="card-container">
					<div className="card-column">
						<Card
							title="Supervisor"
							sentence="Monitors activity to identify project roadblocks"
							imgSrc="./images/icon-supervisor.svg"
							imgAlt="Magnifying glass with eye"
							class="supervisor"
						/>
					</div>
					<div className="card-column">
						<Card
							title="Team Builder"
							sentence="Scans our talent network to create the optimal team for your project"
							imgSrc="./images/icon-team-builder.svg"
							imgAlt="House in-front of webpage"
							class="team-builder"
						/>
						<Card
							title="Karma"
							sentence="Regularly evaluates our talent to ensure quality"
							imgSrc="./images/icon-karma.svg"
							imgAlt="Shining Light Bulb"
							class="karma"
						/>
					</div>
					<div className="card-column">
						<Card
							title="Calculator"
							sentence="Uses data from past projects to provide better delivery estimates"
							imgSrc="./images/icon-calculator.svg"
							imgAlt="Computer"
							class="calculator"
						/>
					</div>
				</div>

				<footer>
					<p className="attribution">
						Challenge by{' '}
						<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
							{' '}
							Frontend Mentor
						</a>. Coded by <a href="https://github.com/Ian-Halstead-Dev">Ian Halstead</a>.
					</p>
				</footer>
			</div>
		);
	}
}
