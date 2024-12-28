import React from 'react';
import { ThumbsUp, Share2 } from 'lucide-react';
import { Resource } from '../types';
import { getResourceIcon } from '../utils/resourceUtils';

interface ResourceCardProps {
  resource: Resource;
  onLike: (id: string) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onLike }) => {
  const icon = getResourceIcon(resource.type);

  return (
    <div className="glass-effect rounded-xl p-6 card-hover">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
          <p className="text-gray-600">{resource.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-700">
          {resource.subject}
        </span>
        <span className="italic">By {resource.author}</span>
      </div>
      <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 hover:underline"
        >
          View Resource
        </a>
        <div className="flex gap-4">
          <button
            onClick={() => onLike(resource.id)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{resource.likes}</span>
          </button>
          <button className="text-gray-600 hover:text-blue-600 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;