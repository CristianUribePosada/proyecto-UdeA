export interface ConvocatoriaItem {
  id: string;
  title: string;
  type: 'Docencia' | 'Investigación' | 'Extensión' | 'Movilidad Internacional';
  target: 'Profesores' | 'Investigadores' | 'Estudiantes de Posgrado';
  closingDate: string;
  status: 'Vigente' | 'Próxima a cerrar' | 'En evaluación';
  summary: string;
  remuneration?: string;
}

export const CONVOCATORIAS_DATA: ConvocatoriaItem[] = [
  {
    id: 'c1',
    title: 'Concurso Público de Méritos para Docentes de Carrera 2026',
    type: 'Docencia',
    target: 'Profesores',
    closingDate: '15 de Diciembre de 2026',
    status: 'Vigente',
    summary: 'Apertura de 45 plazas de tiempo completo en las Facultades de Ingeniería, Medicina, Ciencias Exactas y Educación.',
    remuneration: 'Vinculación como Profesor de Carrera según Escalafón'
  },
  {
    id: 'c2',
    title: 'Fondo de Apoyo a Proyectos de Investigación Interdisciplinaria SIU',
    type: 'Investigación',
    target: 'Investigadores',
    closingDate: '28 de Noviembre de 2026',
    status: 'Próxima a cerrar',
    summary: 'Financiación de hasta $120.000.000 COP para grupos de investigación categorizados A1 y A por Minciencias.',
    remuneration: 'Financiación directa a rubros de investigación'
  },
  {
    id: 'c3',
    title: 'Becas de Pasantía Doctoral y Movilidad Internacional 2027-1',
    type: 'Movilidad Internacional',
    target: 'Estudiantes de Posgrado',
    closingDate: '10 de Enero de 2027',
    status: 'Vigente',
    summary: 'Subvenciones para estadías de investigación en universidades de la Red Macro Universidades de América Latina y Europa.',
    remuneration: 'Tiquetes y manutención mensual'
  },
  {
    id: 'c4',
    title: 'Convocatoria de Extensión: Proyectos de Impacto Comunitario Regional',
    type: 'Extensión',
    target: 'Profesores',
    closingDate: '05 de Diciembre de 2026',
    status: 'Vigente',
    summary: 'Iniciativas de apropiación social del conocimiento para municipios de Antioquia con enfoque de paz y sostenibilidad.',
    remuneration: 'Bolsa de cofinanciación UdeA - Territorio'
  }
];
