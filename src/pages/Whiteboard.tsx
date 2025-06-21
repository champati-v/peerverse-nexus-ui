
import { useState } from 'react';
import { 
  Pen, 
  Square, 
  Circle, 
  ArrowRight, 
  Type, 
  Eraser, 
  Undo, 
  Redo, 
  Save, 
  Share, 
  Palette,
  Users,
  Download
} from 'lucide-react';

export default function Whiteboard() {
  const [selectedTool, setSelectedTool] = useState('pen');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [brushSize, setBrushSize] = useState(3);

  const tools = [
    { id: 'pen', icon: Pen, label: 'Pen' },
    { id: 'square', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'arrow', icon: ArrowRight, label: 'Arrow' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'eraser', icon: Eraser, label: 'Eraser' }
  ];

  const colors = [
    '#000000', '#EF4444', '#F97316', '#EAB308', 
    '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899'
  ];

  const collaborators = [
    { name: 'Sarah Wilson', avatar: 'SW', color: '#3B82F6', online: true },
    { name: 'Mike Johnson', avatar: 'MJ', color: '#22C55E', online: true },
    { name: 'Alice Chen', avatar: 'AC', color: '#EC4899', online: false }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 flex flex-col">
      {/* Top Toolbar */}
      <div className="glass-card m-6 mb-3 p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
              <span className="text-white font-bold">P</span>
            </div>
            <div>
              <h1 className="font-bold gradient-text">Whiteboard</h1>
              <p className="text-xs text-muted-foreground">Collaborative Drawing</p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex items-center gap-2 bg-white/20 dark:bg-slate-700/20 p-2 rounded-xl">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`p-3 rounded-lg transition-all hover:scale-105 ${
                    selectedTool === tool.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'hover:bg-white/20 dark:hover:bg-slate-600/20'
                  }`}
                  title={tool.label}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>

          {/* Color Palette */}
          <div className="flex items-center gap-2">
            <Palette size={18} className="text-muted-foreground" />
            <div className="flex items-center gap-1 bg-white/20 dark:bg-slate-700/20 p-2 rounded-xl">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-110 ${
                    selectedColor === color ? 'border-white shadow-lg' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Size:</span>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm font-medium w-6">{brushSize}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* History Controls */}
          <div className="flex items-center gap-1 bg-white/20 dark:bg-slate-700/20 p-1 rounded-lg">
            <button className="p-2 hover:bg-white/20 dark:hover:bg-slate-600/20 rounded transition-colors">
              <Undo size={18} />
            </button>
            <button className="p-2 hover:bg-white/20 dark:hover:bg-slate-600/20 rounded transition-colors">
              <Redo size={18} />
            </button>
          </div>

          {/* Collaborators */}
          <div className="flex items-center gap-2">
            <Users size={18} className="text-muted-foreground" />
            <div className="flex -space-x-2">
              {collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className="relative w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-white font-semibold text-xs"
                  style={{ backgroundColor: collaborator.color }}
                >
                  {collaborator.avatar}
                  {collaborator.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <button className="btn-secondary px-4 py-2 flex items-center gap-2">
            <Save size={18} />
            Save
          </button>
          <button className="btn-secondary px-4 py-2 flex items-center gap-2">
            <Download size={18} />
            Export
          </button>
          <button className="btn-primary px-4 py-2 flex items-center gap-2">
            <Share size={18} />
            Share
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 mx-6 mb-6 glass-card rounded-2xl overflow-hidden animate-fade-in">
        <div className="w-full h-full bg-white dark:bg-slate-900 relative">
          {/* Canvas */}
          <canvas
            className="w-full h-full cursor-crosshair"
            onMouseDown={() => console.log('Drawing started')}
            onMouseMove={() => console.log('Drawing...')}
            onMouseUp={() => console.log('Drawing ended')}
          />

          {/* Live Cursors */}
          <div className="absolute top-4 left-4 space-y-2">
            {collaborators.filter(c => c.online).map((collaborator, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-black/50 text-white px-3 py-1 rounded-full text-xs animate-pulse"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: collaborator.color }}
                />
                {collaborator.name} is drawing...
              </div>
            ))}
          </div>

          {/* Canvas Info */}
          <div className="absolute bottom-4 left-4 glass-card px-3 py-2 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Canvas: 1920 × 1080 • Zoom: 100%
            </p>
          </div>

          {/* Grid Toggle */}
          <div className="absolute bottom-4 right-4">
            <button className="glass-card px-3 py-2 rounded-lg text-xs hover:bg-white/20 dark:hover:bg-slate-700/20 transition-colors">
              Toggle Grid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
