import { templates } from "@/data/templates";
import {Card, CardTitle} from "@/components/ui/card"; 

export default function TemplateSelect({template, setTemplate}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t) => {
                const isSelected = template === t;
                return (
                    <Card 
                        key={t.tonality} 
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg border ${
                            isSelected 
                                ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:ring-blue-400 dark:border-blue-400 dark:shadow-blue-900/20' 
                                : 'bg-white hover:bg-gray-50 border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30'
                        }`}
                        onClick={() => setTemplate(t)}
                    >
                        <div className="p-6">
                            <CardTitle className={`text-center text-lg font-semibold ${
                                isSelected 
                                    ? 'text-blue-700 dark:text-blue-300' 
                                    : 'text-gray-900 dark:text-gray-100'
                            }`}>
                                {t.tonality}
                            </CardTitle>
                        </div>
                    </Card>
                );
            })}
            
            {template && !templates.includes(template) && (
                <Card 
                    className="ring-2 ring-green-500 bg-green-50 border-green-200 dark:bg-green-900/30 dark:ring-green-400 dark:border-green-400 dark:shadow-green-900/20"
                >
                    <div className="p-6">
                        <CardTitle className="text-center text-lg font-semibold text-green-700 dark:text-green-300">
                            Custom: {template.tonality || 'Unnamed'}
                        </CardTitle>
                    </div>
                </Card>
            )}
        </div>
    );
}