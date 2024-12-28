import React from 'react';
import { FileText, Video, Link as LinkIcon, FileUp } from 'lucide-react';
import { Resource } from '../types';

export const getResourceIcon = (type: Resource['type']) => {
  switch (type) {
    case 'document':
      return <FileText className="w-6 h-6" />;
    case 'video':
      return <Video className="w-6 h-6" />;
    case 'link':
      return <LinkIcon className="w-6 h-6" />;
    case 'notes':
      return <FileUp className="w-6 h-6" />;
  }
};