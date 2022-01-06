import React from 'react'

import Widget from '../components/common/Widget'

import Schedule from '../components/widget/widgetleft/Schedule'
import ChannelRatio from '../components/widget/widgetleft/ChannelRatio'

import ContentSummary from '../components/widget/widgetright/ContentSummary'
import LineChart from '../components/widget/widgetright/Graph/LineChart'
import BarChart from '../components/widget/widgetright/Graph/BarChart'

import './Home.scss'
import { ChevronRight, ChevronDown, ContentIcon1, ContentIcon2, ContentIcon3, Download } from '../components/common/Icons'


const Home = () => {
	return (
		<section className="home">

			<div className="homeLeft">
				<div className="homeProfil">
					<h1 className="s32 w700">Dashboard</h1>
					<p className="s16 w400 welcome">Welcome back, Maxime Durand!</p>
				</div>
				<div className="schedule">
					<Widget>
						<div className="scheduleTitle widgetTitle">
							<h2 className="s20 w700">Schedule Content</h2>
							<div className="details">
								<p className="s14 w600 seeDetails">See Details</p>
								<ChevronRight />
							</div>
						</div>
						<hr className="hr"/>
						<div className="scheduleList">
							<Schedule month="Jul"
							date="18"
							todo="Write 5 microblog articles on Instagram"
							type="Offiche / Marketing"
							percentage="72"/>
							
							<hr />

							<Schedule month="Jul"
							date="24"
							todo="Publish 20 post on Dribbles"
							type="Offiche / Marketing"
							percentage="14"/>

							<hr />

							<Schedule month="Jul"
							date="18"
							todo="Drafting Material for Travel Campaign"
							type="Drafting"
							percentage="43"/>
						</div>
						
					</Widget>
				</div>
				<div className="topChannels">
					<Widget>
						<div className="channelTitle widgetTitle">
							<h2 className="s20 w700">Top Channels</h2>
							<div className="details">
								<p className="s14 w600 seeDetails">See Details</p>
								<ChevronRight />
							</div>
						</div>
						<hr className="hr"/>
						<ChannelRatio>
							
						</ChannelRatio>
					</Widget>
				</div>
			</div>

			<div className="homeRight">

				<div className="titleContentSummary">
					<h3 className="s20 w700">Content Reach Summary</h3>
					<div className="timePeriod">
						<p className="s14 w700">Monthly</p>
						<ChevronDown />
					</div>
				</div>

				<div className="contentSummary">
					<Widget>
						<div className="contentList">
							<ContentSummary
							categorie="Total Reach"
							CategorieIcon={ContentIcon1}
							categorieIconColor="#B0E8FF"
							reachNumber="150"/>
							<ContentSummary
							categorie="Paid Reach"
							CategorieIcon={ContentIcon2}
							categorieIconColor="#9ACCFF"
							reachNumber="234"/>
							<ContentSummary
							categorie="Organic Reach"
							CategorieIcon={ContentIcon3}
							categorieIconColor="#FF98D1"
							reachNumber="43"/>
						</div>
						<div className="downloadButton">
							<Download />
							<p className="s16 w700">CSV</p>
						</div>
						
					</Widget>
				</div>

				<div className="FrequencyGraph">
					<LineChart></LineChart>
				</div>

				<h3 className="s20 w700">Audicence Visitor</h3>

				<div className="audienceHeader">
					<div className="labels">
						<div>
							<div className="male"></div>
							<p className="s14 w400">Male(234k)</p>
						</div>
						<div className="femaleDiv">
							<div className="female"></div>
							<p className="s14 w400">Female(463k)</p>
						</div>
					</div>
					<div className="period">
						<p className="S14 w700">April 2021 - September 2021</p>
						<ChevronDown />
					</div>
				</div>

				<div className="barGraph">
					<BarChart></BarChart>
				</div>

			</div>

		</section>
	)
}

export default Home
