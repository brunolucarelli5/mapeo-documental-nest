import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Pais extends Document {
  @Prop({ required: true })
  nombre: string;
}

export const PaisSchema = SchemaFactory.createForClass(Pais);

@Schema({ timestamps: true })
export class Maridaje extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;
}

export const MaridajeSchema = SchemaFactory.createForClass(Maridaje);

@Schema({ timestamps: true })
export class Reseña extends Document {
  @Prop()
  comentario: string;

  @Prop({ default: false })
  esPremium: boolean;

  @Prop({ default: Date.now })
  fechaReseña: Date;

  @Prop({ enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
  puntaje: number;
}

export const ReseñaSchema = SchemaFactory.createForClass(Reseña);

@Schema({ timestamps: true })
export class TipoUva extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;
}

export const TipoUvaSchema = SchemaFactory.createForClass(TipoUva);


@Schema({ timestamps: true })
export class Varietal extends Document {
  @Prop()
  descripcion: string;

  @Prop({ required: true })
  porcentajeComposicion: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TipoUva', required: true })
  tipoUva: MongooseSchema.Types.ObjectId | TipoUva;
}

export const VarietalSchema = SchemaFactory.createForClass(Varietal);

@Schema({ timestamps: true })
export class Provincia extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pais', required: true })
  pais: MongooseSchema.Types.ObjectId | Pais;
}

export const ProvinciaSchema = SchemaFactory.createForClass(Provincia);

@Schema({ timestamps: true })
export class RegionVitivinicola extends Document {
  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Provincia', required: true })
  provincia: MongooseSchema.Types.ObjectId | Provincia;
}

export const RegionVitivinicolaSchema = SchemaFactory.createForClass(RegionVitivinicola);

@Schema({ timestamps: true })
export class Bodega extends Document {
  @Prop({ required: true })
  coordenadasUbicacion: string;

  @Prop()
  descripcion: string;

  @Prop()
  historia: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ default: Date.now })
  periodoActualizacion: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'RegionVitivinicola', required: true })
  regionVitivinicola: MongooseSchema.Types.ObjectId | RegionVitivinicola;
}

export const BodegaSchema = SchemaFactory.createForClass(Bodega);

@Schema({ timestamps: true })
export class Vino extends Document {
  @Prop({ required: true })
  aniada: number;

  @Prop({ default: Date.now })
  fechaActualizacion: Date;

  @Prop({ required: false })
  imagenEtiqueta: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
  notaDeCataBodega: number;

  @Prop({ required: true })
  precioARS: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Bodega', required: true })
  bodega: MongooseSchema.Types.ObjectId | Bodega;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Maridaje', required: true })
  maridaje: MongooseSchema.Types.ObjectId | Maridaje;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Reseña', required: false })
  resenia: MongooseSchema.Types.ObjectId | Reseña;
}

export const VinoSchema = SchemaFactory.createForClass(Vino);

@Schema({ timestamps: true })
export class DetalleVarietal extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Vino', required: true })
  vino: MongooseSchema.Types.ObjectId | Vino;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Varietal', required: true })
  varietal: MongooseSchema.Types.ObjectId | Varietal;
}

export const DetalleVarietalSchema = SchemaFactory.createForClass(DetalleVarietal);