// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const apiKey="AIzaSyDt1aqx2HQkLy2jvNwzMJT00aLwrFDzw0A"

// if (!apiKey) {
//   console.error('API key not found in environment variables');
//   process.exit(1);
// }

// console.log('Testing API key:', apiKey);

// const genAI = new GoogleGenerativeAI(apiKey);

// async function testApiKey() {
//   try {
//     // Create a model instance
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
//     // Try a simple request
//     const result = await model.generateContent('Explain AI in 3 words');
    
//     console.log('API key is valid! Here is the response:', JSON.stringify(result.response));
//   } catch (error) {
//     console.error('API key validation failed:', error.message);
//   }
// }

// testApiKey();
