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
## Mirá, te voy a ser directo

Cada vez que tu vendedor abre Excel para armar una cotización, estás perdiendo plata. No es una exageración. Es matemática.

Hacé el ejercicio conmigo: ¿cuántos presupuestos emite tu equipo por semana? ¿Cuánto tiempo tarda cada uno? Multiplicá eso por el costo hora de tu vendedor. Ese número que te salió es lo que estás gastando en trabajo que puede hacerse solo, en 45 segundos, sin errores.

## El proceso que todos tienen y nadie quiere admitir

El cliente pide un presupuesto. El vendedor busca "la planilla correcta" entre las 12 versiones que tiene guardadas. Copia los datos, ajusta precios de memoria, calcula descuentos a mano, exporta a PDF si sabe cómo, y manda el presupuesto... dos horas después.

Para ese momento, el cliente ya habló con tu competidor.

Y lo peor no es la demora. Lo peor es que no sabés cuántos clientes perdiste por eso, porque nadie lo registra.

## El problema real no es el Excel

El Excel no es el villano. El problema es que el conocimiento de tu negocio vive en la cabeza de tus vendedores y en fórmulas que solo ellos entienden. Eso te genera cuatro problemas concretos que te cuestan dinero:

**Precios inconsistentes.** Cada vendedor cotiza diferente. Un cliente compara dos presupuestos de tu misma empresa y ve números distintos. Eso destruye credibilidad.

**Errores de cálculo.** Un decimal mal puesto puede costarte el margen de un contrato entero. O peor: ganás el contrato y perdés plata en la ejecución.

**Cuello de botella humano.** Si el vendedor está en reunión, de viaje o de licencia, el cliente espera. Y el cliente que espera busca otra opción.

**Cero visibilidad.** No sabés cuántos presupuestos se enviaron este mes, cuántos se ganaron, cuántos se perdieron ni por qué. Estás manejando tu área comercial a ciegas.

## Cómo funciona un sistema que resuelve esto

No te estoy hablando de un software de 50.000 dólares. Te estoy hablando de ingeniería aplicada a tu proceso específico. Son cuatro piezas:

**Primero: un archivo central de precios.** Todos los precios, descuentos por volumen y condiciones especiales viven en un solo lugar. Cuando cambia un precio, se cambia ahí y se actualiza en todo el sistema. Nadie más puede "ajustar" nada por su cuenta.

**Segundo: un formulario inteligente.** El operador —o el cliente directamente— ingresa qué necesita: producto, cantidad, destino, condición de pago. El sistema valida los datos en tiempo real. Si algo no cuadra, avisa antes de calcular.

**Tercero: el motor de cálculo.** Toma los datos del formulario, los procesa contra las reglas de tu negocio y calcula subtotales, impuestos, fletes y descuentos. Sin que nadie toque nada. Sin errores.

**Cuarto: el PDF que sale solo.** El sistema genera el documento con tu logo, los datos del cliente, el desglose completo y las condiciones comerciales. Listo para enviar. En 45 segundos desde que el cliente pidió el presupuesto.

Y cada presupuesto queda registrado: quién lo pidió, cuándo, por cuánto, si se aceptó o se rechazó. Eso es tu pipeline comercial funcionando solo.

## Los números reales

Implementamos esto en Metal Mad E.A.S., empresa industrial de Paraguay que cotiza mobiliario escolar con cálculo de flete logístico incluido.

Antes: 2 horas por cotización, errores frecuentes, presupuestos perdidos por demora.

Después: 45 segundos por cotización, cero errores, disponibilidad 24/7.

El sistema se pagó en el primer mes. No porque sea barato, sino porque el costo de no tenerlo era más alto.

## ¿Cuándo tiene sentido hacer esto?

Si emitís más de 10 presupuestos por semana, el ROI se justifica en el primer mes. El cálculo es simple: tomá las horas que tu equipo gasta armando Excel y multiplicalas por el costo de esa hora. Ese es el dinero que podés redirigir a vender.

Si emitís 20 presupuestos por semana y cada uno toma una hora, son 80 horas mensuales de trabajo que puede hacer una máquina. A cualquier costo de hora profesional, eso es dinero real.

## La pregunta que te tenés que hacer

No es si podés permitirte automatizar esto. Es si podés permitirte seguir sin hacerlo mientras tu competidor ya lo tiene.

El sistema se construye en semanas, no en meses. Se adapta exactamente a tu catálogo, tus reglas de negocio y tu identidad. Y una vez que está funcionando, escala sin contratar más vendedores.
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
## Te hago una pregunta incómoda

¿Cuántos pacientes te escribieron anoche después de las 8 y no recibieron respuesta hasta hoy a la mañana? ¿Cuántos de esos ya agendaron en otra clínica?

No lo sabés. Y ese es exactamente el problema.

## WhatsApp no es un sistema de reservas

