import { FlagType } from "../MainContent";
import "./FlagCard.css"

type FlagCardProps = {
  flag: FlagType
}

const FlagCard: React.FC<FlagCardProps> = ({flag}) => {
  return <section className="flag-card">
    <img src={flag.flags.png}/>
    <div className="flag-card-info">
      {/* TODO: Consider wether flag name should be h2 tag or not */}
      <h2 className="flag-card-name">{flag.name}</h2>
      <div>
        {/* TODO: Could change data structure to map here instead */}
        <p>Population: <span>{flag.population.toLocaleString()}</span></p>
        <p>Region: <span>{flag.region}</span></p>
        <p>Capital: <span>{flag.capital}</span></p>
      </div>
    </div>
  </section>;
};

export default FlagCard;