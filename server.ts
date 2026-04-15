import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  app.use(express.json());

  // API Route for visit notification
  app.post("/api/visit", async (req, res) => {
    const { userAgent, language, referrer } = req.body;
    const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "Africa/Luanda" });
    
    console.log(`[${timestamp}] Nova visita detectada!`);

    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: "🚀 Nova Visita no seu Portfólio!",
          html: `
            <h1>Nova Visita Detectada!</h1>
            <p><strong>Data/Hora:</strong> ${timestamp}</p>
            <p><strong>Navegador:</strong> ${userAgent}</p>
            <p><strong>Idioma:</strong> ${language}</p>
            <p><strong>Referência:</strong> ${referrer || "Direto"}</p>
            <hr />
            <p>Este é um alerta automático do seu portfólio JP.tech.</p>
          `,
        });
        console.log("Notificação enviada com sucesso.");
      } catch (error) {
        console.error("Erro ao enviar notificação:", error);
      }
    } else {
      console.warn("RESEND_API_KEY não configurada. Notificação não enviada.");
    }

    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
