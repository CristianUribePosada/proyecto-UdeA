export interface ContactChannel {
  name: string;
  type: 'Línea de Atención' | 'Virtual' | 'Presencial';
  detail: string;
  schedule: string;
  badge?: string;
}

export interface CampusLocation {
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export const OFFICIAL_CHANNELS: ContactChannel[] = [
  {
    name: 'Línea Única de Atención Telefónica',
    type: 'Línea de Atención',
    detail: '(+57 4) 219 8332 • Línea Nacional Gratuita 018000 516222',
    schedule: 'Lunes a viernes de 7:30 a.m. a 5:30 p.m. jornada continua',
    badge: 'Canal Centralizado'
  },
  {
    name: 'Ventanilla Única Virtual (PQRSDF)',
    type: 'Virtual',
    detail: 'atencionalciudadano@udea.edu.co',
    schedule: 'Recepción 24/7 con radicado oficial automático',
    badge: 'Respuesta en máx. 5 días hábiles'
  },
  {
    name: 'Centro de Atención al Aspirante y Admisiones',
    type: 'Presencial',
    detail: 'Bloque 16, Oficina 139, Ciudad Universitaria (Medellín)',
    schedule: 'Lunes a viernes de 8:00 a.m. a 4:00 p.m.'
  }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    city: 'Medellín',
    name: 'Ciudad Universitaria (Campus Central)',
    address: 'Calle 67 N° 53 - 108',
    phone: '(+57 4) 219 8332',
    email: 'informacion@udea.edu.co'
  },
  {
    city: 'Medellín',
    name: 'Sede de Investigación Universitaria (SIU)',
    address: 'Carrera 53 N° 61 - 30',
    phone: '(+57 4) 219 6400',
    email: 'siu@udea.edu.co'
  },
  {
    city: 'Carmen de Viboral',
    name: 'Seccional Oriente',
    address: 'Km 6 vía Rionegro - La Ceja',
    phone: '(+57 4) 219 8332 ext. 9800',
    email: 'seccionaloriente@udea.edu.co'
  },
  {
    city: 'Apartadó - Turbo',
    name: 'Sede Seccional Urabá',
    address: 'Km 1 vía Carepa - Apartadó',
    phone: '(+57 4) 219 8332 ext. 9600',
    email: 'seccionaluraba@udea.edu.co'
  },
  {
    city: 'Andes',
    name: 'Seccional Suroeste',
    address: 'Calle 50 N° 34 - 15',
    phone: '(+57 4) 219 8332 ext. 9700',
    email: 'seccionalsuroeste@udea.edu.co'
  }
];
