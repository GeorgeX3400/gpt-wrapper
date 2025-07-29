import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { templates } from '../data/templates';

interface TemplatesProps {
  onSelectTemplate?: (template: any) => void;
  onBack: () => void;
}

export default function Templates({ onSelectTemplate, onBack }: TemplatesProps) {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-800">
          
        <h1 className='p-4 text-2xl font-bold text-gray-900 dark:text-white'>Available Templates</h1>
          
      <main className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1  gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white flex items-center justify-between">
                  {template.tonality}
                  {onSelectTemplate && (
                    <Button 
                      size="sm" 
                      onClick={() => onSelectTemplate(template)}
                      className="ml-2 bg-slate-800 hover:bg-slate-700 dark:bg-slate-300 dark:hover:bg-slate-200 dark:text-slate-900"
                    >
                      Select
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-84 overflow-y-auto">
                  <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {template.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}