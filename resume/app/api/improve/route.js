export async function POST(req) {
  const body = await req.json();

  const prompt = `
  Improve this resume intro professionally and fix grammar:
  ${body.intro}
  Based on skills: ${body.skills}
  `;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  return Response.json({
    intro: data.choices?.[0]?.message?.content || body.intro
  });
}
