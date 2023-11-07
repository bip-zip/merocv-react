import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PdfDownloader = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);

    if (input) {
      const pdfOptions = {
        margin: { top: 0, right: 10, bottom: 10, left: 10 }, // Adjust margins as needed
        filename: `${downloadFileName}.pdf`,
        image: { type: 'jpeg', quality: 1 }, // Set image quality to 1.0 (highest quality)
      };

      html2canvas(input, {
        scale: 1, // Adjust scale as needed
        windowWidth: document.documentElement.offsetWidth, // Set the page width
        windowHeight: document.documentElement.offsetHeight, // Set the page height
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', pdfOptions.image.quality);
        // const pdf = new jsPDF({
        //   orientation: 'portrait',
        //   unit: 'mm',
        //   format: pdfOptions.format,
        //   hotfixes: ['px_scaling'],
        // });
        const pdf = new jsPDF('p', 'mm', [367, 210])
        pdf.addImage(imgData, 'JPEG', pdfOptions.margin.left, pdfOptions.margin.top);
        pdf.save(pdfOptions.filename);
      });
    }
  };

  return (
    <button onClick={downloadPdfDocument} className='btn-blue mt-5 col-lg-12'>
      <i className='fa fa-download'></i> Download this CV
    </button>
  );
};

export default PdfDownloader;
