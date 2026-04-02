# REGLAS OPERATIVAS (SOPs) - AYCWEB MOTOR

## Principio Fundamental: Separación Estricta UI/Dominio
En AYCweb, mantenemos una separación rigurosa entre la Interfaz de Usuario (UI) y la lógica de Dominio. La carpeta `app/` y `components/` se dedican exclusivamente a la presentación y la interacción con el usuario. La lógica de negocio pura reside en `lib/domain/`, los servicios de aplicación en `lib/services/` (como la generación de PDFs en memoria y el constructor de mensajes de WhatsApp), y la infraestructura externa en `lib/infrastructure/`.

## Reglas Operativas Clave:

1.  **Defaults Inteligentes:**
    *   Todos los formularios deben inicializarse con valores predeterminados lógicos y útiles para el usuario, facilitando la experiencia y reduciendo la carga cognitiva.
    *   Estos valores deben ser derivados de la lógica de negocio o de configuraciones preestablecidas en `lib/domain/` o `lib/services/`, nunca directamente en la UI.

2.  **Cierre WhatsApp:**
    *   Cada embudo de conversión o proceso de negocio debe culminar en la generación de un enlace `wa.me` dinámico.
    *   Este enlace debe pre-llenar un mensaje relevante, facilitando la comunicación directa con el equipo de ventas o soporte.
    *   La lรณgica para construir este enlace y su mensaje debe residir en `lib/services/`.

3.  **Generación de PDF en Memoria:**
    *   Para documentos como cotizaciones o contratos, la generación de PDFs debe realizarse en memoria, evitando operaciones de disco innecesarias y mejorando la eficiencia.
    *   Esta funcionalidad debe ser implementada en `lib/services/` y solo la UI debe invocarla para presentar o descargar el PDF.

4.  **Resiliencia en APIs Externas:**
    *   Todas las interacciones con APIs externas (`lib/infrastructure/`) deben incluir mecanismos de timeout y manejo de errores robustos.
    *   Implementar patrones como Circuit Breaker para prevenir fallos en cascada y asegurar la estabilidad del sistema.