import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="mt-2">
      <label className="block w-full cursor-pointer">
        <div className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500">
          <div className="space-y-2 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="text-sm text-gray-600">
              <span className="font-medium text-blue-600 hover:text-blue-500">
                Click to upload
              </span>{' '}
              or drag and drop
            </div>
            <p className="text-xs text-gray-500">
              PDF, DOC, DOCX up to 10MB
            </p>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;