import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BonvinoService } from './bonvino.service';
import { BonvinoController } from './bonvino.controller';
import {
  Pais, PaisSchema,
  Maridaje, MaridajeSchema,
  Reseña, ReseñaSchema,
  TipoUva, TipoUvaSchema,
  Varietal, VarietalSchema,
  Provincia, ProvinciaSchema,
  RegionVitivinicola, RegionVitivinicolaSchema,
  Bodega, BodegaSchema,
  Vino, VinoSchema,
  DetalleVarietal, DetalleVarietalSchema,
} from './../schemas/schemas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pais.name, schema: PaisSchema },
      { name: Maridaje.name, schema: MaridajeSchema },
      { name: Reseña.name, schema: ReseñaSchema },
      { name: TipoUva.name, schema: TipoUvaSchema },
      { name: Varietal.name, schema: VarietalSchema },
      { name: Provincia.name, schema: ProvinciaSchema },
      { name: RegionVitivinicola.name, schema: RegionVitivinicolaSchema },
      { name: Bodega.name, schema: BodegaSchema },
      { name: Vino.name, schema: VinoSchema },
      { name: DetalleVarietal.name, schema: DetalleVarietalSchema },
    ]),
  ],
  providers: [BonvinoService],
  controllers: [BonvinoController],
})
export class BonvinoModule {}
