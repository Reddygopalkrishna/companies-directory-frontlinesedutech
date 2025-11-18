import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination =({ current, totalItems, perPage, onPageChange })=>{
  const totalPages = Math.ceil(totalItems / perPage);
  const batchSize = 3;

  if (totalPages <= 1) return null;

  const currentBatch = Math.floor((current - 1) / batchSize);

  const start = currentBatch * batchSize + 1;
  const end = Math.min(start + batchSize - 1, totalPages);

  const pagesToShow = [];
  for (let i = start; i <= end; i++) pagesToShow.push(i);

  const goToPrevBatch = () => {
    if (start > 1) onPageChange(start - 1);
  };

  const goToNextBatch = () => {
    if (end < totalPages) onPageChange(end + 1);
  };

  return (
    <div className="flex justify-center mt-12 fade-up">
      <div className="flex items-center gap-2 glass px-4 py-3 rounded-xl shadow-lg border border-slate-200/50">

        {/* Prev */}
        <button
          onClick={goToPrevBatch}
          disabled={start === 1}
          className={`h-10 w-10 flex items-center justify-center rounded-lg border transition-all 
            ${
              start === 1
                ? "opacity-30 cursor-not-allowed bg-white/40 border-slate-300"
                : "bg-white/70 hover:bg-indigo-50 border-slate-300"
            }
          `}
        >
          <ChevronLeft size={18} strokeWidth={2} className="text-slate-700" />
        </button>

        {/* Page Numbers */}
        {pagesToShow.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 px-4 rounded-lg border text-sm font-medium transition-all
              ${
                page === current
                  ? "bg-indigo-600 text-white border-indigo-600 shadow"
                  : "bg-white/70 text-slate-700 border-slate-300 hover:bg-indigo-50"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={goToNextBatch}
          disabled={end === totalPages}
          className={`h-10 w-10 flex items-center justify-center rounded-lg border transition-all 
            ${
              end === totalPages
                ? "opacity-30 cursor-not-allowed bg-white/40 border-slate-300"
                : "bg-white/70 hover:bg-indigo-50 border-slate-300"
            }
          `}
        >
          <ChevronRight size={18} strokeWidth={2} className="text-slate-700" />
        </button>

      </div>
    </div>
  );
}


export default Pagination;