import { IMedico } from '../interface/IMedico';
import { medicosMock } from '../mocks/medicos.mocks';

export class AgendaService {
  public buscarMedicos(): IMedico[] {
    return medicosMock;
  }

  public buscarMedicoPorId(id: number): IMedico | undefined {
    return medicosMock.find((medico) => medico.id === id);
  }

  public verificarHorarioDisponivel(
    medicoId: number,
    horario: string,
  ): boolean {
    const medico = this.buscarMedicoPorId(medicoId);
    return medico?.horarios_disponiveis.includes(horario) || false;
  }
}
