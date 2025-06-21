
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Link, 
  Image, 
  Save, 
  Share, 
  MoreVertical,
  Users,
  Clock
} from 'lucide-react';

export default function Notes() {
  const [title, setTitle] = useState('Physics Chapter 5: Thermodynamics');
  const [content, setContent] = useState(`# Thermodynamics - Chapter 5

## Introduction
Thermodynamics is the branch of physics that deals with the relationships between heat and other forms of energy.

## Key Concepts

### First Law of Thermodynamics
The first law of thermodynamics is a version of the law of conservation of energy...

### Second Law of Thermodynamics
The second law of thermodynamics states that the entropy of any isolated system always increases...

## Important Formulas
- **Internal Energy**: ΔU = Q - W
- **Efficiency**: η = 1 - (T_cold/T_hot)
- **Carnot Efficiency**: η_carnot = 1 - (T_2/T_1)

## Examples and Problems
1. A heat engine operates between two reservoirs...
2. Calculate the efficiency of a Carnot engine...`);

  const collaborators = [
    { name: 'Sarah Wilson', avatar: 'SW', color: 'from-blue-500 to-purple-500', online: true },
    { name: 'Mike Johnson', avatar: 'MJ', color: 'from-green-500 to-teal-500', online: false },
    { name: 'Alice Chen', avatar: 'AC', color: 'from-pink-500 to-rose-500', online: true }
  ];

  const formatButtons = [
    { icon: Bold, label: 'Bold' },
    { icon: Italic, label: 'Italic' },
    { icon: Underline, label: 'Underline' },
    { icon: List, label: 'Bullet List' },
    { icon: ListOrdered, label: 'Numbered List' },
    { icon: Quote, label: 'Quote' },
    { icon: Link, label: 'Link' },
    { icon: Image, label: 'Image' }
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        <div className="glass-card rounded-2xl overflow-hidden animate-fade-in">
          {/* Note Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-bold bg-transparent border-none outline-none flex-1 mr-4"
                placeholder="Untitled Note"
              />
              <div className="flex items-center gap-3">
                <button className="btn-secondary px-4 py-2 flex items-center gap-2">
                  <Share size={18} />
                  Share
                </button>
                <button className="btn-primary px-4 py-2 flex items-center gap-2">
                  <Save size={18} />
                  Save
                </button>
                <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Last edited 2 minutes ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>3 collaborators</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>Auto-save: On</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="p-4 border-b border-white/10 bg-white/5 dark:bg-slate-800/20">
            <div className="flex items-center gap-2 flex-wrap">
              {formatButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <button
                    key={index}
                    className="p-2 hover:bg-white/20 dark:hover:bg-slate-700/30 rounded-lg transition-colors"
                    title={button.label}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
              <div className="w-px h-6 bg-white/20 mx-2"></div>
              <select className="bg-white/10 dark:bg-slate-700/20 border border-white/10 rounded-lg px-3 py-1 text-sm">
                <option>Normal Text</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
              </select>
            </div>
          </div>

          <div className="flex">
            {/* Editor */}
            <div className="flex-1 p-6">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 bg-transparent border-none outline-none resize-none font-mono text-sm leading-relaxed"
                placeholder="Start writing your notes..."
              />
            </div>

            {/* Collaborators Sidebar */}
            <div className="w-64 border-l border-white/10 p-6">
              <h3 className="font-semibold mb-4">Collaborators</h3>
              <div className="space-y-3">
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-8 h-8 bg-gradient-to-r ${collaborator.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xs font-semibold">{collaborator.avatar}</span>
                      </div>
                      {collaborator.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{collaborator.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {collaborator.online ? 'Editing now' : 'Last seen 1h ago'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Real-time Cursors Indicator */}
              <div className="mt-6 p-3 bg-white/10 dark:bg-slate-700/20 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Live Cursors</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Sarah - Line 15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs">Alice - Line 8</span>
                  </div>
                </div>
              </div>

              {/* Version History */}
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Recent Changes</h4>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="p-2 bg-white/5 dark:bg-slate-700/10 rounded">
                    <p>Sarah added formula section</p>
                    <p>2 min ago</p>
                  </div>
                  <div className="p-2 bg-white/5 dark:bg-slate-700/10 rounded">
                    <p>You updated introduction</p>
                    <p>5 min ago</p>
                  </div>
                  <div className="p-2 bg-white/5 dark:bg-slate-700/10 rounded">
                    <p>Alice added examples</p>
                    <p>15 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
