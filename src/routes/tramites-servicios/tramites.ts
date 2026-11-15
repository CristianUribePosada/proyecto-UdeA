export interface OnlineService {
  id: string;
  title: string;
  category: 'Estudiantes' | 'Docentes' | 'Egresados' | 'General';
  description: string;
  badge?: string;
  requirements: string[];
  estimatedTime: string;
  actionText: string;
}

export const ONLINE_SERVICES: OnlineService[] = [
  {
    id: 'cert-estudio',
    title: 'Certificado de Estudio y Matrícula',
    category: 'Estudiantes',
    description: 'Generación digital con firma electrónica y código de verificación QR para trámites bancarios o de pensión.',
    badge: 'Expedición Inmediata',
    requirements: ['Estar matriculado activamente', 'Estar al día con biblioteca'],
    estimatedTime: 'En línea (5 minutos)',
    actionText: 'Generar Certificado'
  },
  {
    id: 'calificaciones-oficiales',
    title: 'Certificado de Calificaciones Históricas',
    category: 'Estudiantes',
    description: 'Historial completo de asignaturas cursadas, créditos y promedio acumulado certificado por Admisiones y Registro.',
    requirements: ['Documento de identidad vigente', 'Pago de estampilla virtual'],
    estimatedTime: '1 a 2 días hábiles',
    actionText: 'Solicitar Historial'
  },
  {
    id: 'acta-grado',
    title: 'Copia Auténtica de Acta de Grado',
    category: 'Egresados',
    description: 'Documento oficial con validez jurídica para convalidación de títulos en Colombia y el exterior.',
    badge: '100% Digital',
    requirements: ['Fecha de graduación aproximada', 'Cédula de ciudadanía escaneada'],
    estimatedTime: '3 días hábiles',
    actionText: 'Solicitar Acta de Grado'
  },
  {
    id: 'duplicado-carne',
    title: 'Reposición y Duplicado de Carné Universitario',
    category: 'General',
    description: 'Trámite por pérdida, deterioro o actualización de carné inteligente de acceso a campus y biblioteca.',
    requirements: ['Comprobante de pago de derechos de carné', 'Denuncio o reporte de pérdida'],
    estimatedTime: '5 días hábiles',
    actionText: 'Iniciar Trámite'
  },
  {
    id: 'moodle-campus',
    title: 'Acceso a Moodle / Plataforma Virtual Aprendeenlínea',
    category: 'Estudiantes',
    description: 'Portal de aulas virtuales para asignaturas de pregrado, posgrado y educación a distancia.',
    badge: 'Plataforma Académica',
    requirements: ['Usuario y contraseña institucional @udea.edu.co'],
    estimatedTime: 'Acceso 24/7',
    actionText: 'Entrar a Moodle'
  },
  {
    id: 'paz-salvo',
    title: 'Certificado de Paz y Salvo Institucional',
    category: 'Egresados',
    description: 'Validación automática con biblioteca, cartera, laboratorios y bienestar para procesos de grado.',
    requirements: ['Sin deudas de material bibliográfico ni multas'],
    estimatedTime: 'Inmediato en línea',
    actionText: 'Consultar Paz y Salvo'
  }
];
