import { motion } from "framer-motion"

const Alerts = ({ children, onClose }) => {
  return (
    <div className="rounded-2xl fixed top-22 left-1/4 w-auto bg-yellow-100 border-b-2 border-yellow-500 text-yellow-800 shadow-md z-50 flex items-center justify-between px-6 py-4">
      <div className="flex-1 text-lg">
        <strong>{children}</strong>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="text-yellow-800 hover:text-yellow-900 ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Alerts;
