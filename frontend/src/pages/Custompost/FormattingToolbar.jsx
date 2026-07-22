import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiList,
  FiLink,
  FiCode,
} from "react-icons/fi";
import { LuHeading1, LuHeading2, LuQuote } from "react-icons/lu";
import { HiOutlineListBullet } from "react-icons/hi2";

const FormattingToolbar = () => {
  const tools = [
    { icon: <FiBold />, title: "Bold" },
    { icon: <FiItalic />, title: "Italic" },
    { icon: <FiUnderline />, title: "Underline" },
    { icon: <LuHeading1 />, title: "Heading 1" },
    { icon: <LuHeading2 />, title: "Heading 2" },
    { icon: <HiOutlineListBullet />, title: "Bullet List" },
    { icon: <FiList />, title: "Numbered List" },
    { icon: <LuQuote />, title: "Quote" },
    { icon: <FiCode />, title: "Code" },
    { icon: <FiLink />, title: "Link" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 px-6 py-4">
      {tools.map((tool) => (
        <button
          key={tool.title}
          title={tool.title}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default FormattingToolbar;