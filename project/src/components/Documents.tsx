import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Search, Filter, Folder, File } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  category: string;
  type: string;
  size: string;
  lastModified: string;
  description: string;
  downloadUrl: string;
}

const documents: Document[] = [
  // WMS Process
  {
    id: '1',
    title: 'WMS Implementation Guide',
    category: 'WMS Process',
    type: 'PDF',
    size: '2.5 MB',
    lastModified: '2024-01-15',
    description: 'Comprehensive guide for implementing warehouse management systems',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'WMS Best Practices Manual',
    category: 'WMS Process',
    type: 'PDF',
    size: '3.2 MB',
    lastModified: '2024-01-12',
    description: 'Industry best practices for WMS optimization',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'WMS Configuration Checklist',
    category: 'WMS Process',
    type: 'DOCX',
    size: '1.1 MB',
    lastModified: '2024-01-10',
    description: 'Step-by-step configuration checklist for WMS setup',
    downloadUrl: '#'
  },
  
  // AI Tools
  {
    id: '4',
    title: 'AI Integration Framework',
    category: 'AI Tools',
    type: 'PDF',
    size: '4.1 MB',
    lastModified: '2024-01-08',
    description: 'Framework for integrating AI tools in warehouse operations',
    downloadUrl: '#'
  },
  {
    id: '5',
    title: 'Machine Learning Models Guide',
    category: 'AI Tools',
    type: 'PDF',
    size: '3.8 MB',
    lastModified: '2024-01-05',
    description: 'Guide to implementing ML models for predictive analytics',
    downloadUrl: '#'
  },
  {
    id: '6',
    title: 'AI Performance Metrics',
    category: 'AI Tools',
    type: 'XLSX',
    size: '2.2 MB',
    lastModified: '2024-01-03',
    description: 'Key performance indicators for AI tool effectiveness',
    downloadUrl: '#'
  },

  // MSR (Monthly Status Report)
  {
    id: '7',
    title: 'MSR Template January 2024',
    category: 'MSR',
    type: 'DOCX',
    size: '1.5 MB',
    lastModified: '2024-01-31',
    description: 'Monthly status report template for January 2024',
    downloadUrl: '#'
  },
  {
    id: '8',
    title: 'MSR Guidelines and Format',
    category: 'MSR',
    type: 'PDF',
    size: '2.1 MB',
    lastModified: '2024-01-01',
    description: 'Guidelines for preparing monthly status reports',
    downloadUrl: '#'
  },

  // WSR (Weekly Status Report)
  {
    id: '9',
    title: 'WSR Template Week 4',
    category: 'WSR',
    type: 'DOCX',
    size: '0.8 MB',
    lastModified: '2024-01-28',
    description: 'Weekly status report template for week 4',
    downloadUrl: '#'
  },
  {
    id: '10',
    title: 'WSR Submission Process',
    category: 'WSR',
    type: 'PDF',
    size: '1.2 MB',
    lastModified: '2024-01-21',
    description: 'Process and guidelines for weekly status report submission',
    downloadUrl: '#'
  },

  // One Slider
  {
    id: '11',
    title: 'Project Overview Slider',
    category: 'One Slider',
    type: 'PPTX',
    size: '5.5 MB',
    lastModified: '2024-01-20',
    description: 'Single slide project overview presentation',
    downloadUrl: '#'
  },
  {
    id: '12',
    title: 'Executive Summary Slide',
    category: 'One Slider',
    type: 'PPTX',
    size: '3.2 MB',
    lastModified: '2024-01-18',
    description: 'Executive summary in single slide format',
    downloadUrl: '#'
  },

  // Test Report
  {
    id: '13',
    title: 'System Integration Test Report',
    category: 'Test Report',
    type: 'PDF',
    size: '6.8 MB',
    lastModified: '2024-01-25',
    description: 'Comprehensive system integration testing report',
    downloadUrl: '#'
  },
  {
    id: '14',
    title: 'Performance Test Results',
    category: 'Test Report',
    type: 'PDF',
    size: '4.5 MB',
    lastModified: '2024-01-22',
    description: 'Performance testing results and analysis',
    downloadUrl: '#'
  },

  // Test Execution
  {
    id: '15',
    title: 'Test Execution Plan',
    category: 'Test Execution',
    type: 'DOCX',
    size: '2.8 MB',
    lastModified: '2024-01-24',
    description: 'Detailed test execution plan and procedures',
    downloadUrl: '#'
  },
  {
    id: '16',
    title: 'Test Case Execution Log',
    category: 'Test Execution',
    type: 'XLSX',
    size: '3.1 MB',
    lastModified: '2024-01-23',
    description: 'Log of executed test cases with results',
    downloadUrl: '#'
  }
];

const categories = ['All', 'WMS Process', 'AI Tools', 'MSR', 'WSR', 'One Slider', 'Test Report', 'Test Execution'];

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return '📄';
      case 'docx':
        return '📝';
      case 'xlsx':
        return '📊';
      case 'pptx':
        return '📊';
      default:
        return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Document Library</h1>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  <Folder size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  <File size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Documents Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{getFileIcon(doc.type)}</div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {doc.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                    
                    <div className="space-y-2 text-xs text-gray-500 mb-4">
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span className="font-medium">{doc.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{doc.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Modified:</span>
                        <span className="font-medium">{doc.lastModified}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm flex items-center justify-center">
                        <Eye size={16} className="mr-1" />
                        View
                      </button>
                      <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-xl hover:bg-green-700 transition-colors text-sm flex items-center justify-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Document
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Modified
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDocuments.map((doc, index) => (
                      <motion.tr
                        key={doc.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{getFileIcon(doc.type)}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{doc.title}</div>
                              <div className="text-sm text-gray-500">{doc.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {doc.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.lastModified}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                              <Eye size={16} />
                            </button>
                            <button className="text-green-600 hover:text-green-900 p-1 rounded">
                              <Download size={16} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Documents;