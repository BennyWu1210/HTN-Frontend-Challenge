import StatCard from "../shared/StatCard";

const textData = [
  "30+ Workshops",
  "100+ Mentors",
  "18 Countries",
  "0 Sleep",
  "300k+ in Prizes",
  "Lots of Geese",
  "30+ Sponsors",
  
]

const CardsDisplay = textData.map(text => <StatCard text={text} />)
const Scroller: React.FC = () => {
  return (
    <div className="mt-80 whitespace-nowrap overflow-hidden overflw scroll">
      <div className="animate-scroll" 
        style={{
        display: 'inline-block',
        animation: `scroll 18s linear infinite`
      }}>
        {CardsDisplay}
        {CardsDisplay}
      </div>
    </div>
  );
}
export default Scroller;