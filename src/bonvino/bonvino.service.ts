import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreatePaisDto,
  CreateMaridajeDto,
  CreateReseñaDto,
  CreateTipoUvaDto,
  CreateVarietalDto,
  CreateProvinciaDto,
  CreateRegionVitivinicolaDto,
  CreateBodegaDto,
  CreateVinoDto,
  CreateDetalleVarietalDto,
} from './dto/dto.dto';
import {
  Pais,
  Maridaje,
  Reseña,
  TipoUva,
  Varietal,
  Provincia,
  RegionVitivinicola,
  Bodega,
  Vino,
  DetalleVarietal,
} from './../schemas/schemas.schema';

@Injectable()
export class BonvinoService {
  constructor(
    @InjectModel(Pais.name) private readonly paisModel: Model<Pais>,
    @InjectModel(Maridaje.name) private readonly maridajeModel: Model<Maridaje>,
    @InjectModel(Reseña.name) private readonly reseñaModel: Model<Reseña>,
    @InjectModel(TipoUva.name) private readonly tipoUvaModel: Model<TipoUva>,
    @InjectModel(Varietal.name) private readonly varietalModel: Model<Varietal>,
    @InjectModel(Provincia.name)
    private readonly provinciaModel: Model<Provincia>,
    @InjectModel(RegionVitivinicola.name)
    private readonly regionVitivinicolaModel: Model<RegionVitivinicola>,
    @InjectModel(Bodega.name) private readonly bodegaModel: Model<Bodega>,
    @InjectModel(Vino.name) private readonly vinoModel: Model<Vino>,
    @InjectModel(DetalleVarietal.name)
    private readonly detalleVarietalModel: Model<DetalleVarietal>,
  ) {}



  /* 
  *  MÉTODOS PUT
  */



  async createPais(createPaisDto: CreatePaisDto): Promise<Pais> {
    const createdPais = new this.paisModel(createPaisDto);
    return createdPais.save();
  }

  async createMaridaje(
    createMaridajeDto: CreateMaridajeDto,
  ): Promise<Maridaje> {
    const createdMaridaje = new this.maridajeModel(createMaridajeDto);
    return createdMaridaje.save();
  }

  async createReseña(createReseñaDto: CreateReseñaDto): Promise<Reseña> {
    const createdReseña = new this.reseñaModel(createReseñaDto);
    return createdReseña.save();
  }

  async createTipoUva(createTipoUvaDto: CreateTipoUvaDto): Promise<TipoUva> {
    const createdTipoUva = new this.tipoUvaModel(createTipoUvaDto);
    return createdTipoUva.save();
  }

  async createVarietal(
    createVarietalDto: CreateVarietalDto,
  ): Promise<Varietal> {
    const createdVarietal = new this.varietalModel(createVarietalDto);
    return createdVarietal.save();
  }

  async createProvincia(
    createProvinciaDto: CreateProvinciaDto,
  ): Promise<Provincia> {
    const createdProvincia = new this.provinciaModel(createProvinciaDto);
    return createdProvincia.save();
  }

  async createRegionVitivinicola(
    createRegionVitivinicolaDto: CreateRegionVitivinicolaDto,
  ): Promise<RegionVitivinicola> {
    const createdRegionVitivinicola = new this.regionVitivinicolaModel(
      createRegionVitivinicolaDto,
    );
    return createdRegionVitivinicola.save();
  }

  async createBodega(createBodegaDto: CreateBodegaDto): Promise<Bodega> {
    const createdBodega = new this.bodegaModel(createBodegaDto);
    return createdBodega.save();
  }

  async createVino(createVinoDto: CreateVinoDto): Promise<Vino> {
    const createdVino = new this.vinoModel(createVinoDto);
    console.log(createdVino)
    console.log(createVinoDto)
    return createdVino.save();
  }

  async createDetalleVarietal(
    createDetalleVarietalDto: CreateDetalleVarietalDto,
  ): Promise<DetalleVarietal> {
    const createdDetalleVarietal = new this.detalleVarietalModel(
      createDetalleVarietalDto,
    );
    return createdDetalleVarietal.save();
  }



  /*
  *  MÉTODOS DELETE - Devuelven void porque es borrar justamente
  */



  async deletePais(id: string): Promise<void> {
    await this.paisModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando País con ID: ${id}`);
  }

  async deleteMaridaje(id: string): Promise<void> {
    await this.maridajeModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Maridaje con ID: ${id}`);
  }

  async deleteResenia(id: string): Promise<void> {
    await this.reseñaModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Reseña con ID: ${id}`);
  }

  async deleteTipoUva(id: string): Promise<void> {
    await this.tipoUvaModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando TipoUva con ID: ${id}`);
  }

  async deleteVarietal(id: string): Promise<void> {
    await this.varietalModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Varietal con ID: ${id}`);
  }

  async deleteProvincia(id: string): Promise<void> {
    await this.provinciaModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Provincia con ID: ${id}`);
  }

  async deleteRegionVitivinicola(id: string): Promise<void> {
    await this.regionVitivinicolaModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando RegionVitivinicola con ID: ${id}`);
  }

  async deleteDetalleVarietal(id: string): Promise<void> {
    await this.detalleVarietalModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando DetalleVarietal con ID: ${id}`);
  }

  async deleteBodega(id: string): Promise<void> {
    await this.bodegaModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Bodega con ID: ${id}`);
  }

  async deleteVino(id: string): Promise<void> {
    await this.vinoModel.findByIdAndDelete(id).exec();
    console.log(`Eliminando Vino con ID: ${id}`);
  }



  /*
  *    MÉTODOS GET
  */



  async findAllPaises(): Promise<Pais[]> {
    return this.paisModel.find().exec();
  }

  async findAllMaridajes(): Promise<Maridaje[]> {
    return this.maridajeModel.find().exec();
  }

  async findAllResenias(): Promise<Reseña[]> {
    return this.reseñaModel.find().exec();
  }

  async findAllTiposUvas(): Promise<TipoUva[]> {
    return this.tipoUvaModel.find().exec();
  }

  async findAllVarietales(): Promise<Varietal[]> {
    return this.varietalModel.find().exec();
  }
  async findAllProvincias(): Promise<Provincia[]> {
    return this.provinciaModel.find().exec();
  }

  async findAllRegionesVitivinicolas(): Promise<RegionVitivinicola[]> {
    return this.regionVitivinicolaModel.find().exec();
  }

  async findAllDetallesVarietal(): Promise<DetalleVarietal[]> {
    return this.detalleVarietalModel.find().exec();
  }

  async findAllBodegas(): Promise<Bodega[]> {
    return this.bodegaModel.find().exec();
  }

  async findAllVinos(): Promise<Vino[]> {
    return this.vinoModel.find().exec();
  }

 

}
