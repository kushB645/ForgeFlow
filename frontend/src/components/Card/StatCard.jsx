const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;