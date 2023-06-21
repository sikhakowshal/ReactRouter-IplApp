import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props

  const updatedRecentMatchDetails = {
    umpires: recentMatchDetails.umpires,
    result: recentMatchDetails.result,
    manOfTheMatch: recentMatchDetails.man_of_the_match,
    id: recentMatchDetails.id,
    date: recentMatchDetails.date,
    venue: recentMatchDetails.venue,
    competingTeam: recentMatchDetails.competing_team,
    competingTeamLogo: recentMatchDetails.competing_team_logo,
    firstInnings: recentMatchDetails.first_innings,
    secondInnings: recentMatchDetails.second_innings,
    matchStatus: recentMatchDetails.match_status,
  }

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = updatedRecentMatchDetails

  const lost = matchStatus === 'Lost' ? 'match-lost' : ''

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-competing-team-logo"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${lost}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
