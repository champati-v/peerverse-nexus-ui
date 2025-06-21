
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageCircle, FileText, Video, Zap, Shield } from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Connect with peers instantly through our seamless messaging platform'
    },
    {
      icon: Video,
      title: 'Video Calls',
      description: 'High-quality video calls for study sessions and group discussions'
    },
    {
      icon: FileText,
      title: 'Collaborative Notes',
      description: 'Share and edit notes together in real-time with your study partners'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Form and join study groups based on subjects and interests'
    },
    {
      icon: Zap,
      title: 'Smart Reminders',
      description: 'Never miss a deadline with intelligent task and study reminders'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between glass-card px-6 py-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl gradient-text">PeerVerse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="btn-secondary">Login</Link>
            <Link to="/register" className="btn-primary">Get Started</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-float">
            Learn Together,
            <br />
            Grow Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            The ultimate collaborative platform for students to chat, video call, share notes, and form study groups. Transform your learning experience with PeerVerse.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/register" className="btn-primary text-lg px-8 py-4 flex items-center gap-3">
              Get Started Free
              <ArrowRight size={20} />
            </Link>
            <Link to="#features" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="animate-slide-up">
          <div className="glass-card p-8 rounded-3xl max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-300 to-cyan-300 rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="h-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-gradient-to-r from-purple-200 to-cyan-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to collaborate, learn, and succeed together with your peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students already using PeerVerse to enhance their academic journey.
          </p>
          <Link to="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
            Start Your Journey
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold gradient-text">PeerVerse</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 PeerVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
