import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import store from '../../store'

/*
const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};

*/

const savePdf = () => {

    const state = store.getState()
    console.log(state)
    const input = document.getElementById("cv");

    html2canvas(input, {
      allowTaint: true,
    })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`example.pdf`);
    });

}

export default savePdf;