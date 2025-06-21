
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageCircle, 
  Users, 
  FileText, 
  CheckSquare, 
  Archive, 
  PenTool,
  User,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: MessageCircle, label: 'Chats', path: '/chat' },
  { icon: Users, label: 'Groups', path: '/groups' },
  { icon: FileText, label: 'Notes', path: '/notes' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: Archive, label: 'Vault', path: '/vault' },
  { icon: PenTool, label: 'Whiteboard', path: '/whiteboard' },
  { icon: HelpCircle, label: 'Forum', path: '/forum' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      'h-screen glass-card rounded-r-3xl transition-all duration-300 flex flex-col',
      isCollapsed ? 'w-20' : 'w-64'
    )}>
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h2 className="font-bold text-lg gradient-text">PeerVerse</h2>
                <p className="text-xs text-muted-foreground">Learn Together</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'nav-item',
                isActive && 'active'
              )}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-white/10">
          <div className="glass-card p-3 rounded-xl">
            <h4 className="font-semibold text-sm mb-2">Study Streak</h4>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">7 days strong! 🔥</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
