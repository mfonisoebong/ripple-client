import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";

export const Pagination: FC = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <p className={"text-[#616161] text-xs md:text-sm"}>1 - 20 of 10 pages</p>
      <div className="flex items-center space-x-3">
        <button>
          <ChevronLeft className={"stroke-1"} />
        </button>
        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline border-b-[0.1rem] border-[#F36F2E]"
          }
        >
          1
        </span>
        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline text-gray-500"
          }
        >
          2
        </span>
        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline text-gray-500"
          }
        >
          3
        </span>
        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline text-gray-500"
          }
        >
          4
        </span>
        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline text-gray-500"
          }
        >
          ...
        </span>
        <button>
          <ChevronRight className={"stroke-1"} />
        </button>
      </div>
    </div>
  );
};
