"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PaymentSuccessPage() {
  const [animationData, setAnimationData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const searchParams = useSearchParams();
  const receiptRef = useRef<HTMLDivElement>(null);

  const txnId = searchParams.get("txnId");
  const amount = searchParams.get("amount");
  const msg = searchParams.get("msg");

  useEffect(() => {
    // Load animation data dynamically
    fetch("/status/payment-successful.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const generatePDF = async () => {
    if (!receiptRef.current) {
      console.error('Receipt ref is not available');
      alert('Receipt content not found. Please refresh the page and try again.');
      return;
    }
    
    setIsGeneratingPDF(true);
    try {
      console.log('Starting PDF generation...');
      
      // Wait a bit for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Try the visual approach first
      const canvas = await html2canvas(receiptRef.current, {
        useCORS: true,
        background: '#ffffff',
        logging: true,
        allowTaint: true,
        width: receiptRef.current.offsetWidth,
        height: receiptRef.current.offsetHeight,
      });

      console.log('Canvas created:', canvas.width, 'x', canvas.height);

      if (canvas.width === 0 || canvas.height === 0) {
        throw new Error('Canvas has zero dimensions');
      }

      const imgData = canvas.toDataURL('image/png', 1.0);
      console.log('Image data generated, length:', imgData.length);

      if (!imgData || imgData === 'data:,') {
        throw new Error('Failed to generate image data');
      }

      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Calculate dimensions to fit the content properly
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm
      const margin = 20;
      const imgWidth = pdfWidth - (margin * 2);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      console.log('PDF dimensions:', imgWidth, 'x', imgHeight);

      // Center the receipt image (no header)
      const x = margin;
      const y = 20;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

      // Add footer
      const footerY = y + imgHeight + 15;
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(8);
      pdf.text(`Generated on ${new Date().toLocaleString('en-IN')}`, pdfWidth / 2, footerY, { align: 'center' });

      const fileName = `payment-receipt-${txnId || 'unknown'}-${new Date().toISOString().split('T')[0]}.pdf`;
      console.log('Saving PDF:', fileName);
      
      pdf.save(fileName);
      console.log('PDF saved successfully');
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : undefined;
      const errorName = error instanceof Error ? error.name : 'Unknown';
      
      console.error('Error generating PDF:', error);
      console.error('Error details:', {
        message: errorMessage,
        stack: errorStack,
        name: errorName
      });
      
      // Try fallback method
      try {
        console.log('Trying fallback PDF generation...');
        const fallbackPdf = new jsPDF('p', 'mm', 'a4');
        
        // Professional PDF Design
        const pageWidth = 210;
        const pageHeight = 297;
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);
        
        // Success Message (no header, no icon)
        fallbackPdf.setTextColor(0, 0, 0);
        fallbackPdf.setFontSize(20);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Payment Successful!', pageWidth / 2, 30, { align: 'center' });
        
        fallbackPdf.setFontSize(12);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Your transaction has been completed successfully', pageWidth / 2, 40, { align: 'center' });
        
        // Receipt Box - Compact design
        const receiptY = 55;
        const receiptHeight = 85; // Reduced height
        
        // Draw receipt border with lighter styling
        fallbackPdf.setDrawColor(200, 200, 200);
        fallbackPdf.setLineWidth(0.5);
        fallbackPdf.setFillColor(255, 255, 255);
        fallbackPdf.roundedRect(margin, receiptY, contentWidth, receiptHeight, 3, 3, 'FD');
        
        // Receipt Header with rounded corners
        fallbackPdf.setFillColor(240, 253, 244);
        fallbackPdf.roundedRect(margin, receiptY, contentWidth, 15, 3, 3, 'F');
        
        fallbackPdf.setTextColor(0, 0, 0);
        fallbackPdf.setFontSize(13);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Transaction Details', margin + 8, receiptY + 10);
        
        // Transaction Details - Compact spacing
        const detailY = receiptY + 22;
        const lineHeight = 6; // Reduced line height
        
        fallbackPdf.setFontSize(10);
        fallbackPdf.setFont('helvetica', 'normal');
        
        // Transaction ID
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Transaction ID:', margin + 8, detailY);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text(txnId || 'N/A', margin + 45, detailY);
        
        // Amount
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Amount:', margin + 8, detailY + lineHeight);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text(`Rs. ${amount || '0.00'}`, margin + 45, detailY + lineHeight);
        
        // Status
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Status:', margin + 8, detailY + (lineHeight * 2));
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.setTextColor(34, 197, 94);
        fallbackPdf.text('Success', margin + 45, detailY + (lineHeight * 2));
        
        // Date
        fallbackPdf.setTextColor(0, 0, 0);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Date:', margin + 8, detailY + (lineHeight * 3));
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text(new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }), margin + 45, detailY + (lineHeight * 3));
        
        // Time
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Time:', margin + 8, detailY + (lineHeight * 4));
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text(new Date().toLocaleTimeString('en-IN'), margin + 45, detailY + (lineHeight * 4));
        
        // Message
        if (msg && msg !== 'Success') {
          fallbackPdf.setFont('helvetica', 'bold');
          fallbackPdf.text('Message:', margin + 8, detailY + (lineHeight * 5));
          fallbackPdf.setFont('helvetica', 'normal');
          fallbackPdf.text(msg, margin + 45, detailY + (lineHeight * 5));
        }
        
        // Footer Section - Compact
        const footerY = receiptY + receiptHeight + 10;
        
        // Thank you message
        fallbackPdf.setFontSize(11);
        fallbackPdf.setFont('helvetica', 'bold');
        fallbackPdf.text('Thank you for your sponsorship!', pageWidth / 2, footerY, { align: 'center' });
        
        fallbackPdf.setFontSize(9);
        fallbackPdf.setFont('helvetica', 'normal');
        fallbackPdf.text('Your support helps make this event possible.', pageWidth / 2, footerY + 6, { align: 'center' });
        
        // Contact Information
        const contactY = footerY + 15;
        fallbackPdf.setFontSize(8);
        fallbackPdf.setTextColor(100, 100, 100);
        fallbackPdf.text('For any queries, please contact our support team.', pageWidth / 2, contactY, { align: 'center' });
        
        // Add decorative line
        fallbackPdf.setDrawColor(200, 200, 200);
        fallbackPdf.line(margin, contactY + 8, pageWidth - margin, contactY + 8);
        
        // Page number and generation info
        fallbackPdf.setFontSize(7);
        fallbackPdf.text(`Generated on ${new Date().toLocaleString('en-IN')}`, pageWidth / 2, contactY + 15, { align: 'center' });
        
        const fallbackFileName = `payment-receipt-${txnId || 'unknown'}-${new Date().toISOString().split('T')[0]}.pdf`;
        fallbackPdf.save(fallbackFileName);
        console.log('Fallback PDF saved successfully');
        
      } catch (fallbackError) {
        console.error('Fallback PDF generation also failed:', fallbackError);
        alert(`Failed to generate PDF: ${errorMessage}. Please check the console for details.`);
      }
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-[180vh] bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div ref={receiptRef} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
          {/* Header Section */}
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

          {/* Content Section */}
          <div className="px-8 py-8">
            {/* Success Message */}
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

            {/* Transaction Details */}
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

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              {/* Primary Button */}
              <Link
                href="/registration"
                className="inline-block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Back to Registration
              </Link>

              {/* Secondary Buttons */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={generatePDF}
                  disabled={isGeneratingPDF}
                  className="bg-gray-50 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
                >
                  {isGeneratingPDF ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
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
                </div>
                {/* <div>
                  <h3 className="text-sm font-semibold text-green-800 mb-1">
                    What happens next?
                  </h3>
                  <p className="text-xs text-green-700 leading-relaxed">
                    You&apos;ll receive an email confirmation with your payment
                    details and sponsorship information. Keep this email for
                    your records.
                  </p>
                </div> */}
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

        {/* Footer */}
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
