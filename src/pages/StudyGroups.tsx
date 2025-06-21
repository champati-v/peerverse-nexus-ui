
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { Users, MessageCircle, Calendar, BookOpen, Settings, UserPlus, LogOut, Star } from 'lucide-react';

export default function StudyGroups() {
  const [selectedGroup, setSelectedGroup] = useState(0);

  const studyGroups = [
    {
      id: 1,
      name: 'Physics Study Group',
      subject: 'Physics',
      members: 8,
      description: 'Weekly physics problem-solving sessions and exam preparation',
      avatar: 'PS',
      color: 'from-blue-500 to-purple-500',
      tags: ['Physics', 'Problem Solving', 'Exam Prep'],
      nextMeeting: 'Tomorrow, 3:00 PM',
      recentActivity: 'Sarah shared new notes 2h ago',
      isJoined: true
    },
    {
      id: 2,
      name: 'Math Warriors',
      subject: 'Mathematics',
      members: 12,
      description: 'Advanced calculus and linear algebra study group',
      avatar: 'MW',
      color: 'from-green-500 to-teal-500',
      tags: ['Calculus', 'Linear Algebra', 'Advanced Math'],
      nextMeeting: 'Friday, 2:00 PM',
      recentActivity: 'Mike posted a new problem 1h ago',
      isJoined: true
    },
    {
      id: 3,
      name: 'CS Algorithms',
      subject: 'Computer Science',
      members: 15,
      description: 'Data structures and algorithms practice group',
      avatar: 'CS',
      color: 'from-purple-500 to-pink-500',
      tags: ['Algorithms', 'Data Structures', 'Coding'],
      nextMeeting: 'Monday, 4:00 PM',
      recentActivity: 'Alice updated the study schedule',
      isJoined: false
    }
  ];

  const members = [
    { name: 'Sarah Wilson', avatar: 'SW', role: 'Admin', online: true },
    { name: 'Mike Johnson', avatar: 'MJ', role: 'Member', online: true },
    { name: 'Alice Chen', avatar: 'AC', role: 'Member', online: false },
    { name: 'David Brown', avatar: 'DB', role: 'Member', online: true },
    { name: 'Emma Davis', avatar: 'ED', role: 'Member', online: false }
  ];

  const resources = [
    { name: 'Chapter 5 Notes.pdf', type: 'PDF', size: '2.4 MB', uploadedBy: 'Sarah Wilson', uploadedAt: '2 hours ago' },
    { name: 'Problem Set Solutions', type: 'DOC', size: '1.1 MB', uploadedBy: 'Mike Johnson', uploadedAt: '1 day ago' },
    { name: 'Formula Sheet', type: 'PDF', size: '856 KB', uploadedBy: 'Alice Chen', uploadedAt: '3 days ago' }
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Groups List */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Study Groups</h2>
              <button className="btn-primary px-4 py-2 text-sm">
                Create Group
              </button>
            </div>

            <div className="space-y-4">
              {studyGroups.map((group, index) => (
                <div
                  key={group.id}
                  onClick={() => setSelectedGroup(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                    selectedGroup === index 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                      : 'bg-white/10 dark:bg-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-700/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold">{group.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{group.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={14} />
                        <span>{group.members} members</span>
                      </div>
                    </div>
                    {group.isJoined && (
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {group.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 dark:bg-slate-600/20 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p className="mb-1">Next: {group.nextMeeting}</p>
                    <p>{group.recentActivity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Group Header */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${studyGroups[selectedGroup].color} rounded-2xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{studyGroups[selectedGroup].avatar}</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{studyGroups[selectedGroup].name}</h1>
                    <p className="text-muted-foreground">{studyGroups[selectedGroup].description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{studyGroups[selectedGroup].members} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>4.8 rating</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {studyGroups[selectedGroup].isJoined ? (
                    <>
                      <button className="btn-secondary px-4 py-2 flex items-center gap-2">
                        <MessageCircle size={18} />
                        Chat
                      </button>
                      <button className="btn-secondary px-4 py-2 flex items-center gap-2">
                        <Settings size={18} />
                        Settings
                      </button>
                      <button className="btn-secondary px-4 py-2 flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50">
                        <LogOut size={18} />
                        Leave
                      </button>
                    </>
                  ) : (
                    <button className="btn-primary px-6 py-2 flex items-center gap-2">
                      <UserPlus size={18} />
                      Join Group
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {studyGroups[selectedGroup].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Members */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">Members ({members.length})</h3>
                <div className="space-y-3">
                  {members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{member.avatar}</span>
                        </div>
                        {member.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      {member.role === 'Admin' && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded text-xs">
                          Admin
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-blue-500" />
                      <span className="font-medium text-sm">Problem Solving Session</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Tomorrow, 3:00 PM</p>
                    <p className="text-xs text-muted-foreground">Focus: Thermodynamics problems</p>
                  </div>
                  
                  <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={16} className="text-green-500" />
                      <span className="font-medium text-sm">Exam Review</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Friday, 2:00 PM</p>
                    <p className="text-xs text-muted-foreground">Midterm preparation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Shared Resources</h3>
                <button className="btn-secondary px-4 py-2 text-sm">
                  Upload File
                </button>
              </div>
              
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white/10 dark:bg-slate-700/20 rounded-xl hover:bg-white/20 dark:hover:bg-slate-700/30 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">{resource.type}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{resource.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {resource.size} • Uploaded by {resource.uploadedBy} • {resource.uploadedAt}
                      </p>
                    </div>
                    <button className="btn-secondary px-3 py-1 text-xs">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
