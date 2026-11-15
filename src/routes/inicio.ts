import { ACADEMIC_PROGRAMS } from './programas-academicos/programas';

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
}

// Convertir automáticamente todas las carreras del catálogo al índice de búsqueda
const PROGRAM_SEARCH_ITEMS: SearchResult[] = ACADEMIC_PROGRAMS.map((prog) => ({
  id: `prog-${prog.id}`,
  title: `${prog.name} (${prog.locationLabel})`,
  category: prog.levelLabel,
  url: `/programas-academicos?search=${encodeURIComponent(prog.name)}`,
  description: `${prog.faculty} • Modalidad ${prog.modality} • SNIES: ${prog.snies}. ${prog.description}`
}));

export const SEARCH_INDEX: SearchResult[] = [
  ...PROGRAM_SEARCH_ITEMS,
  {
    id: 's-adm-1',
    title: 'Inscripciones Examen de Admisión 2026',
    category: 'Admisiones',
    url: '/admisiones',
    description: 'Fechas, compra de derechos de inscripción, registro virtual y calendario oficial paso a paso.'
  },
  {
    id: 's-adm-2',
    title: 'Calendario Académico y Fechas Oficiales 2026',
    category: 'Admisiones',
    url: '/admisiones',
    description: 'Cronograma oficial de fechas de matrícula, examen de admisión y resultados para Medellín y regiones.'
  },
  {
    id: 's-tram-1',
    title: 'Certificado de Estudio y Calificaciones',
    category: 'Trámites',
    url: '/tramites-servicios',
    description: 'Generación digital con firma electrónica y código QR para trámites bancarios, de pensión o visado.'
  },
  {
    id: 's-tram-2',
    title: 'Copia Auténtica de Acta de Grado y Paz y Salvo',
    category: 'Trámites',
    url: '/tramites-servicios',
    description: 'Trámite digital de actas de grado para egresados y expedición de paz y salvo institucional.'
  },
  {
    id: 's-tram-3',
    title: 'Moodle y Plataformas de Aprendizaje Virtual',
    category: 'Plataformas',
    url: '/tramites-servicios',
    description: 'Acceso a Moodle / Aprendeenlínea y plataformas académicas institucionales para estudiantes y profesores.'
  },
  {
    id: 's-doc-1',
    title: 'Convocatorias Docentes y Concurso de Méritos 2026',
    category: 'Docencia',
    url: '/convocatorias',
    description: 'Plazas de carrera, fondos de investigación SIU y becas de movilidad para docentes e investigadores.'
  },
  {
    id: 's-cont-1',
    title: 'Directorio Telefónico y Canales de Atención',
    category: 'Contacto',
    url: '/contacto',
    description: 'Línea de atención oficial (+57 4 219 8332), radicación de PQRSDF y directorio de facultades y sedes.'
  },
  {
    id: 's-cont-2',
    title: 'Sedes en Medellín y Regiones (Oriente, Urabá, Suroeste)',
    category: 'Sedes',
    url: '/contacto#sedes',
    description: 'Ubicación, direcciones y conmutadores de las sedes seccionales de la Universidad de Antioquia.'
  }
];

export interface HeroAction {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
  primary?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
}

export const PRIORITY_ACTIONS: HeroAction[] = [
  {
    id: 'act-programas',
    title: 'Programas Académicos',
    description: 'Explora carreras de pregrado, posgrados y cursos en Medellín y regiones con nombres claros.',
    href: '/programas-academicos',
    icon: 'academic',
    primary: true,
    badge: 'Oferta 2026'
  },
  {
    id: 'act-admisiones',
    title: 'Admisiones',
    description: 'Calendario oficial, requisitos, guías paso a paso y registro para el examen de admisión.',
    href: '/admisiones',
    icon: 'user-plus',
    primary: true,
    badge: 'Inscripciones Abiertas'
  },
  {
    id: 'act-contacto',
    title: 'Directorio y Contacto',
    description: 'Canal oficial único con teléfonos, correos verificados y ubicación de sedes y facultades.',
    href: '/contacto',
    icon: 'phone',
    primary: true,
    badge: 'Atención Oficial'
  }
];

export const POPULAR_SEARCH_TERMS: string[] = [
  'Inscripción examen admisión',
  'Ingeniería de Sistemas',
  'Medicina Medellín',
  'Certificado de estudios',
  'Calendario académico 2026',
  'Derecho en regiones',
  'Moodle y plataformas'
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Publicado el calendario oficial para el examen de admisión periodo 2026-2',
    category: 'Admisiones',
    date: '12 Nov 2026',
    excerpt: 'Consulte las fechas de pago de derechos de inscripción, registro virtual y presentación de pruebas.',
    href: '/admisiones'
  },
  {
    id: 'n2',
    title: 'Feria de Posgrados UdeA 2026: Nueva oferta de maestrías y doctorados',
    category: 'Posgrados',
    date: '10 Nov 2026',
    excerpt: 'Conozca las líneas de investigación, becas y opciones de doble titulación nacional e internacional.',
    href: '/programas-academicos'
  },
  {
    id: 'n3',
    title: 'Modernización de la Ventanilla Única Virtual de Certificados',
    category: 'Trámites',
    date: '08 Nov 2026',
    excerpt: 'Ahora los certificados de matrícula y calificaciones se expiden al instante en formato digital verificable.',
    href: '/tramites-servicios'
  }
];

// Función para normalizar texto (sin tildes ni mayúsculas) para búsqueda tolerante (UC08)
function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function performClientSearch(query: string): SearchResult[] {
  // Helper: compute Levenshtein distance between two strings
  function levenshtein(a: string, b: string): number {
    const al = a.length;
    const bl = b.length;
    const dp = Array.from({ length: al + 1 }, () => new Array(bl + 1).fill(0));
    for (let i = 0; i <= al; i++) dp[i][0] = i;
    for (let j = 0; j <= bl; j++) dp[0][j] = j;
    for (let i = 1; i <= al; i++) {
      for (let j = 1; j <= bl; j++) {
        if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
        else dp[i][j] = Math.min(
          dp[i - 1][j] + 1,      // deletion
          dp[i][j - 1] + 1,      // insertion
          dp[i - 1][j - 1] + 1   // substitution
        );
      }
    }
    return dp[al][bl];
  }

  // Helper: fuzzy match a token against haystack words
  function fuzzyMatch(token: string, haystack: string): boolean {
    if (haystack.includes(token)) return true;
    // Split haystack into words for distance comparison
    const words = haystack.split(/\s+/);
    const maxDist = token.length <= 4 ? 1 : 2; // tolerance based on length
    for (const w of words) {
      if (levenshtein(token, w) <= maxDist) return true;
    }
    return false;
  }

  const cleanQuery = normalizeText(query);
  if (!cleanQuery) return [];

  const tokens = cleanQuery.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.filter((item) => {
    const haystack = normalizeText(`${item.title} ${item.category} ${item.description}`);
    return tokens.every((token) => {
      const singular = token.endsWith('s') ? token.slice(0, -1) : token;
      // Use fuzzy matching on token and its singular form
      return fuzzyMatch(token, haystack) || (singular.length > 3 && fuzzyMatch(singular, haystack));
    });
  });
}

