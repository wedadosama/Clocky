import { useEffect, useState } from "react";

function Clocky() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-2" style={{ backgroundImage: "url('/images/clock-bg.webp')" }}>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto flex flex-col items-center relative z-10 px-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-cyan-400 tracking-widest drop-shadow-[0_0_10px_cyan]">Clocky</h1>
        <div className="bg-gray-900 px-4 sm:px-6 md:px-10 py-4 rounded-3xl shadow-[0_0_40px_#00ffffaa] max-w-full overflow-x-auto">
          <p className="text-4xl sm:text-5xl md:text-7xl font-mono text-cyan-400 tracking-widest drop-shadow-[0_0_15px_cyan] select-none whitespace-nowrap">{formatTime(time)}</p>
        </div>
      </div>
    </div>
  );
}

export default Clocky;