Cuando una clínica gestiona sus turnos por WhatsApp, en realidad está apostando a que alguien va a estar mirando el teléfono en el momento exacto en que el paciente escribe. Eso no es un sistema. Es una lotería operativa.

Y el comportamiento del paciente cambió. Cuando alguien decide buscar un turno, lo hace en el momento en que siente la necesidad: a las 11 de la noche, el sábado a la tarde, durante el almuerzo. No en el horario comercial de tu recepción.

Si no respondés en 15 minutos, el 40% ya tomó otra decisión. Si tardás más de una hora, ese número sube al 70%. Eso no lo digo yo: es el comportamiento documentado del consumidor digital.

## Los cinco errores que te cuestan pacientes cada semana

**Error 1: Respuesta tardía.**
La recepción humana no puede competir con un sistema automatizado en velocidad. No porque tu recepcionista sea mala: es que no puede estar disponible las 24 horas. Un sistema sí.

**Error 2: Información inconsistente.**
Cuando los precios y la disponibilidad viven en la cabeza de quien atiende, cada paciente recibe una experiencia diferente. Una recepcionista dice que la consulta vale X, otra dice Y. Eso destruye confianza antes de que el paciente pise la clínica.

**Error 3: Doble reserva.**
Sin sistema centralizado, dos personas asignan el mismo horario a dos pacientes distintos. El resultado: un paciente enojado, una situación incómoda y daño a la reputación que no se repara fácil.

**Error 4: Cancelaciones que no se registran.**
El paciente cancela por WhatsApp, nadie lo anota, el horario queda bloqueado. Ese turno que podría haberse reasignado se pierde. Multiplicá eso por semana y por mes.

**Error 5: Todo depende de una persona.**
Si la recepcionista se enferma, se va de vacaciones o renuncia, el sistema de reservas colapsa. Toda tu captación de pacientes depende de una sola persona con un teléfono. Eso no es un negocio: es un riesgo operativo permanente.

## Cómo se ve la infraestructura que resuelve esto

No te estoy vendiendo un software genérico. Te estoy describiendo la arquitectura mínima que necesita una clínica para operar como negocio:

**Una página que responde antes de que pregunten.** Precios, especialidades, ubicación, seguros aceptados, horarios. El paciente llega con la decisión casi tomada. Eso reduce el trabajo de la recepción y filtra consultas que no van a convertir.

**Reservas online sin intervención humana.** El paciente elige especialidad, profesional, fecha y horario disponible. Confirma con sus datos. Recibe confirmación automática. Sin que nadie tenga que hacer nada.

**Recordatorios automáticos.** 24 horas antes del turno, el paciente recibe un mensaje. Esto reduce el ausentismo entre un 30% y un 50%. Eso es ingreso que recuperás sin hacer nada extra.

**Protocolo de cancelación que funciona solo.** Si el paciente cancela, el horario se libera y puede ser tomado por otro. Sin que nadie tenga que gestionar nada.

**Números en tiempo real.** Cuántos turnos hay agendados, cuántos se cancelaron, cuál es la tasa de conversión de consultas a reservas. Eso es gestión, no intuición.

## Hagamos el cálculo juntos

Clínica mediana, 50 consultas de turno por semana por WhatsApp. El 30% no recibe respuesta a tiempo y busca otra clínica. Son 15 pacientes perdidos por semana. Si la consulta promedio vale 150.000 guaraníes, estás perdiendo 2.250.000 por semana. 9.000.000 por mes.

Ese es el costo de no tener sistema. No es el costo de implementarlo: es el costo de no hacerlo.

La infraestructura digital se paga sola en el primer mes. Lo que no se paga solo es seguir operando como si fuera 2010.

## El cambio de mentalidad que hace la diferencia

Una clínica no es solo un servicio de salud. Es un negocio que necesita captar, convertir y retener pacientes. Eso requiere infraestructura comercial, no solo excelencia médica.

Los mejores médicos del mundo con el peor sistema de reservas pierden pacientes frente a clínicas mediocres con buena infraestructura. La tecnología no reemplaza la calidad médica. La hace accesible para más pacientes.

Y más pacientes que llegan es más ingreso. Así de simple.
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
## Te voy a contar algo que los vendedores de ERP no te van a decir

Hay un patrón que veo repetirse todo el tiempo en empresas industriales de la región. La empresa crece, el dueño siente que "necesita un sistema", contrata un ERP que cuesta una fortuna, el equipo no lo adopta, y seis meses después el sistema está abandonado y todos volvieron al Excel.

El dinero gastado: perdido. Los procesos: igual que antes. Y encima, el dueño ahora desconfía de "los sistemas".

El problema no fue el ERP. El problema fue la secuencia.

## Qué es realmente un ERP y por qué eso importa

