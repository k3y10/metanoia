// utilities/GenAiFirewall.ts

import { openaiApiKey } from '@/constants/env';

interface EducationalContent {
  topic: 'Kombo' | 'Reflexology';
  content: string;
}

export const fetchEducationalContent = async (topic: 'Kombo' | 'Reflexology'): Promise<EducationalContent> => {
  const promptContent = `
    Provide detailed educational content about ${topic}. Include key terms, benefits, historical context, and any important information that someone new to ${topic} should know.
  `;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0125',
        messages: [{ role: 'system', content: promptContent }],
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API request failed');
    }

    const responseData = await response.json();
    const content = responseData?.choices?.[0]?.message?.content || '';

    return { topic, content };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
