
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { Camera, Edit, Trophy, Calendar, BookOpen, Users, Award, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@university.edu',
    course: 'Computer Science',
    year: '3rd Year',
    bio: 'Passionate about technology and collaborative learning. Love solving complex problems and helping peers succeed.',
    skills: ['JavaScript', 'Python', 'React', 'Data Structures', 'Machine Learning'],
    interests: ['Web Development', 'AI/ML', 'Open Source', 'Gaming']
  });

  const stats = [
    { icon: BookOpen, label: 'Notes Shared', value: '23', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Study Groups', value: '5', color: 'from-green-500 to-teal-500' },
    { icon: Trophy, label: 'XP Points', value: '1,250', color: 'from-yellow-500 to-orange-500' },
    { icon: Award, label: 'Badges Earned', value: '8', color: 'from-purple-500 to-pink-500' }
  ];

  const badges = [
    { name: 'Study Streak', description: '7 days in a row', icon: '🔥', earned: true },
    { name: 'Helper', description: 'Helped 10+ peers', icon: '🤝', earned: true },
    { name: 'Note Master', description: 'Shared 20+ notes', icon: '📚', earned: true },
    { name: 'Quiz Champion', description: 'Top scorer', icon: '🏆', earned: false },
    { name: 'Team Player', description: 'Active in groups', icon: '⭐', earned: true },
    { name: 'Early Bird', description: 'Morning studier', icon: '🌅', earned: false }
  ];

  const recentActivity = [
    { action: 'Shared notes in Physics Study Group', time: '2 hours ago', type: 'share' },
    { action: 'Completed Daily Quiz Challenge', time: '1 day ago', type: 'achievement' },
    { action: 'Joined Math Warriors study group', time: '3 days ago', type: 'join' },
    { action: 'Earned "Helper" badge', time: '1 week ago', type: 'badge' },
    { action: 'Created new study group', time: '2 weeks ago', type: 'create' }
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">JD</span>
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <Camera size={20} />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        className="text-3xl font-bold bg-transparent border-b-2 border-blue-500 outline-none"
                      />
                    ) : (
                      <h1 className="text-3xl font-bold gradient-text">{profile.name}</h1>
                    )}
                    <p className="text-muted-foreground mt-1">{profile.email}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="btn-secondary px-4 py-2 flex items-center gap-2"
                  >
                    <Edit size={18} />
                    {isEditing ? 'Save' : 'Edit Profile'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-white/10 dark:bg-slate-700/20 rounded-xl">
                    <p className="text-sm text-muted-foreground">Course</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.course}
                        onChange={(e) => setProfile(prev => ({ ...prev, course: e.target.value }))}
                        className="font-semibold bg-transparent border-b border-blue-500 outline-none"
                      />
                    ) : (
                      <p className="font-semibold">{profile.course}</p>
                    )}
                  </div>
                  <div className="p-3 bg-white/10 dark:bg-slate-700/20 rounded-xl">
                    <p className="text-sm text-muted-foreground">Year</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.year}
                        onChange={(e) => setProfile(prev => ({ ...prev, year: e.target.value }))}
                        className="font-semibold bg-transparent border-b border-blue-500 outline-none"
                      />
                    ) : (
                      <p className="font-semibold">{profile.year}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Bio</p>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      className="w-full p-3 bg-white/10 dark:bg-slate-700/20 rounded-xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      rows={3}
                    />
                  ) : (
                    <p className="text-sm">{profile.bio}</p>
                  )}
                </div>

                {/* Skills & Interests */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Badges */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 rounded-2xl animate-scale-in">
                <h2 className="text-xl font-semibold mb-6">Achievements & Badges</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${
                        badge.earned
                          ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                          : 'bg-white/10 dark:bg-slate-700/20 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                      {badge.earned && (
                        <div className="mt-2">
                          <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                            ✨ Earned
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Settings & Recent Activity */}
            <div className="space-y-6">
              {/* Settings */}
              <div className="glass-card p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold mb-4">Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                      <span className="text-sm">Theme</span>
                    </div>
                    <button
                      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      className="btn-secondary px-3 py-1 text-xs"
                    >
                      {theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings size={20} />
                      <span className="text-sm">Privacy</span>
                    </div>
                    <button className="btn-secondary px-3 py-1 text-xs">
                      Manage
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card p-6 rounded-2xl animate-scale-in">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
