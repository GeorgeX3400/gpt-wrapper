

export function generate_prompt(
    template: {tonality: string, text: string}, 
    config: {challenge: string, location: string, distance: string, variations: number}
) {
    const prompt = `
        Use this template: ${template.text} 
        and apply it using this variables: 
        [CHALLENGE] -> ${config.challenge}
        [LOCATION] -> ${config.location}
        [distance] -> ${config.distance} .
        Create me ${config.variations} variations, while keeping the same core structure and the same provided variables.
        IMPORTANT: generate me the answer in the following format and ONLY IN THIS FORMAT:
        ["text1", "text2", ...]. Write the texts in the array exactly how they should be written in a json file for proper parsing. Don't add any text in the answer, only the array of applied templates in the given format.
    `
    return prompt;
}