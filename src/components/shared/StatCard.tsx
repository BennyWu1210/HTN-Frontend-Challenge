interface StatProps {
  text: string;
}

const StatCard: React.FC<StatProps> = ({ text }) => {
  return <div
    className="w-card inline-block mx-10 text-almond overflow-hidden p-3 text-center text-3xl placeholder:font-bold"
    style={{ textShadow: "rgb(234,224,213,0.7) 0px 0 20px" }}>
    {text}
  </div>
}
export default StatCard;