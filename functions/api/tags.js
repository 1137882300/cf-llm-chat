export function onRequest(_context) {
  const models = [
    { name: "@cf/meta/llama-3.1-8b-instruct" },
    { name: "@hf/mistral/mistral-7b-instruct-v0.2" },
    { name: "@cf/microsoft/phi-2" },
    { name: "@cf/qwen/qwen1.5-14b-chat-awq" },
    { name: "@hf/google/gemma-7b-it" },
    { name: "@cf/meta/llama-3.2-11b-vision-instruct"},
    { name: "@cf/meta/llama-3.2-3b-instruct"},
    { name: "@cf/meta/llama-3.2-1b-instruct"},
    { name: "@cf/google/gemma-2b-it-lora"},
    { name: "@hf/thebloke/deepseek-coder-6.7b-base-awq"},
  ];
  return Response.json({ models });
}
