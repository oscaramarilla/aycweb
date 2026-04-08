export interface Articulo {
  slug: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  categoriaColor: string;
  fechaPublicacion: string;
  tiempoLectura: string;
  autor: string;
  contenido: string;
}

export const articulos: Articulo[] = [
  {
    slug: "como-pasar-de-cotizar-en-excel-a-emitir-presupuestos-pdf-automaticos",
    titulo: "Cómo pasar de cotizar en Excel a emitir presupuestos PDF automáticos",
    descripcion:
      "El Excel fue una solución brillante para los 90. Hoy, en un mercado donde el cliente espera respuesta en minutos, es el cuello de botella más caro que puede tener tu empresa. Te mostramos la arquitectura exacta para eliminarlo.",
    categoria: "Automatización Comercial",
    categoriaColor: "emerald",
    fechaPublicacion: "8 de Abril, 2026",
    tiempoLectura: "7 min de lectura",
    autor: "Oscar Amarilla Cáceres",
    contenido: `
## El problema que nadie quiere admitir

Cada vez que un vendedor abre Excel para armar una cotización, tu empresa está perdiendo dinero. No es una hipérbole: es matemática operativa.

El proceso típico en una empresa industrial o de servicios B2B se ve así:

1. El cliente pide un presupuesto por WhatsApp o email.
2. El vendedor busca la planilla de Excel "correcta" entre 12 versiones distintas.
3. Copia los datos del cliente, ajusta precios manualmente, calcula descuentos.
4. Exporta a PDF (si sabe cómo), o imprime y escanea.
5. Envía el presupuesto... 2 horas después.

Para entonces, el cliente ya habló con tu competidor.

## Por qué el Excel no es el problema real

El Excel no es el villano. El problema es la **dependencia de criterio humano** en cada paso del proceso. Cuando el cálculo vive en la cabeza del vendedor o en una fórmula que solo él entiende, tenés:

- **Inconsistencia de precios**: cada vendedor cotiza diferente.
- **Errores de cálculo**: un decimal mal puesto puede costarte un contrato o tu margen.
- **Cuello de botella humano**: si el vendedor está ocupado, el cliente espera.
- **Cero trazabilidad**: no sabés cuántos presupuestos se enviaron, cuáles se ganaron, cuáles se perdieron.

## La arquitectura de un cotizador automático

Un sistema de presupuestos PDF automático no es magia. Es ingeniería comercial aplicada. Los componentes son:

### 1. Motor de Reglas de Negocio
Un archivo de configuración centralizado donde vivien **todos** los precios, descuentos por volumen, condiciones especiales y variables de cálculo. Cuando cambia un precio, se cambia en un solo lugar y se actualiza en todo el sistema.

### 2. Formulario Inteligente
Una interfaz donde el operador (o incluso el cliente) ingresa los parámetros del pedido: producto, cantidad, destino, condiciones de pago. El sistema valida los datos en tiempo real.

### 3. Motor de Cálculo
La lógica que toma los inputs del formulario y los procesa contra las reglas de negocio. Aquí se calculan subtotales, impuestos, fletes, descuentos y el total final. Sin intervención humana.

### 4. Generador de PDF
El componente que toma el resultado del cálculo e inyecta los datos en una plantilla de documento profesional: logo de la empresa, datos del cliente, desglose de items, condiciones comerciales, firma digital.

### 5. Registro y Trazabilidad
Cada presupuesto generado queda registrado con timestamp, datos del cliente, monto y estado (enviado, aceptado, rechazado). Esto alimenta tu CRM o dashboard de ventas.

## El resultado en números reales

En el caso de Metal Mad E.A.S., empresa industrial de Paraguay, implementamos este sistema para cotizaciones de mobiliario escolar con cálculo de flete logístico incluido.

**Antes del sistema:**
- Tiempo promedio por cotización: 2 horas
- Errores de cálculo: frecuentes
- Presupuestos perdidos por demora: estimado 30%

**Después del sistema:**
- Tiempo promedio por cotización: 45 segundos
- Errores de cálculo: 0%
- Capacidad de respuesta: inmediata, 24/7

## ¿Cuándo tiene sentido invertir en esto?

Si tu empresa emite más de 10 presupuestos por semana, el ROI de un sistema automático se justifica en el primer mes. El cálculo es simple: cuánto vale el tiempo de tu equipo de ventas multiplicado por las horas que pasan armando Excel.

Si emitís 20 presupuestos por semana y cada uno toma 1 hora, estás gastando 80 horas mensuales en trabajo que puede automatizarse. A cualquier costo de hora profesional, eso es dinero que se puede redirigir a vender.

## El siguiente paso

No necesitás un ERP de 6 cifras para tener este sistema. Necesitás ingeniería comercial aplicada a tu proceso específico. El sistema se construye en semanas, no en meses, y se adapta exactamente a tu catálogo, tus reglas de negocio y tu identidad visual.

La pregunta no es si podés permitirte automatizar. Es si podés permitirte seguir sin hacerlo.
    `.trim(),
  },
  {
    slug: "errores-que-hacen-perder-ventas-en-clinicas-con-reservas-manuales",
    titulo: "Errores que hacen perder ventas en clínicas con reservas manuales",
    descripcion:
      "Una clínica que gestiona sus turnos por WhatsApp está operando con un sistema diseñado para chatear con amigos, no para administrar un negocio de salud. Estos son los errores que te están costando pacientes cada semana.",
    categoria: "Sector Salud",
    categoriaColor: "purple",
    fechaPublicacion: "8 de Abril, 2026",
    tiempoLectura: "6 min de lectura",
    autor: "Oscar Amarilla Cáceres",
    contenido: `
## La ilusión de control del WhatsApp

Cuando una clínica dice "gestionamos los turnos por WhatsApp", en realidad está diciendo: "tenemos un sistema de reservas que depende de que alguien esté mirando el teléfono en el momento exacto en que el paciente escribe".

Eso no es un sistema. Es una apuesta.

Y cada vez que el paciente escribe a las 11 de la noche, o el sábado a la tarde, o durante el almuerzo, y no recibe respuesta inmediata, hay una probabilidad alta de que llame a la clínica de la competencia que sí tiene disponibilidad online.

## Los 5 errores que cuestan pacientes

### Error 1: Respuesta tardía = paciente perdido

El comportamiento del consumidor de salud cambió. Cuando alguien decide buscar un turno, lo hace en el momento en que siente la necesidad, no en el horario comercial de tu recepción.

Si tu respuesta tarda más de 15 minutos, el 40% de los prospectos ya tomaron otra decisión. Si tarda más de una hora, ese número sube al 70%.

La recepción humana no puede competir con un sistema automatizado en velocidad de respuesta.

### Error 2: Información inconsistente sobre precios y disponibilidad

Cuando la información de precios y disponibilidad vive en la cabeza de la recepcionista, cada paciente recibe una experiencia diferente. Una dice que la consulta vale X, otra dice Y. Una dice que hay turno el martes, otra que no.

Esta inconsistencia destruye la confianza antes de que el paciente pise la clínica.

### Error 3: Doble reserva y cancelaciones sin protocolo

Sin un sistema centralizado, las doble reservas son inevitables. Dos recepcionistas asignan el mismo horario a dos pacientes distintos. El resultado: un paciente enojado, una situación incómoda y daño a la reputación.

Las cancelaciones sin protocolo son igual de dañinas. Si el paciente cancela por WhatsApp y nadie lo registra, ese horario queda bloqueado y se pierde un turno que podría haberse reasignado.

### Error 4: Cero seguimiento post-consulta

El paciente que vino una vez y no volvió es el activo más desaprovechado de una clínica. Sin sistema, no hay forma de saber quién vino, cuándo fue su última consulta, si necesita un control de seguimiento.

El seguimiento manual es imposible a escala. El automatizado es trivial con la infraestructura correcta.

### Error 5: Dependencia total del personal de recepción

Si la recepcionista se enferma, se va de vacaciones o renuncia, el sistema de reservas colapsa. Toda la operación de captación de pacientes depende de una sola persona con un teléfono.

Eso no es un negocio. Es un riesgo operativo permanente.

## Cómo se ve la infraestructura correcta

Una clínica con infraestructura digital correcta tiene:

**Landing page de captación**: Una página que responde las preguntas frecuentes (precios, especialidades, ubicación, seguros aceptados) antes de que el paciente las haga. Filtra y precalifica.

**Sistema de reservas online**: El paciente elige especialidad, profesional, fecha y horario disponible. Confirma con sus datos. Recibe confirmación automática. Sin intervención humana.

**Recordatorios automáticos**: 24 horas antes del turno, el paciente recibe un recordatorio por WhatsApp o email. Esto reduce el ausentismo entre un 30% y un 50%.

**Protocolo de cancelación**: Si el paciente cancela, el horario se libera automáticamente y puede ser tomado por otro paciente en lista de espera.

**Dashboard de métricas**: La dirección de la clínica puede ver en tiempo real cuántos turnos hay agendados, cuántos se cancelaron, cuál es la tasa de conversión de consultas a reservas.

## El costo real de no tener sistema

Hagamos el cálculo conservador para una clínica mediana:

- 50 consultas de turno por semana por WhatsApp
- 30% no reciben respuesta a tiempo y buscan otra clínica
- 15 pacientes perdidos por semana
- Consulta promedio: 150.000 Gs

**Pérdida semanal estimada: 2.250.000 Gs**
**Pérdida mensual estimada: 9.000.000 Gs**

Ese es el costo de no tener sistema. La inversión en infraestructura digital se paga sola en el primer mes.

## El cambio de mentalidad necesario

Una clínica no es solo un servicio de salud. Es un negocio que necesita captar, convertir y retener pacientes. Eso requiere infraestructura comercial, no solo excelencia médica.

Los mejores médicos del mundo con el peor sistema de reservas pierden pacientes frente a clínicas mediocres con buena infraestructura digital.

La tecnología no reemplaza la calidad médica. La hace accesible.
    `.trim(),
  },
  {
    slug: "que-sistema-necesita-una-empresa-industrial-antes-de-invertir-en-un-erp",
    titulo: "Qué sistema necesita una empresa industrial antes de invertir en un ERP",
    descripcion:
      "Muchas empresas industriales compran un ERP de 6 cifras y lo abandonan a los 6 meses. El problema no es el ERP: es que compraron la solución equivocada en el momento equivocado. Esta es la secuencia correcta.",
    categoria: "Industria & Tecnología",
    categoriaColor: "blue",
    fechaPublicacion: "8 de Abril, 2026",
    tiempoLectura: "8 min de lectura",
    autor: "Oscar Amarilla Cáceres",
    contenido: `
## El cementerio de ERPs en Paraguay

Existe un patrón que se repite con alarmante frecuencia en empresas industriales de la región: la empresa crece, el dueño siente que "necesita un sistema", contrata un ERP costoso, el equipo no lo adopta, y 6 meses después el sistema está abandonado y la empresa volvió a las planillas de Excel.

El problema no es el ERP. El problema es la secuencia.

Implementar un ERP en una empresa que no tiene sus procesos digitalizados es como instalar un motor de Fórmula 1 en un auto sin frenos. La potencia existe, pero no hay control.

## ¿Qué es realmente un ERP?

Un ERP (Enterprise Resource Planning) es un sistema que integra y centraliza todos los procesos de una empresa: compras, ventas, inventario, producción, finanzas, recursos humanos.

La palabra clave es **integra**. Un ERP integra procesos que ya existen y están documentados. No crea procesos desde cero.

Si tus procesos son caóticos, informales o viven en la cabeza de las personas, un ERP va a digitalizar el caos. Y el caos digital es más caro y difícil de manejar que el caos analógico.

## La secuencia correcta de digitalización industrial

### Fase 1: Digitalizar el proceso comercial (meses 1-3)

Antes de pensar en ERP, una empresa industrial necesita tener su proceso de ventas digitalizado y medible.

Esto significa:
- **Cotizador automático**: El sistema genera presupuestos PDF en segundos, con precios actualizados y cálculos correctos.
- **Registro de oportunidades**: Cada consulta de cliente queda registrada con fecha, monto potencial y estado.
- **Trazabilidad de presupuestos**: Sabés cuántos presupuestos enviaste, cuántos se ganaron, cuántos se perdieron y por qué.

Sin esto, no sabés cuánto vendés, cuánto podrías vender ni dónde se pierden las oportunidades.

### Fase 2: Digitalizar la operación (meses 3-6)

Con el proceso comercial bajo control, el siguiente paso es la operación:

- **Órdenes de trabajo digitales**: Cada pedido confirmado genera una orden de trabajo con especificaciones, materiales necesarios y plazos.
- **Control de inventario básico**: Sabés qué tenés en stock, qué necesitás comprar y cuándo.
- **Registro de producción**: Cada etapa del proceso productivo queda registrada con tiempos y responsables.

### Fase 3: Digitalizar las finanzas (meses 6-9)

Con ventas y operación digitalizadas, las finanzas se vuelven transparentes:

- **Facturación integrada**: La orden de trabajo completada genera automáticamente la factura.
- **Control de costos por proyecto**: Sabés exactamente cuánto costó producir cada pedido.
- **Flujo de caja en tiempo real**: Ves entradas y salidas sin esperar el cierre mensual del contador.

### Fase 4: ERP (mes 9 en adelante)

Recién en este punto, con procesos documentados, digitalizados y funcionando, tiene sentido evaluar un ERP. Y lo más probable es que descubras que no necesitás el ERP más caro del mercado, sino uno que se integre con los sistemas que ya tenés funcionando.

## Por qué las empresas saltan directo al ERP

Hay tres razones principales:

**1. Presión del ego empresarial**: "Las empresas grandes tienen ERP, entonces yo también necesito uno." El tamaño de la empresa no determina la necesidad de un ERP. La madurez de los procesos sí.

**2. Vendedores de ERP**: Los vendedores de sistemas ERP son muy buenos en su trabajo. Presentan demos impresionantes, casos de éxito de empresas similares y promesas de transformación total. Lo que no muestran es la tasa de abandono de implementaciones fallidas.

**3. Confundir síntoma con causa**: La empresa tiene problemas de desorganización y asume que el ERP los va a resolver. Pero el ERP no organiza: integra lo que ya está organizado.

## Señales de que tu empresa está lista para un ERP

Tu empresa está lista para evaluar un ERP cuando:

✓ Tenés más de 50 empleados y la coordinación entre áreas es compleja.
✓ Tus procesos comerciales, operativos y financieros están documentados y digitalizados.
✓ Tenés datos históricos de ventas, costos y producción de al menos 12 meses.
✓ Tu equipo usa sistemas digitales en su trabajo diario (no solo WhatsApp y Excel).
✓ Tenés un responsable interno de tecnología o podés contratar uno.

Si no cumplís al menos 4 de estas 5 condiciones, el ERP va a ser un gasto, no una inversión.

## Señales de que todavía no estás listo

Tu empresa NO está lista para un ERP cuando:

✗ Los presupuestos se hacen en Excel o a mano.
✗ El inventario se controla "a ojo" o en cuadernos.
✗ La información de ventas vive en la cabeza del dueño o del vendedor.
✗ No tenés datos históricos confiables de costos y márgenes.
✗ Tu equipo resiste el uso de cualquier sistema digital.

## El camino inteligente

La secuencia correcta no es más lenta que ir directo al ERP. Es más rápida, porque cada fase genera valor inmediato y prepara el terreno para la siguiente.

Una empresa que digitaliza su proceso comercial en el mes 1 ya está generando ROI en el mes 2. Una empresa que implementa un ERP en el mes 1 puede estar pagando licencias durante 12 meses antes de ver el primer beneficio real.

La digitalización industrial no es un proyecto de tecnología. Es un proyecto de ingeniería de procesos que usa tecnología como herramienta.

La diferencia entre las empresas que lo hacen bien y las que fracasan no está en el presupuesto. Está en la secuencia.
    `.trim(),
  },
];

export function getArticuloBySlug(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
