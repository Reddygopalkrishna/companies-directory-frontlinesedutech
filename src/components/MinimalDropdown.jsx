import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const MinimalDropdown =({ icon, value, onChange, options = [] })=>{
  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
   
      <button
        onClick={() => setOpen(!open)}
        className="w-full pl-8 pr-8 py-2.5 h-[44px]
                   bg-slate-50/70 backdrop-blur-sm 
                   border border-slate-300/50 rounded-lg 
                   text-sm text-slate-700 flex items-center relative"
      >
        <span className="absolute left-3 text-indigo-500">
          {icon}
        </span>

        <span className="text-left w-full">{value}</span>

        <ChevronDown
          size={16}
          className={`absolute right-3 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

    
      {open && (
        <div
          className="absolute left-0 right-0 mt-2 bg-white
                     border border-slate-300/50 rounded-lg shadow-xl 
                     z-50 animate-dropdownFade"
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer 
                ${
                  opt === value
                    ? "bg-indigo-100 text-indigo-700 font-medium"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default  MinimalDropdown;