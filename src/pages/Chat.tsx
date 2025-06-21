
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { Send, Paperclip, Smile, Search, Phone, Video, MoreVertical, Users } from 'lucide-react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);

  const contacts = [
    {
      id: 1,
      name: 'Sarah Wilson',
      avatar: 'SW',
      lastMessage: 'Thanks for the notes!',
      time: '2m ago',
      unread: 2,
      online: true,
      type: 'individual'
    },
    {
      id: 2,
      name: 'Physics Study Group',
      avatar: 'PS',
      lastMessage: 'Meeting tomorrow at 3 PM',
      time: '15m ago',
      unread: 0,
      online: false,
      type: 'group',
      members: 8
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: 'MJ',
      lastMessage: 'Can you help with assignment?',
      time: '1h ago',
      unread: 1,
      online: true,
      type: 'individual'
    },
    {
      id: 4,
      name: 'Math Warriors',
      avatar: 'MW',
      lastMessage: 'Alice: Check out this solution',
      time: '2h ago',
      unread: 0,
      online: false,
      type: 'group',
      members: 12
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Wilson',
      content: 'Hey! Did you finish the physics assignment?',
      time: '10:30 AM',
      isMine: false,
      avatar: 'SW'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Yes, just submitted it. It was quite challenging!',
      time: '10:32 AM',
      isMine: true
    },
    {
      id: 3,
      sender: 'Sarah Wilson',
      content: 'I struggled with question 3. Could you explain your approach?',
      time: '10:35 AM',
      isMine: false,
      avatar: 'SW'
    },
    {
      id: 4,
      sender: 'You',
      content: 'Sure! I used the conservation of energy principle. Let me send you my notes.',
      time: '10:37 AM',
      isMine: true
    },
    {
      id: 5,
      sender: 'Sarah Wilson',
      content: 'Thanks for the notes!',
      time: '10:45 AM',
      isMine: false,
      avatar: 'SW'
    }
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      
      <div className="flex-1 flex">
        {/* Chat List */}
        <div className="w-80 glass-card m-6 mr-3 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-white/20 dark:bg-slate-700/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="overflow-y-auto">
            {contacts.map((contact, index) => (
              <div
                key={contact.id}
                onClick={() => setSelectedChat(index)}
                className={`p-4 cursor-pointer transition-colors hover:bg-white/10 dark:hover:bg-slate-700/20 ${
                  selectedChat === index ? 'bg-white/20 dark:bg-slate-700/30' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{contact.avatar}</span>
                    </div>
                    {contact.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        {contact.type === 'group' && (
                          <Users size={14} className="text-muted-foreground" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                      {contact.unread > 0 && (
                        <div className="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                          {contact.unread}
                        </div>
                      )}
                    </div>
                    {contact.type === 'group' && (
                      <p className="text-xs text-muted-foreground">{contact.members} members</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col">
          <div className="glass-card m-6 ml-3 rounded-2xl flex-1 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{contacts[selectedChat].avatar}</span>
                  </div>
                  {contacts[selectedChat].online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{contacts[selectedChat].name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {contacts[selectedChat].type === 'group' 
                      ? `${contacts[selectedChat].members} members` 
                      : contacts[selectedChat].online ? 'Online' : 'Last seen 1h ago'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                  <Phone size={20} />
                </button>
                <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                  <Video size={20} />
                </button>
                <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end gap-2 max-w-xs lg:max-w-md ${msg.isMine ? 'flex-row-reverse' : 'flex-row'}`}>
                    {!msg.isMine && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">{msg.avatar}</span>
                      </div>
                    )}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.isMine
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-white/20 dark:bg-slate-700/20'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isMine ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="flex items-end gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">SW</span>
                  </div>
                  <div className="bg-white/20 dark:bg-slate-700/20 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                  <Paperclip size={20} />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-3 bg-white/20 dark:bg-slate-700/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 dark:hover:bg-slate-700/20 rounded-lg transition-colors">
                    <Smile size={18} />
                  </button>
                </div>
                <button className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:scale-105 transition-transform">
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
