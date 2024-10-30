import { IErroAPI } from '../interfaces/IErroAPI';

export function isErroAPI(erro: unknown): erro is IErroAPI {
  return (
    typeof erro === 'object' &&
    erro !== null &&
    'statusCode' in erro &&
    'mensagem' in erro &&
    'erro' in erro
  );
}
