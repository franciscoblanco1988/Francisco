import { EntityRepository, Repository } from 'typeorm';

import { Servicio } from './entities/servicio.entity';

@EntityRepository(Servicio)
export class ServicioRepository extends Repository<Servicio> { }
