import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

interface CustomTemplatePopupProps {
  isOpen: boolean;
  onClose: () => void;
  customTonality: string;
  setCustomTonality: (value: string) => void;
  customText: string;
  setCustomText: (value: string) => void;
  onSave: () => void;
}

export default function CustomTemplatePopup({
  isOpen,
  onClose,
  customTonality,
  setCustomTonality,
  customText,
  setCustomText,
  onSave
}: CustomTemplatePopupProps) {
  if (!isOpen) return null;

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl dark:text-white flex items-center justify-between">
            Create Custom Template
            <Button 
              variant="outline" 
              size="sm"
              onClick={onClose}
              className="border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              ✕
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tonality
            </label>
            <Input
              value={customTonality}
              onChange={(e) => setCustomTonality(e.target.value)}
              placeholder="e.g., Motivational, Fun, Professional..."
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Template Text
            </label>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Enter your custom template text here..."
              rows={10}
              className="w-full p-3 border border-gray-300 rounded-md resize-vertical dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
            <div className="flex items-start">
              <div className="text-amber-600 dark:text-amber-400 mr-2">⚠️</div>
              <div>
                <h4 className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Important: Use Template Variables
                </h4>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                  Make sure to use <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">[CHALLENGE]</code>, <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">[LOCATION]</code>, and <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">[DISTANCE]</code> variables in your template text where appropriate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              variant="outline"
              onClick={onClose}
              className="border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Save Template
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}