Un ERP integra procesos. Esa es su función. Toma lo que ya existe —ventas, compras, inventario, producción, finanzas— y lo conecta en un solo sistema.

La palabra clave es **integra**. Un ERP no crea procesos. No organiza el caos. No le enseña a tu equipo cómo trabajar.

Si tus procesos son informales, si la información vive en la cabeza de las personas, si cada área trabaja con sus propias planillas sin criterio común, el ERP va a digitalizar ese caos. Y el caos digital es más caro y más difícil de manejar que el caos analógico. Porque ahora el caos tiene licencia anual.

## La secuencia que funciona

Esto es lo que le digo a cualquier dueño de empresa industrial que me pregunta por dónde empezar:

### Primero: digitalizá el proceso comercial (meses 1 a 3)

Antes de pensar en ERP, necesitás saber cuánto vendés, cuánto podrías vender y dónde se pierden las oportunidades. Eso requiere tres cosas:

Un cotizador automático que genere presupuestos en segundos con precios actualizados y cálculos correctos. Un registro de cada consulta de cliente con fecha, monto potencial y estado. Y trazabilidad de presupuestos: cuántos enviaste, cuántos ganaste, cuántos perdiste y por qué.

Sin esto, estás manejando tu área comercial a ciegas. No podés mejorar lo que no podés medir.

### Segundo: digitalizá la operación (meses 3 a 6)

Con el proceso comercial bajo control, el siguiente paso es la operación. Cada pedido confirmado tiene que generar una orden de trabajo con especificaciones, materiales y plazos. Tenés que saber qué hay en stock, qué necesitás comprar y cuándo. Y cada etapa del proceso productivo tiene que quedar registrada con tiempos y responsables.

Esto no es burocracia. Es la diferencia entre saber si ganás o perdés plata en cada pedido.

### Tercero: digitalizá las finanzas (meses 6 a 9)

Con ventas y operación digitalizadas, las finanzas se vuelven transparentes solas. La orden de trabajo completada genera la factura. Sabés exactamente cuánto costó producir cada pedido. Ves el flujo de caja en tiempo real sin esperar el cierre mensual del contador.

### Cuarto: ahora sí, evaluá el ERP (mes 9 en adelante)

Recién en este punto, con procesos documentados, digitalizados y funcionando, tiene sentido evaluar un ERP. Y lo más probable es que descubras que no necesitás el más caro del mercado, sino uno que se integre con los sistemas que ya tenés funcionando.

## Por qué las empresas saltan directo al ERP

Hay tres razones. Las tres son evitables.

**La presión del ego empresarial.** "Las empresas grandes tienen ERP, entonces yo también necesito uno." El tamaño de la empresa no determina la necesidad de un ERP. La madurez de los procesos sí. Una empresa de 20 personas con procesos claros y digitalizados opera mejor que una de 200 con un ERP mal implementado.

**Los vendedores de ERP son muy buenos en su trabajo.** Presentan demos impresionantes, casos de éxito de empresas similares y promesas de transformación total. Lo que no muestran es la tasa de abandono de implementaciones fallidas, que en la región supera el 60%.

**Confundir el síntoma con la causa.** La empresa tiene problemas de desorganización y asume que el ERP los va a resolver. Pero el ERP no organiza: integra lo que ya está organizado. Si el problema es desorganización, la solución es organización, no software.

## Cómo saber si estás listo

Tu empresa está lista para evaluar un ERP cuando tenés más de 50 empleados y la coordinación entre áreas es genuinamente compleja, tus procesos están documentados y digitalizados, tenés datos históricos de ventas y costos de al menos 12 meses, tu equipo ya usa sistemas digitales en el trabajo diario, y tenés alguien responsable de tecnología internamente.

Si no cumplís al menos cuatro de esas cinco condiciones, el ERP va a ser un gasto. No una inversión.

Tu empresa NO está lista cuando los presupuestos se hacen en Excel o a mano, el inventario se controla "a ojo", la información de ventas vive en la cabeza del dueño, no tenés datos confiables de costos y márgenes, o tu equipo resiste cualquier sistema digital.

## Lo que nadie te dice sobre la secuencia

La secuencia correcta no es más lenta que ir directo al ERP. Es más rápida. Porque cada fase genera valor inmediato y prepara el terreno para la siguiente.

Una empresa que digitaliza su proceso comercial en el mes 1 ya está generando retorno en el mes 2. Una empresa que implementa un ERP en el mes 1 puede estar pagando licencias durante 12 meses antes de ver el primer beneficio real.

La digitalización industrial no es un proyecto de tecnología. Es un proyecto de ingeniería de procesos que usa tecnología como herramienta. La diferencia entre las empresas que lo hacen bien y las que fracasan no está en el presupuesto. Está en la secuencia.

Y la secuencia empieza por lo que genera dinero: el proceso comercial.
    `.trim(),
  },
];

export function getArticuloBySlug(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
