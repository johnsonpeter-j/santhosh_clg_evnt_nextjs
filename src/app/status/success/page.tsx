"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function PaymentSuccessInner() {
  const [animationData, setAnimationData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const searchParams = useSearchParams();
  const receiptRef = useRef<HTMLDivElement>(null);

  const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const msg = searchParams.get("msg");

  useEffect(() => {
    fetch("/status/payment-successful.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const generatePDF = async () => {
    if (!receiptRef.current) {
      alert("Receipt content not found. Please refresh and try again.");
      return;
    }

    setIsGeneratingPDF(true);
    try {
      const canvas = await html2canvas(receiptRef.current, {
        useCORS: true,
        background: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210;
      const margin = 20;
      const imgWidth = pdfWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", margin, 20, imgWidth, imgHeight);
      pdf.setFontSize(8);
      pdf.text(
        `Generated on ${new Date().toLocaleString("en-IN")}`,
        pdfWidth / 2,
        imgHeight + 40,
        { align: "center" }
      );

      const fileName = `payment-receipt-${txnId || "unknown"}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-[180vh] bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div
          ref={receiptRef}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6 text-center">
            <div className="mb-4">
              {animationData ? (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-4xl text-green-500">✓</div>
                </div>
              ) : (
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Payment Successful!
            </h1>
            <p className="text-green-100 text-sm">
              Your transaction has been completed successfully
            </p>
          </div>

          <div className="px-8 py-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Thank you for your sponsorship!
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your payment has been processed and you will receive a
                confirmation email shortly. Your support helps make this event
                possible.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
              <h3 className="text-sm font-semibold text-green-800 mb-2">
                Transaction Details
              </h3>
              <div className="text-xs text-green-700 space-y-1">
                <p>
                  <span className="font-medium text-green-800">
                    Transaction ID:
                  </span>{" "}
                  {txnId || "N/A"}
                </p>
                <p>
                  <span className="font-medium text-green-800">Amount:</span> ₹
                  {amount || "0.00"}
                </p>
                <p>
                  <span className="font-medium text-green-800">Status:</span>{" "}
                  Success
                </p>
                <p>
                  <span className="font-medium text-green-800">Message:</span>{" "}
                  {msg || "Success"}
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Link
                href="/registration"
                className="inline-block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Back to Registration
              </Link>

              <div className="flex justify-center gap-3">
                <button
                  onClick={generatePDF}
                  disabled={isGeneratingPDF}
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isGeneratingPDF ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Print PDF
                    </>
                  )}
                </button>
                <Link
                  href="/"
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm"
                >
                  Go to Homepage
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-green-800 mb-1">
                    What happens next?
                  </h3>
                  <p className="text-xs text-green-700 leading-relaxed">
                    Your payment has been successfully processed. Keep your
                    transaction details for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ✅ Wrap with Suspense to fix Next.js 15 build error
export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PaymentSuccessInner />
    </Suspense>
  );
}
