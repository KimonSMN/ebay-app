// PendingApproval.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PendingApproval() {
  const nav = useNavigate();
  return (
    <div className="min-h-[60vh] grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-semibold mb-2">
          Waiting for Approval by Admin
        </h1>
        <p className="opacity-80">
          You’ll get access as soon as you’re approved.
        </p>
        <button className="mt-6 px-4 py-2 rounded bg-black text-white">
          Check again
        </button>
      </div>
    </div>
  );
}
