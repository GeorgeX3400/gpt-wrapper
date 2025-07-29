import { useState, useTransition } from 'react'
import TemplateSelect from './components/TemplateSelect';
import Variables from './components/Variables';
import GeneratedContentCarousel from './components/GeneratedContentCarousel';
import Templates from './components/Templates';
import CustomTemplatePopup from './components/CustomTemplatePopup';
import './index.css'
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { generate_prompt } from './repository/prompt';
import { generate_posts } from './repository/call';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [template, setTemplate] = useState(null);
  const [variables, setVariables] = useState({
    challenge: "",
    location: "",
    distance: "",
    variations: 1
  });
  const [generatedContent, setGeneratedContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCustomTemplate, setShowCustomTemplate] = useState(false);
  const [customTonality, setCustomTonality] = useState('');
  const [customText, setCustomText] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleTemplateSelect = (selectedTemplate) => {
    setTemplate(selectedTemplate);
    setCurrentPage('home');
  };

  const handleCustomTemplateSave = () => {
    const customTemplate = {
      tonality: customTonality,
      text: customText
    };
    setTemplate(customTemplate);
  };

  const handleGenerate = (template, variables) => {
    startTransition(async () => {
      try {
        const prompt = generate_prompt(template, variables);
        console.log(prompt);
        const response = await generate_posts(prompt);
        console.log('Raw response:', response);
        
        // Extract JSON array from response (handle extra text)
        const jsonMatch = response.match(/\[.*\]/s);
        if (jsonMatch) {
          const parsedContent = JSON.parse(jsonMatch[0]);
          setGeneratedContent(parsedContent);
        } else {
          // Fallback: try direct parsing
          const parsedContent = JSON.parse(response);
          setGeneratedContent(parsedContent);
        }
      } catch (error) {
        console.error('Error generating content:', error);
        console.error('Raw response that failed to parse:', response);
        setGeneratedContent(['Error generating content. Please try again.']);
      }
    });
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-800">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Copywriter</h1>
          <nav className="flex gap-4">
            <Button 
              variant={currentPage === 'home' ? 'default' : 'outline'}
              onClick={() => setCurrentPage('home')}
              className={`text-sm ${
                currentPage === 'home' 
                  ? 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100' 
                  : 'border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              Home
            </Button>
            <Button 
              variant={currentPage === 'templates' ? 'default' : 'outline'}
              onClick={() => setCurrentPage('templates')}
              className={`text-sm ${
                currentPage === 'templates' 
                  ? 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100' 
                  : 'border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              View All Templates
            </Button>
          </nav>
        </div>
      </header>
      
      {currentPage === 'home' ? (
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">Choose your template:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <TemplateSelect template={template} setTemplate={setTemplate}/>
                <div className="flex justify-center pt-2">
                  <Button 
                    variant="outline"
                    onClick={() => setShowCustomTemplate(true)}
                    className="border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
                  >
                    Use Custom Template
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">Configure Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <Variables variables={variables} setVariables={setVariables}/>
              </CardContent>
            </Card>
            
            <div className="flex justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg bg-slate-800 font-semibold hover:shadow-2xs dark:bg-slate-300"
                onClick={() => handleGenerate(template, variables)}
                disabled={isPending || !template}
              >
                {isPending ? 'Generating...' : 'Generate'}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-3 text-lg font-semibold border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
                onClick={() => setShowPopup(true)}
                disabled={!generatedContent}
              >
                View Results
              </Button>
            </div>
          </div>
        </main>
      ) : (
        <Templates 
          onSelectTemplate={handleTemplateSelect} 
          onBack={() => setCurrentPage('home')} 
        />
      )}

      <GeneratedContentCarousel 
        content={generatedContent}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <CustomTemplatePopup
        isOpen={showCustomTemplate}
        onClose={() => setShowCustomTemplate(false)}
        customTonality={customTonality}
        setCustomTonality={setCustomTonality}
        customText={customText}
        setCustomText={setCustomText}
        onSave={handleCustomTemplateSave}
      />
    </div>
  )
}

export default App
