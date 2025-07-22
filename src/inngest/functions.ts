import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    try {
      const codeAgent = createAgent({
        name: "codeAgent",
        system: "You are an expert Next.js developer with years of experience developing good UI components and landing pages. You write simple react and nextjs code snippets!",
        model: gemini({ 
          model: "gemini-1.5-flash", 
          apiKey: process.env.GEMINI_API_KEY 
        }),
      });

      // Add more context to the prompt
      const prompt = `Write the following snippet "${event.data.value}"`;
      const { output } = await codeAgent.run(prompt);

      return { output };
    } catch (error:any) {
      console.error('Detailed error:', {message: error.message});
      throw error;
    }
  },
);