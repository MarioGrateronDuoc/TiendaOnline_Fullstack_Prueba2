import { useState } from 'react';

export interface IContacto {
  id?: number;
  nombre: string;
  email: string;
  mensaje: string;
  fecha?: string;
}

export const useContactosData = () => {
  const [contactos, setContactos] = useState<IContacto[]>([]);

  const agregarContacto = (contacto: Omit<IContacto, 'id' | 'fecha'>) => {
    const nuevoContacto: IContacto = {
      ...contacto,
      id: Date.now(),
      fecha: new Date().toISOString()
    };
    setContactos(prev => [...prev, nuevoContacto]);
  };

  return {
    contactos,
    agregarContacto
  };
};