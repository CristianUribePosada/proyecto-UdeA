export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface UserRole {
  id: string;
  label: string;
  href: string;
  description: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Programas Académicos', href: '/programas-academicos' },
  { label: 'Admisiones', href: '/admisiones' },
  { label: 'Trámites y Servicios', href: '/tramites-servicios' },
  { label: 'Convocatorias', href: '/convocatorias' },
  { label: 'Directorio y Contacto', href: '/contacto' }
];

export const USER_ROLES: UserRole[] = [
  { id: 'aspirante', label: 'Aspirante', href: '/admisiones', description: 'Conoce carreras, admisiones e inscripciones' },
  { id: 'estudiante', label: 'Estudiante', href: '/tramites-servicios', description: 'Acceso a certificados, notas y plataformas' },
  { id: 'docente', label: 'Profesor', href: '/convocatorias', description: 'Convocatorias, investigación y docencia' },
  { id: 'egresado', label: 'Egresado', href: '/tramites-servicios', description: 'Actas de grado, certificados y bolsa de empleo' }
];

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  if (pathname === '/') {
    return [{ label: 'Inicio', href: '/' }];
  }

  const parts = pathname.split('/').filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ label: 'Inicio', href: '/' }];

  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;
    const matched = MAIN_NAVIGATION.find((item: NavItem) => item.href === currentPath);
    const label = matched 
      ? matched.label 
      : part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    crumbs.push({
      label,
      href: currentPath
    });
  }

  return crumbs;
}
