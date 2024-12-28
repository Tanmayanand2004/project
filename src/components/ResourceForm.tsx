import React, { useState } from 'react';
import { ResourceFormData } from '../types';
import FileUpload from './FileUpload';

interface ResourceFormProps {
  onSubmit: (data: ResourceFormData) => void;
}

const ResourceForm: React.FC<ResourceFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResourceFormData>({
    title: '',
    description: '',
    subject: '',
    type: 'document',
    url: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      subject: '',
      type: 'document',
      url: '',
    });
  };

  const handleFileSelect = (file: File) => {
    setFormData(prev => ({
      ...prev,
      file,
      type: 'notes',
      url: URL.createObjectURL(file)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
        Share a Resource
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as ResourceFormData['type'] })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="document">Document</option>
            <option value="video">Video</option>
            <option value="link">Link</option>
            <option value="notes">Notes</option>
          </select>
        </div>
        {formData.type === 'notes' ? (
          <FileUpload onFileSelect={handleFileSelect} />
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Share Resource
        </button>
      </div>
    </form>
  );
};

export default ResourceForm;