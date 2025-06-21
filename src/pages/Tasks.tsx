
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { Plus, Calendar, Clock, Flag, Filter, CheckSquare, Square, MoreVertical } from 'lucide-react';

export default function Tasks() {
  const [view, setView] = useState('list'); // 'list' or 'calendar'
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed'

  const tasks = [
    {
      id: 1,
      title: 'Submit Physics Lab Report',
      description: 'Complete the thermodynamics lab report with calculations and analysis',
      dueDate: 'Today, 6:00 PM',
      priority: 'high',
      completed: false,
      tags: ['Physics', 'Lab', 'Assignment'],
      assignedBy: 'Prof. Johnson'
    },
    {
      id: 2,
      title: 'Math Quiz Preparation',
      description: 'Review chapters 8-10 for the upcoming calculus quiz',
      dueDate: 'Tomorrow, 10:00 AM',
      priority: 'medium',
      completed: false,
      tags: ['Math', 'Quiz', 'Study'],
      assignedBy: 'Self'
    },
    {
      id: 3,
      title: 'Group Project Meeting',
      description: 'Discuss progress and assign remaining tasks for CS project',
      dueDate: 'Friday, 2:00 PM',
      priority: 'low',
      completed: false,
      tags: ['CS', 'Project', 'Meeting'],
      assignedBy: 'Sarah Wilson'
    },
    {
      id: 4,
      title: 'Read Chemistry Chapter 7',
      description: 'Study organic chemistry fundamentals',
      dueDate: 'Next Monday',
      priority: 'medium',
      completed: true,
      tags: ['Chemistry', 'Reading'],
      assignedBy: 'Self'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <TopNav />
        
        {/* Header */}
        <div className="glass-card p-6 rounded-2xl mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text">Tasks & Reminders</h1>
              <p className="text-muted-foreground mt-2">Stay organized and never miss a deadline</p>
            </div>
            <button className="btn-primary px-6 py-3 flex items-center gap-2">
              <Plus size={20} />
              Add Task
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-blue-500">{tasks.filter(t => !t.completed).length}</p>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-green-500">{tasks.filter(t => t.completed).length}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-red-500">{tasks.filter(t => t.priority === 'high' && !t.completed).length}</p>
              <p className="text-sm text-muted-foreground">High Priority</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-purple-500">{tasks.filter(t => t.dueDate.includes('Today')).length}</p>
              <p className="text-sm text-muted-foreground">Due Today</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="glass-card p-4 rounded-2xl mb-6 animate-slide-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex bg-white/10 dark:bg-slate-700/20 rounded-lg p-1">
                <button
                  onClick={() => setView('list')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    view === 'list' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'hover:bg-white/10 dark:hover:bg-slate-600/20'
                  }`}
                >
                  List View
                </button>
                <button
                  onClick={() => setView('calendar')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    view === 'calendar' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'hover:bg-white/10 dark:hover:bg-slate-600/20'
                  }`}
                >
                  Calendar View
                </button>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter size={18} />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-white/10 dark:bg-slate-700/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="all">All Tasks</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="btn-secondary px-4 py-2 text-sm">
                Export
              </button>
              <button className="btn-secondary px-4 py-2 text-sm">
                Import
              </button>
            </div>
          </div>
        </div>

        {view === 'list' ? (
          /* List View */
          <div className="glass-card rounded-2xl overflow-hidden animate-scale-in">
            <div className="divide-y divide-white/10">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-6 hover:bg-white/5 dark:hover:bg-slate-700/10 transition-colors ${
                    task.completed ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Checkbox */}
                    <button className="mt-1">
                      {task.completed ? (
                        <CheckSquare size={20} className="text-green-500" />
                      ) : (
                        <Square size={20} className="hover:text-blue-500 transition-colors" />
                      )}
                    </button>

                    {/* Task Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-semibold ${task.completed ? 'line-through' : ''}`}>
                          {task.title}
                        </h3>
                        <button className="p-1 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">{task.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        {/* Due Date */}
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span className={task.dueDate.includes('Today') ? 'text-red-500 font-medium' : 'text-muted-foreground'}>
                            {task.dueDate}
                          </span>
                        </div>

                        {/* Priority */}
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                          <span className="text-muted-foreground capitalize">{task.priority} priority</span>
                        </div>

                        {/* Assigned By */}
                        <div className="flex items-center gap-1">
                          <Flag size={14} />
                          <span className="text-muted-foreground">by {task.assignedBy}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {task.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 dark:bg-slate-600/20 rounded-lg text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Calendar View */
          <div className="glass-card p-6 rounded-2xl animate-scale-in">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">December 2024</h2>
                <div className="flex items-center gap-2">
                  <button className="btn-secondary px-3 py-1 text-sm">&lt;</button>
                  <button className="btn-secondary px-3 py-1 text-sm">Today</button>
                  <button className="btn-secondary px-3 py-1 text-sm">&gt;</button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Days of Week */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Adjust for month start
                  const isToday = day === 21;
                  const hasTask = [21, 22, 25].includes(day);
                  
                  return (
                    <div
                      key={i}
                      className={`p-3 text-center text-sm border border-white/10 rounded-lg hover:bg-white/10 dark:hover:bg-slate-700/10 transition-colors ${
                        isToday ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : ''
                      } ${day < 1 || day > 31 ? 'text-muted-foreground' : ''}`}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                      {hasTask && (
                        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's Tasks */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Today's Tasks</h3>
              <div className="space-y-3">
                {tasks.filter(task => task.dueDate.includes('Today')).map((task) => (
                  <div key={task.id} className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                      <h4 className="font-medium">{task.title}</h4>
                      <span className="text-sm text-muted-foreground ml-auto">{task.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
