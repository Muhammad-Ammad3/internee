import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Digital() {
  const location = useLocation();
  const navigate = useNavigate();
  const webinar = location.state?.webinar;

  if (!webinar) {
    return (
      <div className="min-h-screen bg-[#2e2d2d] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-medium text-gray-400">
          No webinar data found.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 bg-[#50d523] text-white font-bold rounded-xl text-sm"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-500 min-h-screen font-sans antialiased text-white relative overflow-x-hidden pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-white transition-colors mb-8 group"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Webinars
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-6 relative overflow-hidden shadow-2xl flex flex-col text-left text-gray-900">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-6">
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] uppercase font-black tracking-wider px-3 py-1.5 rounded-lg bg-neutral-900 text-white shadow-xs">
                    {webinar.status}
                  </span>
                </div>

                <div className="w-full h-full p-8 flex flex-col justify-between relative bg-radial from-white to-gray-50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-[#50d523] rounded-xs" />
                      <span className="text-[11px] font-black text-gray-800 tracking-wide uppercase">
                        {webinar.speaker}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold leading-tight pl-5.5 max-w-45">
                      {webinar.role}
                    </p>
                  </div>

                  <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 mb-4 shrink-0">
                      <img
                        src={webinar.image}
                        alt={webinar.speaker}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <span className="text-[11px] font-black bg-neutral-900 text-white px-3 py-1 rounded-md uppercase tracking-wider mb-2">
                      Data Engineering
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none uppercase">
                      Career Guide &<br />
                      <span className="text-[#50d523]">
                        Current Market Worth
                      </span>
                    </h2>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Date & Time
                      </p>
                      <p className="text-xs font-black text-gray-900">
                        15 MARCH 2026
                      </p>
                    </div>
                    <div className="bg-neutral-900 text-white text-[11px] font-black px-2.5 py-1.5 rounded-lg tracking-wide">
                      10:30 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pl-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#50d523] mt-1.5 shrink-0" />
                  <p className="text-xs font-bold text-gray-600">
                    How Analytics Drives Business Growth
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#50d523] mt-1.5 shrink-0" />
                  <p className="text-xs font-bold text-gray-600">
                    The Rise of Data-Driven Marketing
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#50d523] mt-1.5 shrink-0" />
                  <p className="text-xs font-bold text-gray-600">
                    Current Agentic AI Market and Data Domain
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4">
              <span className="w-2 h-2 rounded-full bg-[#50d523]" />
              <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider">
                {webinar.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {webinar.title}
            </h1>

            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold text-lg text-[#50d523] border border-white/10 shrink-0">
                {webinar.speaker.charAt(0)}
              </div>
              <div>
                <p className="text-base font-bold text-white">
                  {webinar.speaker}
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  {webinar.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm font-semibold pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-[#50d523]"
                />
                <span>{webinar.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                <FontAwesomeIcon icon={faClock} className="text-[#50d523]" />
                <span>{webinar.duration}</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Tags:
              </p>
              <div className="flex flex-wrap gap-2">
                {webinar.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
