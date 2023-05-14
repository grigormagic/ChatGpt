const API_KEY = "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";
const btn = document.querySelector("#btn");
const outPutElement = document.querySelector("#output");
const inputElement = document.querySelector("input");
function changeValue() {
  inputElement.value = '';
}
async function getMassage() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputElement.value }],
      temperature: 0.7,
      max_tokens: 50,
    }),
  };

  try {
    const resopnse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await resopnse.json();
    outPutElement.textContent = data.choices[0].message.content;
    if (data.choices[0].message.content) {
      const pElement = document.createElement("p");
      pElement.textContent = inputElement.value;
    }
  } catch (error) {
    console.error();
  }
}

btn.addEventListener("click", getMassage);
btn.addEventListener("click", changeValue);
