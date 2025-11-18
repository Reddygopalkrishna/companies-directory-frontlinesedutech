
import { Users, ExternalLink, MapPin, TrendingUp } from "lucide-react";

const CompanyCard = ({ company }) => {
  return (
    <div
      className="
        group
        relative
        rounded-3xl
        p-8
        transition-all duration-500 ease-out bg-gradient-to-br from-white backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(99,102,241,0.08),0_2px_8px_rgba(0,0,0,0.04)]
        hover:shadow-[0_20px_60px_rgba(99,102,241,0.15),0_8px_20px_rgba(0,0,0,0.06)]
        hover:-translate-y-2
        hover:border-indigo-200/60
        after:absolute after:inset-0 after:rounded-3xl
        after:bg-gradient-to-br after:from-white/40 after:to-transparent
        after:pointer-events-none after:opacity-0
        hover:after:opacity-100 after:transition-opacity after:duration-500
      "
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-3xl blur-3xl -z-10" />
      
      <div className="relative z-10">
    
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-700 transition-colors duration-300">
              {company.name}
            </h3>
            
            
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/60 text-indigo-700 text-xs font-medium border border-indigo-200/40">
                <TrendingUp size={12} strokeWidth={2} />
                {company.industry}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 text-purple-700 text-xs font-medium border border-purple-200/40">
                <MapPin size={12} strokeWidth={2} />
                {company.location}
              </span>
            </div>
          </div>
        </div>

      
        <p className="text-[0.95rem] text-slate-600 leading-relaxed mt-5 mb-6">
          {company.description}
        </p>

      
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

  
        <div className="flex items-center justify-between">
        
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
              <Users size={18} strokeWidth={2.5} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Team Size</span>
              <span className="text-lg font-bold text-slate-900">{company.employees}</span>
            </div>
          </div>

      
<a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/btn
              flex items-center gap-2 
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white font-semibold text-sm
              shadow-lg shadow-indigo-500/30
              hover:shadow-xl hover:shadow-indigo-500/40
              hover:scale-105
              transition-all duration-300
              border border-white/20
            "
          >
            <span>Visit Site</span>
            <ExternalLink 
              size={16} 
              strokeWidth={2.5} 
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" 
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;