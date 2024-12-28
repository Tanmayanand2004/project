import React, { useState } from 'react';
import { LoginData, RegisterData } from '../../types/auth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  onLogin: (data: LoginData) => void;
  onRegister: (data: RegisterData) => void;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onLogin, onRegister, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          Close
        </button>
        {isLogin ? (
          <LoginForm
            onLogin={onLogin}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onRegister={onRegister}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;