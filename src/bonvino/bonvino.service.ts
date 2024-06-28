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

  async getPaises(): Promise<Pais[]> {
    return this.paisModel.find().exec();
  }

  async getVinos(): Promise<Vino[]> {
    return this.vinoModel.find().exec();
  }

  async deletePais(id: string): Promise<void> {
    return this.paisModel.findByIdAndDelete(id);
  }

  async findAllProvincias(): Promise<Provincia[]> {
    return this.provinciaModel.find().exec();
  }

}
