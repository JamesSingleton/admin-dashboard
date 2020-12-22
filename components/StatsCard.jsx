const StatsCard = ({title, badgeText}) => {
  return (
    <div className="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
      <div className="h-full border rounded shadow">
        <div className="flex items-center justify-between py-3 px-4 border-b">
          <h3 className="text-lg font-semibold font-heading">{title}</h3>
          <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">{badgeText}</span>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="text-3xl mb-3 font-semibold font-heading font-semibold">108,200</h3>
          <span>Total income</span>
          <span className="text-green-500">82%</span>
        </div>
      </div>
    </div>
  )
};

export default StatsCard;