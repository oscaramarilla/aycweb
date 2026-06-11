import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
Eres un experto "Sales Development Representative" (SDR) de B2B. Tu objetivo es interactuar con los prospectos que llegan de manera consultiva, natural y profesional para cualificarlos antes de que hablen con un cerrador o pasen a nuestro WhatsApp.

Tu misión es clasificar al lead en uno de estos tres niveles (Tiers) basándote en: Volumen del Proyecto, Urgencia y Capital/Presupuesto.

Debes hacer 3 o 4 preguntas a lo largo de la conversación (NUNCA hagas todas de golpe, sé conversacional) para descubrir:
1. Volumen: ¿De qué trata el proyecto y a qué escala apunta? (Ej. ¿Es para su equipo interno, para clientes masivos?)
2. Urgencia: ¿Para cuándo necesitan tener esto resuelto o implementado?
3. Capital: (Con mucho tacto) ¿Tienen un presupuesto asignado o una idea de inversión inicial para este proyecto?

Criterios de Calificación:
- Tier A (Caliente): Proyecto bien definido/gran volumen, alta urgencia (necesitan avanzar rápido), tienen presupuesto o capacidad clara de inversión.
- Tier B (Tibio): Volumen moderado o aún en definición, urgencia media (próximos meses), presupuesto en evaluación.
- Tier C (Curioso): Idea muy verde, baja escala, sin urgencia real o buscan soluciones gratuitas/muy baratas.

Reglas de Comportamiento:
1. Empieza saludando y preguntando en qué los podemos ayudar.
2. Escucha su respuesta y, de forma orgánica, introduce tus preguntas de cualificación.
3. Si el lead responde algo vago, pide una aclaración amable.
4. Cuando hayas recopilado suficiente información (máximo 4 iteraciones), despídete indicando que tienes la información necesaria.
5. El sistema te pedirá extraer en JSON el resultado final cuando la conversación termine.

ESTRUCTURA DE RESPUESTA FINAL (Solo cuando ya terminaste de cualificar o n8n pida el resumen):
Debes emitir un JSON válido con esta estructura:
{
  "tier": "A" | "B" | "C",
  "reason": "Justificación de 2 líneas de por qué lo clasificaste así",
  "summary": "Resumen de lo que el prospecto necesita",
  "nextAction": "derivacion_whatsapp" | "nurturing_email"
}
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, leadInfo, finalExtraction } = body;

    // Validación básica
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Se esperaba un array de "messages" en el body.' },
        { status: 400 }
      );
    }

    // Aquí integrarías el SDK de OpenAI o Anthropic.
    // Ejemplo de cómo armarías la petición real:
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        // Si es extracción final, forzamos JSON response format
        response_format: finalExtraction ? { type: "json_object" } : undefined,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
      }),
    });
    const aiData = await response.json();
    const aiReply = aiData.choices[0].message.content;
    */

    // ==========================================
    // SIMULACIÓN (MOCK) PARA PROPÓSITOS DEL ESQUELETO
    // ==========================================
    
    // Si n8n solicita la extracción final (ya se hicieron las preguntas)
    if (finalExtraction) {
      return NextResponse.json({
        status: 'success',
        isFinal: true,
        data: {
          tier: "A",
          reason: "El lead mostró alta urgencia y tiene un presupuesto definido para un proyecto empresarial a gran escala.",
          summary: "Buscan desarrollar una plataforma B2B para integrarla en 2 semanas. Tienen presupuesto aprobado.",
          nextAction: "derivacion_whatsapp"
        }
      });
    }

    // Si estamos en medio de la conversación
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
    
    let mockReply = "¡Hola! Claro, puedo ayudarte con eso. Para entender mejor tu situación, ¿podrías contarme un poco más sobre la escala del proyecto que tienen en mente?";
    
    if (lastUserMessage.includes('proyecto') || lastUserMessage.includes('escala')) {
      mockReply = "Entiendo, suena interesante. ¿Y tienen alguna fecha límite o urgencia para tener esto implementado?";
    } else if (lastUserMessage.includes('urgente') || lastUserMessage.includes('mes')) {
       mockReply = "Perfecto, tenemos los tiempos claros. Por último, ¿cuentan con un presupuesto asignado para esta etapa del proyecto?";
    }

    return NextResponse.json({
      status: 'success',
      isFinal: false,
      reply: mockReply
    });

  } catch (error) {
    console.error('[ChatCalificador API Error]:', error);
    return NextResponse.json(
      { error: 'Error interno procesando la calificación del lead.' },
      { status: 500 }
    );
  }
}
