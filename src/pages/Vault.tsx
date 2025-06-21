
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { Upload, Search, Filter, Grid, List, Download, Share, MoreVertical, File, FileText, Image, Folder } from 'lucide-react';

export default function Vault() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const files = [
    {
      id: 1,
      name: 'Physics Chapter 5 Notes.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadedBy: 'Sarah Wilson',
      uploadedAt: '2 hours ago',
      downloads: 12,
      category: 'notes',
      icon: FileText,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Math Problem Solutions.docx',
      type: 'DOC',
      size: '1.1 MB',
      uploadedBy: 'Mike Johnson',
      uploadedAt: '1 day ago',
      downloads: 8,
      category: 'assignments',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Chemistry Lab Diagram.png',
      type: 'PNG',
      size: '856 KB',
      uploadedBy: 'Alice Chen',
      uploadedAt: '3 days ago',
      downloads: 15,
      category: 'images',
      icon: Image,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      name: 'Study Group Presentation.pptx',
      type: 'PPT',
      size: '4.2 MB',
      uploadedBy: 'David Brown',
      uploadedAt: '1 week ago',
      downloads: 20,
      category: 'presentations',
      icon: File,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Research Papers Collection',
      type: 'FOLDER',
      size: '15.3 MB',
      uploadedBy: 'Emma Davis',
      uploadedAt: '2 weeks ago',
      downloads: 5,
      category: 'research',
      icon: Folder,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      name: 'Calculus Formula Sheet.pdf',
      type: 'PDF',
      size: '789 KB',
      uploadedBy: 'John Doe',
      uploadedAt: '3 weeks ago',
      downloads: 25,
      category: 'references',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Files', count: files.length },
    { key: 'notes', label: 'Notes', count: files.filter(f => f.category === 'notes').length },
    { key: 'assignments', label: 'Assignments', count: files.filter(f => f.category === 'assignments').length },
    { key: 'images', label: 'Images', count: files.filter(f => f.category === 'images').length },
    { key: 'presentations', label: 'Presentations', count: files.filter(f => f.category === 'presentations').length },
    { key: 'research', label: 'Research', count: files.filter(f => f.category === 'research').length },
    { key: 'references', label: 'References', count: files.filter(f => f.category === 'references').length }
  ];

  const filteredFiles = selectedCategory === 'all' 
    ? files 
    : files.filter(file => file.category === selectedCategory);

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        {/* Header */}
        <div className="glass-card p-6 rounded-2xl mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text">Resource Vault</h1>
              <p className="text-muted-foreground mt-2">Centralized storage for all your study materials</p>
            </div>
            <button className="btn-primary px-6 py-3 flex items-center gap-2">
              <Upload size={20} />
              Upload Files
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-blue-500">{files.length}</p>
              <p className="text-sm text-muted-foreground">Total Files</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-green-500">45.2 MB</p>
              <p className="text-sm text-muted-foreground">Storage Used</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-purple-500">{files.reduce((sum, file) => sum + file.downloads, 0)}</p>
              <p className="text-sm text-muted-foreground">Total Downloads</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-orange-500">8</p>
              <p className="text-sm text-muted-foreground">Contributors</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Categories */}
          <div className="glass-card p-6 rounded-2xl animate-slide-up">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'hover:bg-white/10 dark:hover:bg-slate-700/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.label}</span>
                    <span className="text-xs opacity-70">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Upload Area */}
            <div className="mt-6 p-4 border-2 border-dashed border-white/20 rounded-xl text-center">
              <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Drag & drop files here</p>
              <button className="btn-secondary px-4 py-2 text-xs">
                Browse Files
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Controls */}
            <div className="glass-card p-4 rounded-2xl animate-slide-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      placeholder="Search files..."
                      className="pl-10 pr-4 py-2 bg-white/20 dark:bg-slate-700/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Filter */}
                  <div className="flex items-center gap-2">
                    <Filter size={18} />
                    <select className="bg-white/10 dark:bg-slate-700/20 border border-white/10 rounded-lg px-3 py-2 text-sm">
                      <option>All Types</option>
                      <option>PDF</option>
                      <option>DOC</option>
                      <option>Images</option>
                      <option>Presentations</option>
                    </select>
                  </div>
                </div>

                {/* View Toggle */}
                <div className="flex bg-white/10 dark:bg-slate-700/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'hover:bg-white/10 dark:hover:bg-slate-600/20'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'hover:bg-white/10 dark:hover:bg-slate-600/20'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Files Display */}
            <div className="glass-card rounded-2xl overflow-hidden animate-scale-in">
              {viewMode === 'grid' ? (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredFiles.map((file) => {
                      const Icon = file.icon;
                      return (
                        <div
                          key={file.id}
                          className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl hover:bg-white/20 dark:hover:bg-slate-700/30 transition-all hover:scale-105 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-12 h-12 bg-gradient-to-r ${file.color} rounded-xl flex items-center justify-center`}>
                              <Icon size={24} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm truncate">{file.name}</h4>
                              <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                            </div>
                            <button className="p-1 hover:bg-white/10 dark:hover:bg-slate-600/20 rounded transition-colors">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                          
                          <div className="space-y-2 text-xs text-muted-foreground">
                            <p>Uploaded by {file.uploadedBy}</p>
                            <p>{file.uploadedAt} • {file.downloads} downloads</p>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-3">
                            <button className="btn-secondary px-3 py-1 text-xs flex items-center gap-1">
                              <Download size={12} />
                              Download
                            </button>
                            <button className="btn-secondary px-3 py-1 text-xs flex items-center gap-1">
                              <Share size={12} />
                              Share
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {filteredFiles.map((file) => {
                    const Icon = file.icon;
                    return (
                      <div
                        key={file.id}
                        className="p-6 hover:bg-white/5 dark:hover:bg-slate-700/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${file.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon size={20} className="text-white" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium mb-1">{file.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{file.type}</span>
                              <span>{file.size}</span>
                              <span>by {file.uploadedBy}</span>
                              <span>{file.uploadedAt}</span>
                              <span>{file.downloads} downloads</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button className="btn-secondary px-3 py-2 text-sm flex items-center gap-2">
                              <Download size={16} />
                              Download
                            </button>
                            <button className="btn-secondary px-3 py-2 text-sm flex items-center gap-2">
                              <Share size={16} />
                              Share
                            </button>
                            <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
