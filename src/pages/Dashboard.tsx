import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import GameModal from '@/components/GameModal';
import { Calendar, Clock, Users, FileText, Trophy, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [showGameModal, setShowGameModal] = useState(false);

  const stats = [
    { icon: Users, label: 'Study Groups', value: '5', change: '+2 this week' },
    { icon: FileText, label: 'Notes Shared', value: '23', change: '+8 this week' },
    { icon: Clock, label: 'Study Hours', value: '47h', change: '+12h this week' },
    { icon: Trophy, label: 'XP Earned', value: '1,250', change: '+180 this week', onClick: () => setShowGameModal(true) }
  ];

  const recentActivity = [
    { type: 'note', title: 'Physics Chapter 5 Notes', time: '2 hours ago', user: 'Sarah Wilson' },
    { type: 'group', title: 'Mathematics Study Group', time: '4 hours ago', user: 'You joined' },
    { type: 'task', title: 'Complete Assignment 3', time: '1 day ago', user: 'Due tomorrow' },
    { type: 'call', title: 'Chemistry Discussion', time: '2 days ago', user: 'Mike Johnson' }
  ];

  const upcomingTasks = [
    { title: 'Submit Physics Lab Report', due: 'Today, 6:00 PM', priority: 'high' },
    { title: 'Math Quiz Preparation', due: 'Tomorrow, 10:00 AM', priority: 'medium' },
    { title: 'Group Project Meeting', due: 'Friday, 2:00 PM', priority: 'low' }
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        {/* Welcome Section */}
        <div className="glass-card p-8 rounded-2xl mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-muted-foreground">Ready to continue your learning journey?</p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <button 
                  onClick={() => setShowGameModal(true)}
                  className="text-2xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
                >
                  7 Days 🔥
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onClick={stat.onClick}
                className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up ${
                  stat.onClick ? 'cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 rounded-2xl animate-scale-in">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-white/20 dark:hover:bg-slate-700/20 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      {activity.type === 'note' && <FileText size={20} className="text-white" />}
                      {activity.type === 'group' && <Users size={20} className="text-white" />}
                      {activity.type === 'task' && <Clock size={20} className="text-white" />}
                      {activity.type === 'call' && <Calendar size={20} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div>
            <div className="glass-card p-6 rounded-2xl animate-scale-in">
              <h2 className="text-xl font-semibold mb-6">Upcoming Tasks</h2>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/20 dark:bg-slate-700/20 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-medium text-sm">{task.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{task.due}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-2xl mt-6 animate-scale-in">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full btn-primary py-3 text-left">
                  Start New Study Session
                </button>
                <button className="w-full btn-secondary py-3 text-left">
                  Join Study Group
                </button>
                <button className="w-full btn-secondary py-3 text-left">
                  Create New Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      <GameModal isOpen={showGameModal} onClose={() => setShowGameModal(false)} />
    </div>
  );
}
