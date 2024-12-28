import React, { useState } from 'react';
import ResourceCard from './components/ResourceCard';
import ResourceForm from './components/ResourceForm';
import Header from './components/Header';
import AuthModal from './components/auth/AuthModal';
import { Resource, ResourceFormData } from './types';
import { AuthState, LoginData, RegisterData } from './types/auth';

function App() {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: '1',
      title: 'Introduction to React',
      description: 'A comprehensive guide to getting started with React development',
      subject: 'Web Development',
      type: 'document',
      url: 'https://react.dev/learn',
      author: 'John Doe',
      createdAt: new Date(),
      likes: 42,
    },
    {
      id: '2',
      title: 'Mathematics Fundamentals',
      description: 'Essential mathematics concepts for college students',
      subject: 'Mathematics',
      type: 'video',
      url: 'https://example.com/math-video',
      author: 'Jane Smith',
      createdAt: new Date(),
      likes: 28,
    },
  ]);

  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = (data: ResourceFormData) => {
    if (!authState.user) {
      setShowAuthModal(true);
      return;
    }

    const newResource: Resource = {
      id: Date.now().toString(),
      ...data,
      author: authState.user.name,
      createdAt: new Date(),
      likes: 0,
    };
    setResources([newResource, ...resources]);
  };

  const handleLike = (id: string) => {
    if (!authState.user) {
      setShowAuthModal(true);
      return;
    }

    setResources(resources.map(resource =>
      resource.id === id
        ? { ...resource, likes: resource.likes + 1 }
        : resource
    ));
  };

  const handleLogin = (data: LoginData) => {
    // In a real app, this would make an API call
    setAuthState({
      user: {
        id: '1',
        email: data.email,
        name: data.email.split('@')[0],
        createdAt: new Date(),
      },
      isAuthenticated: true,
    });
    setShowAuthModal(false);
  };

  const handleRegister = (data: RegisterData) => {
    // In a real app, this would make an API call
    setAuthState({
      user: {
        id: '1',
        email: data.email,
        name: data.name,
        createdAt: new Date(),
      },
      isAuthenticated: true,
    });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        user={authState.user}
        onLoginClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Resources</h2>
            <div className="space-y-6">
              {resources.map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onLike={handleLike}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <ResourceForm onSubmit={handleSubmit} />
          </div>
        </div>
      </main>

      {showAuthModal && (
        <AuthModal
          onLogin={handleLogin}
          onRegister={handleRegister}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
}

export default App;