import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Telegram not configured" },
        { status: 500 }
      );
    }

    // Форматирование времени для Саратова
    const currentTime = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Saratov',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const text = `
🚗 *Новая заявка с сайта Автопул*

━━━━━━━━━━━━━━━━━━━━
👤 *Клиент:* ${name}
📱 *Телефон:* \`${phone}\`
📧 *Email:* ${email || "Не указан"}

💬 *Сообщение:*
${message}

━━━━━━━━━━━━━━━━━━━━
🕐 *Время:* ${currentTime}
📍 *Источник:* Контактная форма
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Telegram API error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
