import React from 'react';
import { FiFile, FiFileText, FiImage, FiDatabase, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

export const Reports: React.FC = () => {
  // Sample analyzed files data
  const analyzedFiles = [
    {
      id: 1,
      fileName: 'bank_statement_jan_2024.pdf',
      fileType: 'PDF',
      analysisDate: '15 Jan 2024',
      status: 'completed',
      transactionsFound: 45,
      fileSize: '2.3 MB'
    },
    {
      id: 2,
      fileName: 'credit_card_dec_2023.csv',
      fileType: 'CSV',
      analysisDate: '12 Jan 2024',
      status: 'completed',
      transactionsFound: 28,
      fileSize: '156 KB'
    },
    {
      id: 3,
      fileName: 'receipts_batch_1.zip',
      fileType: 'ZIP',
      analysisDate: '10 Jan 2024',
      status: 'processing',
      transactionsFound: 0,
      fileSize: '5.7 MB'
    },
    {
      id: 4,
      fileName: 'investment_summary.xlsx',
      fileType: 'XLSX',
      analysisDate: '08 Jan 2024',
      status: 'completed',
      transactionsFound: 12,
      fileSize: '890 KB'
    },
    {
      id: 5,
      fileName: 'payroll_data.json',
      fileType: 'JSON',
      analysisDate: '05 Jan 2024',
      status: 'error',
      transactionsFound: 0,
      fileSize: '45 KB'
    }
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FiFileText className="w-5 h-5 text-red-500" />;
      case 'csv':
      case 'xlsx':
        return <FiDatabase className="w-5 h-5 text-green-500" />;
      case 'zip':
        return <FiFile className="w-5 h-5 text-blue-500" />;
      case 'json':
        return <FiFile className="w-5 h-5 text-yellow-500" />;
      default:
        return <FiFile className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <FiClock className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <FiAlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FiClock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1";
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case 'processing':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
      case 'error':
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
        <p className="text-muted-foreground">View analyzed files and their processing status.</p>
      </div>
      
      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground mb-2">Analyzed Files</h2>
          <p className="text-sm text-muted-foreground">
            {analyzedFiles.length} files processed • {analyzedFiles.filter(f => f.status === 'completed').length} completed
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium text-foreground">File</th>
                <th className="text-left p-4 font-medium text-foreground">Type</th>
                <th className="text-left p-4 font-medium text-foreground">Analysis Date</th>
                <th className="text-left p-4 font-medium text-foreground">Status</th>
                <th className="text-left p-4 font-medium text-foreground">Transactions</th>
                <th className="text-left p-4 font-medium text-foreground">Size</th>
              </tr>
            </thead>
            <tbody>
              {analyzedFiles.map((file) => (
                <tr key={file.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.fileType)}
                      <div>
                        <p className="font-medium text-foreground">{file.fileName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-muted rounded text-xs font-medium text-foreground">
                      {file.fileType}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{file.analysisDate}</td>
                  <td className="p-4">
                    <span className={getStatusBadge(file.status)}>
                      {getStatusIcon(file.status)}
                      {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">
                    {file.status === 'completed' ? file.transactionsFound : '-'}
                  </td>
                  <td className="p-4 text-muted-foreground">{file.fileSize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {analyzedFiles.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No files have been analyzed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;