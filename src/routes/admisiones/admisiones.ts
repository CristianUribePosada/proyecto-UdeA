export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  dateRange: string;
  actionText: string;
  actionUrl: string;
  badge?: string;
}

export interface ImportantDate {
  event: string;
  date: string;
  status: 'Abierta' | 'Próximamente' | 'Finalizada';
  notes: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: 'Adquisición de Derechos de Inscripción',
    description: 'Realiza el pago virtual seguro por PSE o genera el recibo para pago bancario oficial.',
    dateRange: '01 de Octubre al 28 de Noviembre de 2026',
    actionText: 'Generar Recibo / Pago PSE',
    actionUrl: '#pago-derechos',
    badge: 'Paso Obligatorio'
  },
  {
    step: 2,
    title: 'Registro e Inscripción en Línea',
    description: 'Diligencia el formulario de aspirante con tus datos personales, programa elegido (primera y segunda opción) y sede.',
    dateRange: 'Hasta el 30 de Noviembre de 2026',
    actionText: 'Completar Formulario de Aspirante',
    actionUrl: '#formulario',
    badge: 'Verifica tus datos'
  },
  {
    step: 3,
    title: 'Consulta de Citación y Credencial',
    description: 'Descarga tu credencial con el aula, bloque, fecha y horario asignado para la prueba de admisión.',
    dateRange: '05 al 09 de Diciembre de 2026',
    actionText: 'Consultar Citación',
    actionUrl: '#credencial'
  },
  {
    step: 4,
    title: 'Presentación del Examen de Admisión',
    description: 'Prueba presencial de razonamiento lógico y competencia lectora en la sede asignada.',
    dateRange: '13 y 14 de Diciembre de 2026',
    actionText: 'Ver Guía del Examen',
    actionUrl: '#guia-examen'
  },
  {
    step: 5,
    title: 'Publicación de Resultados Oficiales',
    description: 'Consulta el listado de admitidos por programa y puntajes de corte con tu número de documento.',
    dateRange: '22 de Diciembre de 2026',
    actionText: 'Portal de Resultados',
    actionUrl: '#resultados'
  }
];

export const OFFICIAL_DATES: ImportantDate[] = [
  {
    event: 'Pago de derechos de inscripción para Pregrado 2026-1',
    date: 'Hasta el 28 Noviembre 2026',
    status: 'Abierta',
    notes: 'Pago en línea con habilitación inmediata'
  },
  {
    event: 'Examen de Admisión en Medellín y Regiones',
    date: '13 y 14 Diciembre 2026',
    status: 'Próximamente',
    notes: 'Presentar documento original y credencial impresa'
  },
  {
    event: 'Entrega de resultados y puntajes de corte',
    date: '22 Diciembre 2026',
    status: 'Próximamente',
    notes: 'Publicación única en el portal oficial'
  },
  {
    event: 'Matrícula de estudiantes nuevos admitidos',
    date: '15 al 20 Enero 2027',
    status: 'Próximamente',
    notes: 'Proceso virtual guiado por decanatura'
  }
];
