import axios from "axios";

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { input_value } = await req.json();

        // Validate the `input_value` to ensure it exists
        if (!input_value) {
            return new Response(
                JSON.stringify({ error: "Input value is required" }),
                { status: 400 }
            );
        }

        // Make the API call to Langflow
        const response = await axios.post(
            `https://api.langflow.astra.datastax.com/lf/${process.env.LANGFLOW_ID}/api/v1/run/${process.env.FLOW_ID}?stream=false`,
            {
                input_value,
                output_type: "chat",
                input_type: "chat",
                tweaks: {
                    "ChatInput-EK3ch": {},
                    "ParseData-ceg3x": {},
                    "Prompt-ImRDP": {},
                    "ChatOutput-hPwBT": {},
                    "AstraDB-Rim6h": {},
                    "GoogleGenerativeAIModel-4eeh2": {},
                    "File-VBLgL": {},
                    "SplitText-hWLED": {},
                    "Google Generative AI Embeddings-Fl15x": {},
                },
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.APPLICATION_TOKEN}`,
                },
            }
        );

        // Extract and return the chatbot's response
        const message =
            response?.data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text;
        if (!message) {
            throw new Error("No valid message returned from Langflow API");
        }

        return new Response(JSON.stringify({ message }), { status: 200 });
    } catch (error: any) {
        // Log the error for debugging
        console.error("Error in POST handler:", error);

        // Provide a user-friendly error message
        return new Response(
            JSON.stringify({
                error:
                    error?.response?.data?.message || "Internal Server Error",
            }),
            { status: error?.response?.status || 500 }
        );
    }
}
