
import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MoreVertical, Users, MessageSquare, Settings } from 'lucide-react';

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showParticipants, setShowParticipants] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Main Video Area */}
      <div className="h-full flex">
        {/* Primary Video */}
        <div className="flex-1 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-6xl text-white font-bold">SW</span>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">Sarah Wilson</h2>
              <p className="text-white/70">Computer Science Student</p>
            </div>
          </div>
          
          {/* Participant Name Overlay */}
          <div className="absolute bottom-6 left-6">
            <div className="glass-card px-4 py-2 rounded-lg">
              <p className="font-medium text-white">Sarah Wilson</p>
            </div>
          </div>

          {/* Call Duration */}
          <div className="absolute top-6 left-6">
            <div className="glass-card px-4 py-2 rounded-lg">
              <p className="font-medium text-white">15:23</p>
            </div>
          </div>
        </div>

        {/* Secondary Video (You) */}
        <div className="absolute top-6 right-6 w-64 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden glass-card">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl text-white font-bold">JD</span>
              </div>
              <p className="text-sm font-medium text-white">You</p>
            </div>
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="bg-black/50 px-2 py-1 rounded text-xs text-white">
              John Doe
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-4 rounded-xl transition-all hover:scale-105 ${
              isMuted 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {isMuted ? <MicOff size={24} className="text-white" /> : <Mic size={24} className="text-white" />}
          </button>

          {/* Video Button */}
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-4 rounded-xl transition-all hover:scale-105 ${
              !isVideoOn 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {isVideoOn ? <Video size={24} className="text-white" /> : <VideoOff size={24} className="text-white" />}
          </button>

          {/* End Call Button */}
          <button className="p-4 bg-red-500 hover:bg-red-600 rounded-xl transition-all hover:scale-105">
            <PhoneOff size={24} className="text-white" />
          </button>

          {/* Chat Button */}
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all hover:scale-105">
            <MessageSquare size={24} className="text-white" />
          </button>

          {/* Participants Button */}
          <button
            onClick={() => setShowParticipants(!showParticipants)}
            className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all hover:scale-105"
          >
            <Users size={24} className="text-white" />
          </button>

          {/* Settings Button */}
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all hover:scale-105">
            <Settings size={24} className="text-white" />
          </button>

          {/* More Options */}
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all hover:scale-105">
            <MoreVertical size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Participants Panel */}
      {showParticipants && (
        <div className="absolute top-0 right-0 w-80 h-full glass-card rounded-l-2xl p-6 animate-slide-in-right">
          <h3 className="text-xl font-semibold text-white mb-6">Participants (2)</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SW</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Sarah Wilson</p>
                <p className="text-sm text-white/70">Host</p>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">John Doe (You)</p>
                <p className="text-sm text-white/70">Participant</p>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connection Status */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-white">Connection Quality: Excellent</span>
        </div>
      </div>
    </div>
  );
}
