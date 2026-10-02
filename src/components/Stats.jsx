function Stats() {
  const stats = [
    {
      number: "85%",
      title: "Brand Recall",
      description: "Increase",
    },
    {
      number: "72%",
      title: "Higher User",
      description: "Engagement",
    },
    {
      number: "94%",
      title: "Positive Visual",
      description: "Impact",
    },
  ];

  return (
    <div className="hero-stats mt-12 flex flex-col gap-7 sm:flex-row sm:gap-8 md:mt-16 md:gap-10 lg:gap-14">
      {stats.map((stat) => (
        <div
          key={stat.number}
          className="hero-stat flex items-start gap-4 border-white/20 sm:border-r sm:pr-8 last:border-0" >
          <strong className="text-3xl font-bold md:text-4xl">
            {stat.number}
          </strong>

          <span className="pt-1 text-[9px] uppercase leading-4 tracking-[0.2em] text-white/55 md:text-[10px]">
            {stat.title}
            <br />
            {stat.description}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Stats;