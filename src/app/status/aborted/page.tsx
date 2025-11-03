"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentAbortedPage() {
  const [animationData, setAnimationData] = useState(null);
  const searchParams = useSearchParams();

  const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const msg = searchParams.get("msg");

  const [userMessage, setUserMessage] = useState(
    "Unfortunately, your payment could not be processed at this time. Please try again or contact support if the issue persists."
  );

  const getAbortMessage = (msg: string | null) => {
    const messageMap: Record<string, string> = {
      "User Aborted":
        "Unfortunately, your payment could not be processed at this time. Please try again or contact support if the issue persists.",
      timeout:
        "Unfortunately, your payment could not be processed at this time. Please try again or contact support if the issue persists.",
      aborted:
        "Unfortunately, your payment could not be processed at this time. Please try again or contact support if the issue persists.",
    };
    return msg && messageMap[msg] ? messageMap[msg] : userMessage;
  };

  useEffect(() => {
    setUserMessage(getAbortMessage(msg));
  }, [msg, getAbortMessage]); // ✅ added missing dependency warning fix

  useEffect(() => {
    // Load animation data dynamically if needed
    fetch("/status/payment-aborted.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="min-h-[190vh] bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-6 text-center">
            <div className="mb-4">
              {animationData ? (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-4xl text-orange-500">⚠</div>
                </div>
              ) : (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Payment Aborted
            </h1>
            <p className="text-orange-100 text-sm">
              Your transaction was cancelled
            </p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-8">
            {/* Failure Message */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Payment Cancelled
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {userMessage}
              </p>
            </div>

            {/* Transaction Details */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
              <h3 className="text-sm font-semibold text-orange-800 mb-2">
                Transaction Details
              </h3>
              <div className="text-xs text-orange-700 space-y-1">
                <p>
                  <span className="font-medium text-orange-800">
                    Transaction ID:
                  </span>{" "}
                  {txnId || "N/A"}
                </p>
                <p>
                  <span className="font-medium text-orange-800">Amount:</span> ₹
                  {amount || "0.00"}
                </p>
                <p>
                  <span className="font-medium text-orange-800">Status:</span>{" "}
                  Aborted
                </p>
                <p>
                  <span className="font-medium text-orange-800">Message:</span>{" "}
                  {userMessage}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              {/* Primary Button */}
              <Link
                href="/registration"
                className="inline-block w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Try Payment Again
              </Link>

              {/* Secondary Buttons */}
              <div className="flex justify-center gap-3">
                <Link
                  href="/contact"
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm"
                >
                  Contact Support
                </Link>
                <Link
                  href="/"
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm"
                >
                  Go to Homepage
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-600 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-orange-800 mb-2">
                    Why this happened:
                  </h3>
                  <ul className="text-xs text-orange-700 space-y-1">
                    <li>• You may have cancelled the transaction manually</li>
                    <li>• The session expired or timed out</li>
                    <li>• The browser was closed before completion</li>
                    <li>• Network interruption during payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Need immediate assistance?{" "}
            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
