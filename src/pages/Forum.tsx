
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { 
  Search, 
  Filter, 
  Plus, 
  ArrowUp, 
  ArrowDown, 
  MessageCircle, 
  Eye, 
  Clock,
  User,
  Tag,
  Star,
  CheckCircle
} from 'lucide-react';

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { key: 'all', label: 'All Questions', count: 45 },
    { key: 'physics', label: 'Physics', count: 12 },
    { key: 'mathematics', label: 'Mathematics', count: 18 },
    { key: 'chemistry', label: 'Chemistry', count: 8 },
    { key: 'cs', label: 'Computer Science', count: 15 },
    { key: 'general', label: 'General Study', count: 7 }
  ];

  const questions = [
    {
      id: 1,
      title: 'How to solve thermodynamics problems involving entropy?',
      content: 'I\'m struggling with entropy calculations in thermodynamics. Can someone explain the concept with examples?',
      author: 'Sarah Wilson',
      authorAvatar: 'SW',
      timeAgo: '2 hours ago',
      category: 'physics',
      tags: ['thermodynamics', 'entropy', 'physics'],
      upvotes: 15,
      downvotes: 2,
      answers: 3,
      views: 45,
      solved: false,
      hasAcceptedAnswer: false
    },
    {
      id: 2,
      title: 'Best approach for learning calculus derivatives?',
      content: 'What are the most effective methods to understand and memorize derivative rules?',
      author: 'Mike Johnson',
      authorAvatar: 'MJ',
      timeAgo: '4 hours ago',
      category: 'mathematics',
      tags: ['calculus', 'derivatives', 'study-tips'],
      upvotes: 23,
      downvotes: 1,
      answers: 7,
      views: 89,
      solved: true,
      hasAcceptedAnswer: true
    },
    {
      id: 3,
      title: 'Organic chemistry reaction mechanisms - where to start?',
      content: 'I find organic chemistry reaction mechanisms overwhelming. Any tips for beginners?',
      author: 'Alice Chen',
      authorAvatar: 'AC',
      timeAgo: '1 day ago',
      category: 'chemistry',
      tags: ['organic-chemistry', 'mechanisms', 'beginner'],
      upvotes: 8,
      downvotes: 0,
      answers: 2,
      views: 34,
      solved: false,
      hasAcceptedAnswer: false
    },
    {
      id: 4,
      title: 'Data structures vs Algorithms - which to focus on first?',
      content: 'As a CS student, should I master data structures before moving to algorithms or study them together?',
      author: 'David Brown',
      authorAvatar: 'DB',
      timeAgo: '2 days ago',
      category: 'cs',
      tags: ['data-structures', 'algorithms', 'computer-science'],
      upvotes: 31,
      downvotes: 3,
      answers: 12,
      views: 156,
      solved: true,
      hasAcceptedAnswer: true
    },
    {
      id: 5,
      title: 'Effective note-taking strategies for lectures?',
      content: 'Looking for proven techniques to take better notes during fast-paced lectures.',
      author: 'Emma Davis',
      authorAvatar: 'ED',
      timeAgo: '3 days ago',
      category: 'general',
      tags: ['note-taking', 'study-tips', 'lectures'],
      upvotes: 19,
      downvotes: 1,
      answers: 8,
      views: 73,
      solved: false,
      hasAcceptedAnswer: false
    }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    switch (sortBy) {
      case 'upvotes':
        return b.upvotes - a.upvotes;
      case 'answers':
        return b.answers - a.answers;
      case 'views':
        return b.views - a.views;
      default:
        return 0; // Keep original order for 'recent'
    }
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
              <h1 className="text-3xl font-bold gradient-text">Q&A Forum</h1>
              <p className="text-muted-foreground mt-2">Get help from the community and share your knowledge</p>
            </div>
            <button className="btn-primary px-6 py-3 flex items-center gap-2">
              <Plus size={20} />
              Ask Question
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-blue-500">{questions.length}</p>
              <p className="text-sm text-muted-foreground">Total Questions</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-green-500">{questions.filter(q => q.solved).length}</p>
              <p className="text-sm text-muted-foreground">Solved</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-purple-500">{questions.filter(q => q.hasAcceptedAnswer).length}</p>
              <p className="text-sm text-muted-foreground">Accepted Answers</p>
            </div>
            <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl">
              <p className="text-2xl font-bold text-orange-500">{questions.reduce((sum, q) => sum + q.answers, 0)}</p>
              <p className="text-sm text-muted-foreground">Total Answers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
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

            {/* Top Contributors */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Top Contributors</h4>
              <div className="space-y-3">
                {[
                  { name: 'Alice Chen', avatar: 'AC', points: 520, answers: 12 },
                  { name: 'Mike Johnson', avatar: 'MJ', points: 435, answers: 8 },
                  { name: 'Sarah Wilson', avatar: 'SW', points: 380, answers: 15 }
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">{contributor.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.points} points • {contributor.answers} answers</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500" />
                      <span className="text-xs">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
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
                      placeholder="Search questions..."
                      className="pl-10 pr-4 py-2 bg-white/20 dark:bg-slate-700/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64"
                    />
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <Filter size={18} />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white/10 dark:bg-slate-700/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="upvotes">Most Upvoted</option>
                      <option value="answers">Most Answered</option>
                      <option value="views">Most Viewed</option>
                    </select>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {sortedQuestions.length} questions
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="glass-card rounded-2xl overflow-hidden animate-scale-in">
              <div className="divide-y divide-white/10">
                {sortedQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="p-6 hover:bg-white/5 dark:hover:bg-slate-700/10 transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Voting */}
                      <div className="flex flex-col items-center gap-1 text-sm">
                        <button className="p-1 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded transition-colors">
                          <ArrowUp size={16} />
                        </button>
                        <span className="font-semibold">{question.upvotes - question.downvotes}</span>
                        <button className="p-1 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded transition-colors">
                          <ArrowDown size={16} />
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground min-w-0">
                        <div className={`px-2 py-1 rounded text-xs ${
                          question.hasAcceptedAnswer 
                            ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                            : 'bg-white/10 dark:bg-slate-700/20'
                        }`}>
                          {question.answers} answers
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span className="text-xs">{question.views}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold hover:text-blue-600 cursor-pointer">
                            {question.title}
                            {question.hasAcceptedAnswer && (
                              <CheckCircle size={16} className="inline ml-2 text-green-500" />
                            )}
                          </h3>
                          {question.solved && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-xs">
                              Solved
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {question.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {question.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-xs flex items-center gap-1"
                                >
                                  <Tag size={10} />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">{question.authorAvatar}</span>
                              </div>
                              <span>{question.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={12} />
                              <span>{question.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
