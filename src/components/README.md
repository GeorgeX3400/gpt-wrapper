# Components Overview

This folder contains all the React components used in the Copywriter application. Each component serves a specific purpose in the user experience.

## Main Components

### CustomTemplatePopup.tsx
A modal popup that allows users to create their own custom templates. Users can input a tonality name and write their template content, with helpful warnings about using the required variables.

### GeneratedContentCarousel.tsx
Displays the AI-generated content variations in an interactive carousel format. Users can navigate through different content variations and scroll through long content easily.

### TemplateSelect.tsx
Shows all available templates as selectable cards on the main page. Displays both pre-built templates and custom templates, with visual indicators for the currently selected template.

### Templates.tsx
A dedicated page component that displays all available templates in a browsable gallery format. Users can view full template content and select templates from this page.

### Variables.tsx
Provides input fields for users to configure their content variables (challenge name, location, distance, and number of variations) before generating content.

## UI Components (ui/ folder) 

The `ui/` folder contains reusable interface components that provide consistent styling and behavior throughout the application (imported from shadcn library).
