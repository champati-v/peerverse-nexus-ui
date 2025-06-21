
import { useState } from 'react';
import { X, Trophy, Star, Award, Zap, Target, Calendar } from 'lucide-react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModal({ isOpen, onClose }: GameModalProps) {
  if (!isOpen) return null;

  const userStats = {
    level: 12,
    xp: 1250,
    xpToNext: 350,
    totalXp: 1600,
    streak: 7,
    rank: 'Scholar'
  };

  const badges = [
    { id: 1, name: 'Study Streak', description: '7 days in a row', icon: '🔥', rarity: 'common', earned: true, points: 50 },
    { id: 2, name: 'Helper', description: 'Helped 10+ peers', icon: '🤝', rarity: 'uncommon', earned: true, points: 100 },
    { id: 3, name: 'Note Master', description: 'Shared 20+ notes', icon: '📚', rarity: 'rare', earned: true, points: 150 },
    { id: 4, name: 'Quiz Champion', description: 'Top scorer in quiz', icon: '🏆', rarity: 'epic', earned: false, points: 200 },
    { id: 5, name: 'Team Player', description: 'Active in 5+ groups', icon: '⭐', rarity: 'rare', earned: true, points: 125 },
    { id: 6, name: 'Early Bird', description: 'Study before 8 AM', icon: '🌅', rarity: 'uncommon', earned: false, points: 75 }
  ];

  const achievements = [
    { title: 'First Study Session', date: '2024-01-15', xp: 25 },
    { title: 'Joined First Group', date: '2024-01-18', xp: 50 },
    { title: 'Shared First Note', date: '2024-01-20', xp: 30 },
    { title: 'Earned Helper Badge', date: '2024-02-01', xp: 100 },
    { title: 'Completed Weekly Goal', date: '2024-02-05', xp: 75 }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-500 to-gray-600';
      case 'uncommon': return 'from-green-500 to-green-600';
      case 'rare': return 'from-blue-500 to-blue-600';
      case 'epic': return 'from-purple-500 to-purple-600';
      case 'legendary': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Trophy size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold gradient-text">Your Progress</h2>
              <p className="text-muted-foreground">Level {userStats.level} {userStats.rank}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* XP Progress */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Experience Points</h3>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">{userStats.xp} XP</p>
                <p className="text-sm text-muted-foreground">{userStats.xpToNext} XP to next level</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-white/20 dark:bg-slate-700/20 rounded-full h-4">
                <div 
                  className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${(userStats.xp / userStats.totalXp) * 100}%` }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium text-white">
                  Level {userStats.level}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap size={20} className="text-yellow-500" />
                  <span className="font-bold text-lg">{userStats.streak}</span>
                </div>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
              
              <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target size={20} className="text-green-500" />
                  <span className="font-bold text-lg">{userStats.level}</span>
                </div>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
              
              <div className="p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award size={20} className="text-purple-500" />
                  <span className="font-bold text-lg">{badges.filter(b => b.earned).length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Badges & Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-4 rounded-xl border transition-all hover:scale-105 ${
                    badge.earned
                      ? `bg-gradient-to-r ${getRarityColor(badge.rarity)}/20 border-current`
                      : 'bg-white/5 dark:bg-slate-700/10 border-white/10 opacity-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        badge.rarity === 'common' ? 'bg-gray-500/20 text-gray-400' :
                        badge.rarity === 'uncommon' ? 'bg-green-500/20 text-green-400' :
                        badge.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                        badge.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {badge.rarity}
                      </span>
                      <span className="text-xs text-muted-foreground">+{badge.points} XP</span>
                    </div>
                    {badge.earned && (
                      <div className="mt-2">
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          ✨ Earned
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/10 dark:bg-slate-700/20 rounded-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Star size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{achievement.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-500">+{achievement.xp} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <button className="btn-primary px-6 py-3 flex-1">
              View Leaderboard
            </button>
            <button className="btn-secondary px-6 py-3 flex-1">
              Share Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
