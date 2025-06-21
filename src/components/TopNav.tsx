
import { Search, Bell, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';

export default function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between p-6 glass-card rounded-2xl mb-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-xl hover:bg-white/20"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/20 relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/20">
          <Settings size={20} />
        </Button>

        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/20">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
          <div className="hidden md:block">
            <p className="font-semibold text-sm">John Doe</p>
            <p className="text-xs text-muted-foreground">Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}
