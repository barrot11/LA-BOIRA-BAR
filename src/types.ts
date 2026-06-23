export interface MenuItem {
  nom: string;
  descripcio?: string;
  preu: string;
  destacat?: boolean;
}

export interface SpecialtyItem {
  icona: string;
  titol: string;
  text: string;
}

export interface ReservationData {
  nom: string;
  telefon: string;
  email: string;
  data: string;
  hora: string;
  persones: string;
  motiu?: string;
  comentaris?: string;
}
