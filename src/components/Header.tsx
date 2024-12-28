import React from 'react';
import { GraduationCap, LogOut } from 'lucide-react';
import { User } from '../types/auth';

interface HeaderProps {
  user: User | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLoginClick, onLogout }) => {
  return (
    <header className="glass-effect sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              StudySphere
            </h1>
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;