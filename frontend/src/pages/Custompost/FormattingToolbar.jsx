import { FiList, FiLink, FiCode } from "react-icons/fi";
import { LuQuote } from "react-icons/lu";
import { HiOutlineListBullet } from "react-icons/hi2";

const FormattingToolbar = ({ content, setContent }) => {
  const insertAtCursor = (text) => {
    const textarea = document.querySelector("#linkedin-editor");

    if (!textarea) {
      setContent((prev) => prev + text);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newContent = content.slice(0, start) + text + content.slice(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();

      const newPosition = start + text.length;

      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  const addBullet = () => {
    insertAtCursor("• ");
  };

  const addNumber = () => {
    insertAtCursor("1. ");
  };

  const addQuote = () => {
    insertAtCursor("> ");
  };

  const addCode = () => {
    insertAtCursor("`code`");
  };

  const addLink = () => {
    const input = window.prompt("Enter a URL (example: https://example.com):");

    if (!input) return;

    let url = input.trim();

    // Add https:// if the user didn't provide a protocol
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    try {
      new URL(url);
    } catch {
      window.alert("Please enter a valid URL.");
      return;
    }

    insertAtCursor(url);
  };

  const tools = [
    {
      icon: <HiOutlineListBullet />,
      title: "Bullet List",
      action: addBullet,
    },
    {
      icon: <FiList />,
      title: "Numbered List",
      action: addNumber,
    },
    {
      icon: <LuQuote />,
      title: "Quote",
      action: addQuote,
    },
    {
      icon: <FiCode />,
      title: "Code",
      action: addCode,
    },
    {
      icon: <FiLink />,
      title: "Link",
      action: addLink,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 px-6 py-4">
      {tools.map((tool) => (
        <button
          key={tool.title}
          type="button"
          title={tool.title}
          onClick={tool.action}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default FormattingToolbar;
