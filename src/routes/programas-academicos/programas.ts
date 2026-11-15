export type AcademicLevel = 'todos' | 'pregrado' | 'posgrado' | 'educacion-continua';
export type CampusLocation = 'todos' | 'medellin' | 'regiones' | 'virtual';

export interface AcademicProgram {
  id: string;
  name: string;
  level: 'pregrado' | 'posgrado' | 'educacion-continua';
  levelLabel: string;
  location: 'medellin' | 'regiones' | 'virtual';
  locationLabel: string;
  faculty: string;
  duration: string;
  modality: 'Presencial' | 'Virtual' | 'Semipresencial';
  snies: string;
  description: string;
}

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  // CIENCIAS DE LA SALUD
  {
    id: 'medicina-medellin',
    name: 'Medicina',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Medicina',
    duration: '12 semestres',
    modality: 'Presencial',
    snies: '5120',
    description: 'Programa insignia de la salud en Colombia orientado a la práctica clínica de excelencia, investigación biomédica y vocación social.'
  },
  {
    id: 'enfermeria-medellin',
    name: 'Enfermería',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Enfermería',
    duration: '8 semestres',
    modality: 'Presencial',
    snies: '5122',
    description: 'Cuidado integral de la salud individual y colectiva con altos estándares científicos y humanísticos.'
  },
  {
    id: 'odontologia-medellin',
    name: 'Odontología',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Odontología',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5123',
    description: 'Diagnóstico, prevención y tratamiento estomatológico con clínicas especializadas para la comunidad.'
  },
  {
    id: 'farmacia-medellin',
    name: 'Química Farmacéutica',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ciencias Farmacéuticas y Alimentarias',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5125',
    description: 'Desarrollo, producción y control de calidad de medicamentos, cosméticos y biológicos.'
  },

  // INGENIERÍA Y TECNOLOGÍA
  {
    id: 'sistemas-medellin',
    name: 'Ingeniería de Sistemas',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ingeniería',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5421',
    description: 'Formación líder en arquitectura de software, inteligencia artificial, ciberseguridad y sistemas distribuidos con acreditación de alta calidad.'
  },
  {
    id: 'industrial-medellin',
    name: 'Ingeniería Industrial',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ingeniería',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5423',
    description: 'Optimización de procesos productivos, analítica de operaciones, cadena de suministro e innovación.'
  },
  {
    id: 'electronica-medellin',
    name: 'Ingeniería Electrónica',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ingeniería',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5422',
    description: 'Telecomunicaciones, automatización industrial, robótica, microelectrónica y procesamiento digital de señales.'
  },
  {
    id: 'civil-medellin',
    name: 'Ingeniería Civil',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ingeniería',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5420',
    description: 'Planeación, diseño y construcción de obras de infraestructura, vías, estructuras y recursos hidráulicos.'
  },
  {
    id: 'bioingenieria-oriente',
    name: 'Bioingeniería',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'regiones',
    locationLabel: 'Seccional Oriente (El Carmen de Viboral)',
    faculty: 'Facultad de Ingeniería',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '8491',
    description: 'Aplicación de la ingeniería a las ciencias de la vida, biotecnología médica e instrumentación biomédica en el oriente antioqueño.'
  },

  // CIENCIAS SOCIALES, HUMANAS Y DERECHO
  {
    id: 'derecho-medellin',
    name: 'Derecho',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Derecho y Ciencias Políticas',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5110',
    description: 'Tradición y excelencia en argumentación jurídica, derecho público, constitucional, penal y derechos fundamentales.'
  },
  {
    id: 'derecho-uraba',
    name: 'Derecho en Regiones',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'regiones',
    locationLabel: 'Sede Urabá (Apartadó - Turbo)',
    faculty: 'Facultad de Derecho y Ciencias Políticas',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '4190',
    description: 'Compromiso ético con la justicia social, derechos humanos y desarrollo regional en el Urabá antioqueño.'
  },
  {
    id: 'psicologia-medellin',
    name: 'Psicología',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ciencias Sociales y Humanas',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5115',
    description: 'Comprensión del comportamiento humano, salud mental, intervención psicosocial y procesos cognitivos.'
  },
  {
    id: 'comunicacion-medellin',
    name: 'Comunicación Social y Periodismo',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Comunicaciones y Filología',
    duration: '9 semestres',
    modality: 'Presencial',
    snies: '5118',
    description: 'Investigación periodística rigurosa, producción de contenidos multimediales y comunicación pública.'
  },

  // CIENCIAS ECONÓMICAS
  {
    id: 'administracion-medellin',
    name: 'Administración de Empresas',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ciencias Económicas',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5130',
    description: 'Gestión estratégica, finanzas corporativas, emprendimiento sostenible y liderazgo de organizaciones.'
  },
  {
    id: 'contaduria-oriente',
    name: 'Contaduría Pública',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'regiones',
    locationLabel: 'Seccional Oriente (El Carmen de Viboral)',
    faculty: 'Facultad de Ciencias Económicas',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5132',
    description: 'Aseguramiento de la información contable, control fiscal, tributario y auditoría internacional.'
  },

  // CIENCIAS EXACTAS Y EDUCACIÓN
  {
    id: 'biologia-medellin',
    name: 'Biología',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ciencias Exactas y Naturales',
    duration: '10 semestres',
    modality: 'Presencial',
    snies: '5140',
    description: 'Estudio de la biodiversidad colombiana, ecología, genética, microbiología y conservación biológica.'
  },
  {
    id: 'licenciatura-matematicas-virtual',
    name: 'Licenciatura en Matemáticas',
    level: 'pregrado',
    levelLabel: 'Pregrado',
    location: 'virtual',
    locationLabel: 'Modalidad Virtual (Todo el país)',
    faculty: 'Facultad de Educación',
    duration: '10 semestres',
    modality: 'Virtual',
    snies: '10620',
    description: 'Pedagogía moderna de las ciencias exactas soportada en entornos digitales de aprendizaje.'
  },

  // POSGRADOS
  {
    id: 'maestria-ciencias-computacion',
    name: 'Maestría en Ciencias de la Computación',
    level: 'posgrado',
    levelLabel: 'Posgrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ingeniería',
    duration: '4 semestres',
    modality: 'Presencial',
    snies: '102931',
    description: 'Investigación avanzada en visión artificial, ciencia de datos, aprendizaje automático y computación de alto rendimiento.'
  },
  {
    id: 'doctorado-salud-publica',
    name: 'Doctorado en Salud Pública',
    level: 'posgrado',
    levelLabel: 'Posgrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad Nacional de Salud Pública',
    duration: '8 semestres',
    modality: 'Presencial',
    snies: '14302',
    description: 'Liderazgo en políticas públicas de salud, epidemiología y bienestar de comunidades vulnerables.'
  },
  {
    id: 'especializacion-finanzas-medellin',
    name: 'Especialización en Finanzas y Mercado de Capitales',
    level: 'posgrado',
    levelLabel: 'Posgrado',
    location: 'medellin',
    locationLabel: 'Sede Central Medellín',
    faculty: 'Facultad de Ciencias Económicas',
    duration: '2 semestres',
    modality: 'Presencial',
    snies: '108420',
    description: 'Valoración de empresas, gestión de riesgos de inversión, instrumentos bursátiles e innovación fintech.'
  },

  // EDUCACIÓN CONTINUA
  {
    id: 'diplomado-ia-generativa',
    name: 'Diplomado en Inteligencia Artificial y Machine Learning',
    level: 'educacion-continua',
    levelLabel: 'Educación Continua',
    location: 'virtual',
    locationLabel: 'Modalidad Virtual',
    faculty: 'Extensión UdeA',
    duration: '120 horas',
    modality: 'Virtual',
    snies: 'Certificado Institucional',
    description: 'Capacitación práctica para profesionales en herramientas de IA contemporáneas aplicadas a negocios e ingeniería.'
  }
];

// Función para normalizar texto (elimina tildes y caracteres especiales)
function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function filterPrograms(
  programs: AcademicProgram[],
  searchTerm: string,
  level: AcademicLevel,
  location: CampusLocation
): AcademicProgram[] {
  const normQuery = normalizeString(searchTerm);

  return programs.filter((prog) => {
    // Filtro por nivel
    if (level !== 'todos' && prog.level !== level) {
      return false;
    }
    // Filtro por ubicación
    if (location !== 'todos' && prog.location !== location) {
      return false;
    }
    // Búsqueda inteligente por tokens y sin problemas de tildes
    if (normQuery) {
      const matchText = normalizeString(
        `${prog.name} ${prog.faculty} ${prog.locationLabel} ${prog.levelLabel} ${prog.description}`
      );
      const tokens = normQuery.split(/\s+/).filter(Boolean);
      return tokens.every((token) => matchText.includes(token));
    }
    return true;
  });
}
