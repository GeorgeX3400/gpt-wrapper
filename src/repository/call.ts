import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
});



export async function generate_posts(prompt) {
    const msg = await anthropic.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 2500,
        temperature: 1,
        system: "You are an expert copywriter",
        messages: [
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": prompt
                }
            ]
            }
        ]
    });
    console.log(msg);
    const response = msg.content[0].text;
    console.log(response);
    return response;
}