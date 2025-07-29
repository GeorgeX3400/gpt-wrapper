import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function Variables({variables, setVariables}) {
    return (
        <div className="space-y-6">
            {/* Challenge Information Section */}
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Challenge Name
                        </label>
                        <Input 
                            className="bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                            placeholder="Enter challenge name"
                            value={variables.challenge}
                            onChange={(e) => setVariables(v => ({ ...v, challenge: e.target.value }))}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Location
                        </label>
                        <Input 
                            className="bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                            placeholder="Challenge location"
                            value={variables.location}
                            onChange={(e) => setVariables(v => ({ ...v, location: e.target.value }))}
                        />
                    </div>
                </div>
            </div>

            <Separator className="dark:bg-gray-600" />
            
            {/* Challenge Configuration Section */}
            <div className="space-y-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Distance
                        </label>
                        <Input 
                            className="bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                            placeholder="e.g., 5km, 10 miles"
                            value={variables.distance}
                            onChange={(e) => setVariables(v => ({ ...v, distance: e.target.value }))}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Number of Variations
                        </label>
                        <Input 
                            className="bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                            type="number"
                            max={5}
                            min={1}
                            placeholder="1"
                            value={variables.variations}
                            onChange={(e) => setVariables(v => ({ ...v, variations: e.target.value }))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

