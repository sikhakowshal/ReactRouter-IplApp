import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedTeamMatchesData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchesData: updatedTeamMatchesData, isLoading: false})
  }

  renderTeamMatchesPage = () => {
    const {teamMatchesData} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData

    return (
      <div className="team-matches-content-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <p className="latest-match-title">Latest Match</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={60} width={60} />
          </div>
        ) : (
          this.renderTeamMatchesPage()
        )}
      </div>
    )
  }
}

export default TeamMatches
