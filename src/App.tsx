import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Home as HomeIcon,
  MessageSquare,
  Settings,
  Trophy,
  User
} from 'lucide-react';

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="bg-red-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-black-600 fill-red-600" />
            <span className="text-xl font-bold text-gray-800">Knowledge Hub</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<HomeIcon className="w-5 h-5" />} text="Home" />
            <NavLink
              to="/daily-tips"
              icon={<BookOpen className="w-5 h-5" />}
              text="Daily Tips"
            />
            <NavLink to="/about" icon={<User className="w-5 h-5" />} text="About" />
            <NavLink
              to="/questions"
              icon={<MessageSquare className="w-5 h-5" />}
              text="Q&A"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function Card({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function HomePage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Knowledge Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sharing years of business experience, daily insights, and practical knowledge
          to help you succeed in your entrepreneurial journey.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        <Card
          icon={<BookOpen className="w-8 h-8 text-red-600" />}
          title="Daily Business Tips"
          description="Get daily insights and practical advice drawn from real business experience."
          link="/daily-tips"
        />
        <Card
          icon={<Trophy className="w-8 h-8 text-red-600"/>}
          title="Experience & Achievements"
          description="Learn about my journey, certifications, and professional milestones."
          link="/about"
        />
        <Card
          icon={<MessageSquare className="w-8 h-8 text-red-600" />}
          title="Ask Questions"
          description="Get answers to your business-related questions from experienced professionals."
          link="/questions"
        />
      </section>

      <section className="bg-red-50 rounded-xl p-8 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pre-order My New Book
          </h2>
          <p className="text-gray-600 mb-6">
            "Essential Knowledge for Business Success" - A comprehensive guide drawing
            from years of real-world business experience.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function DailyTips() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Daily Business Tips</h1>
      <div className="space-y-6">
        <p className="text-gray-600">Daily tips coming soon...</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
      <div className="space-y-6">
        <p className="text-gray-600">Profile information coming soon...</p>
      </div>
    </div>
  );
}

function Book() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Essential Knowledge for Business Success
      </h1>
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Pre-order Now Available
        </h2>
        <p className="text-gray-600 mb-6">
          Drawing from years of real-world business experience, this comprehensive
          guide provides essential insights and practical strategies for business
          success.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Pre-order Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-gray-600">Book details coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function Questions() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <MessageSquare className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">Questions & Answers</h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ask a Question</h2>
        <p className="text-gray-600 mb-6">
          Have a business-related question? I'm here to help with insights from my
          years of experience.
        </p>
        <p className="text-gray-600">Question submission form coming soon...</p>
      </div>
      <div className="space-y-6">
        <p className="text-gray-600">Questions and answers will appear here...</p>
      </div>
    </div>
  );
}

function Admin() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Settings className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Daily Tips Management
          </h2>
          <p className="text-gray-600">Tips management coming soon...</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Questions Management
          </h2>
          <p className="text-gray-600">Questions management coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/daily-tips" element={<DailyTips />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
