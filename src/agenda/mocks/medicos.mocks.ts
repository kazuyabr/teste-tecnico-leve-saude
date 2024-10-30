import { IMedico } from '../interface/IMedico';

export const medicosMock: IMedico[] = [
  {
    id: 1,
    nome: 'Dr. João Silva',
    especialidade: 'Cardiologista',
    horarios_disponiveis: [
      '2024-10-05 09:00',
      '2024-10-05 10:00',
      '2024-10-05 11:00',
    ],
  },
  {
    id: 2,
    nome: 'Dra. Maria Souza',
    especialidade: 'Dermatologista',
    horarios_disponiveis: [
      '2024-10-06 14:00',
      '2024-10-06 15:00',
      '2024-10-06 16:00',
    ],
  },
  {
    id: 3,
    nome: 'Dr. Carlos Santos',
    especialidade: 'Pediatra',
    horarios_disponiveis: [
      '2024-10-07 08:00',
      '2024-10-07 09:00',
      '2024-10-07 10:00',
    ],
  },
];
