"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentFailurePage() {
  const [animationData, setAnimationData] = useState(null);
  const searchParams = useSearchParams();

  const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const msg = searchParams.get("msg");

  const [userMessage, setUserMessage] = useState("Unknown error occurred");

  const getErrorMessage = (msg: string | null) => {
    const errorMap: Record<string, string> = {
      TPPGE009: "Technical issue at payment gateway. Please try again.",
      failure: "Transaction failed due to an unknown issue.",
    };
    return msg && errorMap[msg]
      ? errorMap[msg]
      : msg || "Unknown error occurred";
  };

  useEffect(() => {
    setUserMessage(getErrorMessage(msg));
  }, [msg]);

  useEffect(() => {
    // Load animation data dynamically
    fetch("/status/payment-failed.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="min-h-[190vh] bg-gradient-to-br from-red-50 via-red-100 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-6 text-center">
            <div className="mb-4">
              {animationData ? (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-4xl text-red-500">✗</div>
                </div>
              ) : (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Payment Failed
            </h1>
            <p className="text-red-100 text-sm">
              Your transaction could not be completed
            </p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-8">
            {/* Failure Message */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Transaction Unsuccessful
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unfortunately, your payment could not be processed at this time.
                Please try again or contact support if the issue persists.
              </p>
            </div>
            {/* Transaction Details */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
              <h3 className="text-sm font-semibold text-red-800 mb-2">
                Transaction Details
              </h3>
              <div className="text-xs text-red-700 space-y-1">
                <p>
                  <span className="font-medium text-red-800">
                    Transaction ID:
                  </span>{" "}
                  {txnId || "N/A"}
                </p>
                <p>
                  <span className="font-medium text-red-800">Amount:</span> ₹
                  {amount || "0.00"}
                </p>
                <p>
                  <span className="font-medium text-red-800">Status:</span>{" "}
                  Failure
                </p>
                <p>
                  <span className="font-medium text-red-800">Message:</span>{" "}
                  {userMessage}
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="text-center space-y-4">
              {/* Primary Button */}
              <Link
                href="/registration"
                className="inline-block w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Try Again
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
            <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-600 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-800 mb-2">
                    Common reasons for payment failure:
                  </h3>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>• Insufficient funds in your account</li>
                    <li>• Incorrect card details or expiry date</li>
                    <li>• Network connectivity issues</li>
                    <li>• Bank security restrictions</li>
                    <li>• Card limit exceeded</li>
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
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
