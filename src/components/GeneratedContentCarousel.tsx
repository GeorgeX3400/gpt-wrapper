import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface GeneratedContentCarouselProps {
  content: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function GeneratedContentCarousel({ content, isOpen, onClose }: GeneratedContentCarouselProps) {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Content</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </Button>
        </div>
        
        <div className="px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {content.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="px-4 mb-2">
                      <div className="text-center mb-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Variation {index + 1} of {content.length}
                        </span>
                      </div>
                      <div className="prose dark:prose-invert max-w-none max-h-[50vh] overflow-y-auto">
                        <p className="text-base leading-relaxed whitespace-pre-wrap dark:text-slate-100">
                          {item}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}