import React from 'react'

interface NurturingEmailProps {
  nombre: string
  empresa: string
  tier: 'B' | 'C'
}

/**
 * Plantilla de email de nurturing profesional para leads B2B
 * Enfocada en demostrar capacidad operativa y soluciones tangibles
 */
export const NurturingEmailTemplate: React.FC<NurturingEmailProps> = ({
  nombre,
  empresa,
  tier,
}) => {
  const isHighTier = tier === 'B'
  const cta = isHighTier ? 'Solicitar Demo' : 'Conocer Soluciones'
  const mainMessage = isHighTier
    ? 'Optimización operativa a escala'
    : 'Soluciones rápidas de infraestructura'

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9fafb',
        padding: '20px',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#1f2937',
          color: '#fff',
          padding: '30px 20px',
          textAlign: 'center',
          borderRadius: '8px 8px 0 0',
        }}
      >
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>
          AYC Web
        </h1>
        <p style={{ margin: '0', fontSize: '14px', opacity: 0.9 }}>
          Soluciones operativas para empresas de impacto
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px 30px',
          borderRadius: '0 0 8px 8px',
        }}
      >
        {/* Greeting */}
        <p style={{ fontSize: '16px', color: '#1f2937', marginBottom: '20px' }}>
          Hola <strong>{nombre}</strong>,
        </p>

        {/* Introduction */}
        <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
          Nos complace conectar con <strong>{empresa}</strong>. En AYC Web, ayudamos a
          empresas como la suya a{' '}
          <span style={{ color: '#dc2626', fontWeight: 'bold' }}>{mainMessage}</span>.
        </p>

        {/* Value Proposition - Tier B */}
        {isHighTier && (
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '6px', marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
              🏢 Provisión de Mobiliario Institucional a Escala
            </p>
            <ul style={{ fontSize: '13px', color: '#374151', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Equipamiento completo para instituciones públicas y privadas</li>
              <li>Gestión de proyectos desde diseño hasta instalación</li>
              <li>Experiencia en proyectos de alto volumen con tiempos críticos</li>
              <li>Sinergia operativa que reduce costos y acelera entregas</li>
            </ul>
          </div>
        )}

        {/* Value Proposition - Tier C */}
        {!isHighTier && (
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '6px', marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
              🏗️ Soluciones Rápidas de Infraestructura
            </p>
            <ul style={{ fontSize: '13px', color: '#374151', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Cabañas modulares térmicas para alojamiento temporal</li>
              <li>Instalación ágil en cualquier terreno</li>
              <li>Soluciones rentables para necesidades emergentes</li>
              <li>Soporte logístico integrado</li>
            </ul>
          </div>
        )}

        {/* Case Study */}
        <div style={{ marginBottom: '25px' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
            💼 Caso de Éxito
          </p>
          <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', margin: '0' }}>
            Recientemente completamos un proyecto de equipamiento institucional a gran escala,
            entregando {isHighTier ? '800+' : '100+'} unidades en menos de 60 días. Combinamos
            experiencia operativa, gestión logística eficiente y un equipo comprometido con la
            excelencia.
          </p>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <a
            href="https://aycweb.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#dc2626',
              color: '#fff',
              padding: '12px 32px',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {cta} →
          </a>
        </div>

        {/* Closing */}
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', marginBottom: '0' }}>
          Si tienes alguna pregunta sobre nuestras soluciones, estaremos encantados de
          conectar. Respondemos en menos de 24 horas.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#f3f4f6',
          padding: '20px',
          fontSize: '11px',
          color: '#6b7280',
          textAlign: 'center',
          borderRadius: '0 0 8px 8px',
        }}
      >
        <p style={{ margin: '5px 0' }}>
          <strong>AYC Web</strong> | Soluciones Operativas B2B
        </p>
        <p style={{ margin: '5px 0' }}>
          <a href="https://aycweb.com" style={{ color: '#dc2626', textDecoration: 'none' }}>
            aycweb.com
          </a>
        </p>
        <p style={{ margin: '5px 0', fontSize: '10px' }}>
          Recibiste este correo porque tu empresa fue identificada como un potencial socio.
        </p>
      </div>
    </div>
  )
}

/**
 * Renderiza la plantilla como string HTML para Resend
 */
export function renderNurturingEmail(props: NurturingEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header -->
    <div style="background-color: #1f2937; color: #fff; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">AYC Web</h1>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">Soluciones operativas para empresas de impacto</p>
    </div>

    <!-- Main Content -->
    <div style="background-color: #fff; padding: 40px 30px; border-radius: 0 0 8px 8px;">
      <p style="font-size: 16px; color: #1f2937; margin-bottom: 20px;">
        Hola <strong>${props.nombre}</strong>,
      </p>

      <p style="font-size: 15px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
        Nos complace conectar con <strong>${props.empresa}</strong>. En AYC Web, ayudamos a
        empresas como la suya a <span style="color: #dc2626; font-weight: bold;">${
          props.tier === 'B'
            ? 'Optimización operativa a escala'
            : 'Soluciones rápidas de infraestructura'
        }</span>.
      </p>

      <!-- Value Proposition -->
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
        <p style="font-size: 14px; font-weight: bold; color: #1f2937; margin-bottom: 10px;">
          ${props.tier === 'B' ? '🏢 Provisión de Mobiliario Institucional a Escala' : '🏗️ Soluciones Rápidas de Infraestructura'}
        </p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.8;">
          ${
            props.tier === 'B'
              ? `
            <li>Equipamiento completo para instituciones públicas y privadas</li>
            <li>Gestión de proyectos desde diseño hasta instalación</li>
            <li>Experiencia en proyectos de alto volumen con tiempos críticos</li>
            <li>Sinergia operativa que reduce costos y acelera entregas</li>
          `
              : `
            <li>Cabañas modulares térmicas para alojamiento temporal</li>
            <li>Instalación ágil en cualquier terreno</li>
            <li>Soluciones rentables para necesidades emergentes</li>
            <li>Soporte logístico integrado</li>
          `
          }
        </ul>
      </div>

      <!-- Case Study -->
      <div style="margin-bottom: 25px;">
        <p style="font-size: 14px; font-weight: bold; color: #1f2937; margin-bottom: 10px;">💼 Caso de Éxito</p>
        <p style="font-size: 13px; color: #374151; line-height: 1.6; margin: 0;">
          Recientemente completamos un proyecto de equipamiento institucional a gran escala,
          entregando ${props.tier === 'B' ? '800+' : '100+'} unidades en menos de 60 días. Combinamos
          experiencia operativa, gestión logística eficiente y un equipo comprometido con la
          excelencia.
        </p>
      </div>

      <!-- Call to Action -->
      <div style="text-align: center; margin-bottom: 30px;">
        <a href="https://aycweb.com" style="display: inline-block; background-color: #dc2626; color: #fff; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
          ${props.tier === 'B' ? 'Solicitar Demo' : 'Conocer Soluciones'} →
        </a>
      </div>

      <!-- Closing -->
      <p style="font-size: 13px; color: #6b7280; line-height: 1.6; margin-bottom: 0;">
        Si tienes alguna pregunta sobre nuestras soluciones, estaremos encantados de
        conectar. Respondemos en menos de 24 horas.
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f3f4f6; padding: 20px; font-size: 11px; color: #6b7280; text-align: center; border-radius: 0 0 8px 8px;">
      <p style="margin: 5px 0;"><strong>AYC Web</strong> | Soluciones Operativas B2B</p>
      <p style="margin: 5px 0;"><a href="https://aycweb.com" style="color: #dc2626; text-decoration: none;">aycweb.com</a></p>
      <p style="margin: 5px 0; font-size: 10px;">
        Recibiste este correo porque tu empresa fue identificada como un potencial socio.
      </p>
    </div>
  </div>
</body>
</html>
  `
}
