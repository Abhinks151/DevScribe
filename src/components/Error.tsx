import type { ErrorMessageProps } from "../types/ErrorMessageType";

const Error = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg p-3 mt-1">
      {message}
    </div>
  );
};

export default Error;
