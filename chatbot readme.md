# 🩺 Medical Chatbot Server (Node.js)

A high-performance RAG (Retrieval-Augmented Generation) server that provides professional medical answers based on **Harrison's Principles of Internal Medicine**.

## 🚀 Live Production Environment
- **Base URL**: `https://qyggakfcew.ap-south-1.awsapprunner.com`
- **Infrastructure**: AWS App Runner
- **Region**: ap-south-1 (Mumbai)

---

## 🛠️ System Architecture (Ultra High-Res)
This server is optimized for medical precision using the highest possible embedding resolution.

- **Embedding Model**: `gemini-embedding-001` (Google)
- **Resolution**: **3072 Dimensions**
- **Synthesis Model**: `gemini-2.0-flash`
- **Vector Database**: Pinecone (`medical-chatbot`)

---

## 📡 API Endpoints

### 1. Health Check
Used by AWS to monitor the service status.
- **Method**: `GET`
- **Path**: `/health`
- **Response**: `{"status":"ok", "service":"medical-chatbot"}`

### 2. Chat Query (RAG)
Main endpoint for medical information retrieval and synthesis.
- **Method**: `POST`
- **Path**: `/chat`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "message": "What is hypertension?"
  }
  ```
- **Success Response**:
  ```json
  {
    "answer": "Professional medical response based on context...",
    "citations": ["Harrison P. 235", "Harrison P. 240"]
  }
  ```

---

## 🔑 Environment Variables (AWS Config)
To run this server (locally or on AWS), the following secrets are required:

| Variable | Description |
| :--- | :--- |
| `GOOGLE_API_KEY` | Paid Google AI key for Gemini 2.0 and Embeddings |
| `PINECONE_API_KEY` | Pinecone production API key |
| `PINECONE_INDEX` | Set to `medical-chatbot` |
| `PORT` | Dynamic (Default: 3000) |

---

## 💻 How to Test
You can test the live server using any HTTP client:

**Node.js Example:**
```javascript
const response = await fetch("https://qyggakfcew.ap-south-1.awsapprunner.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "What are the symptoms of Cushing's Syndrome?" })
});
console.log(await response.json());
```

**cURL Example:**
```bash
curl -X POST https://qyggakfcew.ap-south-1.awsapprunner.com/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "What is hypertension?"}'
```

---
**Status**: ⚡ Production Ready 
**Support**: Harrison Medical Manual v20
