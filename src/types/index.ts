export interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  type: 'document' | 'video' | 'link' | 'notes';
  url: string;
  author: string;
  createdAt: Date;
  likes: number;
  fileUrl?: string;
  fileName?: string;
}

export interface ResourceFormData {
  title: string;
  description: string;
  subject: string;
  type: 'document' | 'video' | 'link' | 'notes';
  url: string;
  file?: File;
}