import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function SanachalanIntroModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [closedForSession, setClosedForSession] = useState(false);

  // Auto-open when user lands on homepage (including refresh).
  useEffect(() => {
    if (location.pathname === "/") {
      if (!closedForSession) setOpen(true);
    } else {
      setOpen(false);
      setClosedForSession(false); // reset when leaving home
    }
  }, [location.pathname, closedForSession]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeForSession = () => {
    setClosedForSession(true);
    setOpen(false);
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeForSession}
      />
      <div className="relative bg-white rounded-xl shadow-2xl w-11/12 max-w-md p-6">
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl leading-none"
          onClick={closeForSession}
        >
          ×
        </button>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanchalan A.I.</h3>
        <p className="text-sm text-gray-600 mb-6">
          Our latest GRC platform 'Sanchalan A.I.' is launching soon. Stay tuned for more.
        </p>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={closeForSession}
          >
          Not now
          </button>
          <button
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            onClick={() => {
              setClosedForSession(true);
              setOpen(false);
              navigate("/campaigns");
            }}
          >
          Go to GRC Dashboard
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}