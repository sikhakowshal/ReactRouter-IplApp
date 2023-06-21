import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedLatestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="match-venue-logo-container">
        <div className="match-venue-details-container">
          <p className="competing-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="match-highlights-container">
        <h4 className="highlights-title">First Innings</h4>
        <p className="highlights-description">{firstInnings}</p>
        <h4 className="highlights-title">Second Innings</h4>
        <p className="highlights-description">{secondInnings}</p>
        <h4 className="highlights-title">Man Of The Match</h4>
        <p className="highlights-description">{manOfTheMatch}</p>
        <h4 className="highlights-title">Umpires</h4>
        <p className="highlights-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
