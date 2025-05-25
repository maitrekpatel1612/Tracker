import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Generate PDF with roadmap progress
export const generatePDF = (currentRoadmapType, roadmapData) => {
  // Create a new PDF document
  const doc = new jsPDF();

  // Add title
  const title = currentRoadmapType.charAt(0).toUpperCase() +
      currentRoadmapType.slice(1) + ' Roadmap Progress';

  doc.setFontSize(20);
  doc.setTextColor(204, 102, 153); // Primary color
  doc.text(title, 20, 20);

  // Add export date
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100); // Gray text
  const date = new Date().toLocaleDateString();
  doc.text(`Export date: ${date}`, 20, 30);

  // Add progress summary
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Progress Summary', 20, 40);

  // Calculate stats
  let totalTopics = 0;
  let completedTopics = 0;
  let inProgressTopics = 0;
  let notStartedTopics = 0;
  let estimatedTotalHours = 0;
  let completedHours = 0;

  // Calculate statistics
  Object.keys(roadmapData).forEach(categoryId => {
    const category = roadmapData[categoryId];
    category.topics.forEach(topic => {
      totalTopics++;
      estimatedTotalHours += topic.estimatedHours || 0;

      if (topic.status === 'completed') {
        completedTopics++;
        completedHours += topic.estimatedHours || 0;
      } else if (topic.status === 'in-progress') {
        inProgressTopics++;
      } else {
        notStartedTopics++;
      }
    });
  });

  const percentageComplete = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Add stats as a table
  doc.autoTable({
    startY: 45,
    head: [['Metric', 'Value']],
    body: [
      ['Overall Completion', `${percentageComplete}%`],
      ['Completed Topics', completedTopics],
      ['In Progress Topics', inProgressTopics],
      ['Not Started Topics', notStartedTopics],
      ['Completed Hours', completedHours],
      ['Total Estimated Hours', estimatedTotalHours]
    ],
    theme: 'grid',
    headStyles: { fillColor: [204, 102, 153] }
  });

  // Loop through each category
  let yPosition = doc.lastAutoTable.finalY + 10;

  Object.keys(roadmapData).forEach(categoryId => {
    const category = roadmapData[categoryId];

    // Add page if needed
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    // Category title
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(204, 102, 153);
    doc.text(category.name, 20, yPosition);
    yPosition += 10;

    // Category topics table
    const tableData = [];
    category.topics.forEach(topic => {
      const subtopicsComplete = topic.subtopics ?
        `${topic.subtopics.filter(s => s.status === 'completed').length}/${topic.subtopics.length}` :
        'N/A';

      tableData.push([
        topic.title,
        topic.status.charAt(0).toUpperCase() + topic.status.slice(1).replace('-', ' '),
        subtopicsComplete,
        topic.estimatedHours || 'N/A'
      ]);
    });

    doc.autoTable({
      startY: yPosition,
      head: [['Topic', 'Status', 'Subtopics', 'Est. Hours']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0] },
      styles: { cellPadding: 3, fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 40 },
        2: { cellWidth: 30 },
        3: { cellWidth: 20 }
      }
    });

    yPosition = doc.lastAutoTable.finalY + 15;
  });

  // Save the PDF
  doc.save(`${currentRoadmapType}-roadmap-${new Date().toISOString().slice(0, 10)}.pdf`);
};

export default generatePDF;
