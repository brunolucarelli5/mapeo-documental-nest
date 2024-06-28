export class CreatePaisDto {
  readonly nombre: string;
}

export class UpdatePaisDto {
  readonly nombre?: string;
}

export class PaisDto {
  readonly id: string;
  readonly nombre: string;
}

export class CreateMaridajeDto {
  readonly nombre: string;
  readonly descripcion: string;
}

export class UpdateMaridajeDto {
  readonly nombre?: string;
  readonly descripcion?: string;
}

export class MaridajeDto {
  readonly id: string;
  readonly nombre: string;
  readonly descripcion: string;
}

export class CreateReseñaDto {
  readonly comentario: string;
  readonly esPremium: boolean;
  readonly fechaReseña: Date;
  readonly puntaje: number;
}

export class UpdateReseñaDto {
  readonly comentario?: string;
  readonly esPremium?: boolean;
  readonly fechaReseña?: Date;
  readonly puntaje?: number;
}

export class ReseñaDto {
  readonly id: string;
  readonly comentario: string;
  readonly esPremium: boolean;
  readonly fechaReseña: Date;
  readonly puntaje: number;
}

export class CreateTipoUvaDto {
  readonly nombre: string;
  readonly descripcion: string;
}

export class UpdateTipoUvaDto {
  readonly nombre?: string;
  readonly descripcion?: string;
}

export class TipoUvaDto {
  readonly id: string;
  readonly nombre: string;
  readonly descripcion?: string;
}

export class CreateVarietalDto {
  readonly descripcion: string;
  readonly porcentajeComposicion: number;
  readonly tipoUva: string; // Referencing TipoUva by ID
}

export class UpdateVarietalDto {
  readonly descripcion?: string;
  readonly porcentajeComposicion?: number;
  readonly tipoUva?: string;
}

export class VarietalDto {
  readonly id: string;
  readonly descripcion?: string;
  readonly porcentajeComposicion: number;
  readonly tipoUva: string;
}

export class CreateProvinciaDto {
  readonly nombre: string;
  readonly pais: string; // Referencing Pais by ID
}

export class UpdateProvinciaDto {
  readonly nombre?: string;
  readonly pais?: string;
}

export class ProvinciaDto {
  readonly id: string;
  readonly nombre: string;
  readonly pais: string;
}

export class CreateRegionVitivinicolaDto {
  readonly descripcion: string;
  readonly nombre: string;
  readonly provincia: string; // Referencing Provincia by ID
}

export class UpdateRegionVitivinicolaDto {
  readonly descripcion?: string;
  readonly nombre?: string;
  readonly provincia?: string;
}

export class RegionVitivinicolaDto {
  readonly id: string;
  readonly descripcion: string;
  readonly nombre: string;
  readonly provincia: string;
}

export class CreateDetalleVarietalDto {
  readonly vino: string; // Referencing Vino by ID
  readonly varietal: string; // Referencing Varietal by ID
}

export class UpdateDetalleVarietalDto {
  readonly vino?: string;
  readonly varietal?: string;
}

export class DetalleVarietalDto {
  readonly id: string;
  readonly vino: string;
  readonly varietal: string;
}

export class CreateBodegaDto {
  readonly coordenadasUbicacion: string;
  readonly descripcion: string;
  readonly historia: string;
  readonly nombre: string;
  readonly periodoActualizacion: Date;
  readonly regionVitivinicola: string; // Referencing RegionVitivinicola by ID
}

export class CreateVinoDto {
  readonly añada: number;
  readonly fechaActualizacion: Date;
  readonly imagenEtiqueta: string; // Assuming storing the path to the image
  readonly notaDeCataBodega: number;
  readonly precioARS: number;
  readonly bodega: string; // Referencing Bodega by ID
  readonly maridaje: string; // Referencing Maridaje by ID
  readonly reseña: string; // Referencing Reseña by ID
}
