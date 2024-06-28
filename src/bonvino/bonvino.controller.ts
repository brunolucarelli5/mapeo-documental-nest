import { Body, Controller, Post, Get, Delete, Param} from '@nestjs/common';
import { BonvinoService } from './bonvino.service';
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

@Controller('bonvino')
export class BonvinoController {
  constructor(private readonly bonvinoService: BonvinoService) {}

  @Post('pais')
  async createPais(@Body() createPaisDto: CreatePaisDto): Promise<Pais> {
    return this.bonvinoService.createPais(createPaisDto);
  }

  @Post('maridaje')
  async createMaridaje(
    @Body() createMaridajeDto: CreateMaridajeDto,
  ): Promise<Maridaje> {
    return this.bonvinoService.createMaridaje(createMaridajeDto);
  }

  @Post('resena')
  async createReseña(
    @Body() createReseñaDto: CreateReseñaDto,
  ): Promise<Reseña> {
    return this.bonvinoService.createReseña(createReseñaDto);
  }

  @Post('tipouva')
  async createTipoUva(
    @Body() createTipoUvaDto: CreateTipoUvaDto,
  ): Promise<TipoUva> {
    return this.bonvinoService.createTipoUva(createTipoUvaDto);
  }

  @Post('varietal')
  async createVarietal(
    @Body() createVarietalDto: CreateVarietalDto,
  ): Promise<Varietal> {
    return this.bonvinoService.createVarietal(createVarietalDto);
  }

  @Post('provincia')
  async createProvincia(
    @Body() createProvinciaDto: CreateProvinciaDto,
  ): Promise<Provincia> {
    return this.bonvinoService.createProvincia(createProvinciaDto);
  }

  @Post('regionvitivinicola')
  async createRegionVitivinicola(
    @Body() createRegionVitivinicolaDto: CreateRegionVitivinicolaDto,
  ): Promise<RegionVitivinicola> {
    return this.bonvinoService.createRegionVitivinicola(
      createRegionVitivinicolaDto,
    );
  }

  @Post('bodega')
  async createBodega(
    @Body() createBodegaDto: CreateBodegaDto,
  ): Promise<Bodega> {
    return this.bonvinoService.createBodega(createBodegaDto);
  }

  @Post('vino')
  async createVino(@Body() createVinoDto: CreateVinoDto): Promise<Vino> {
    return this.bonvinoService.createVino(createVinoDto);
  }

  @Post('detallevarietal')
  async createDetalleVarietal(
    @Body() createDetalleVarietalDto: CreateDetalleVarietalDto,
  ): Promise<DetalleVarietal> {
    return this.bonvinoService.createDetalleVarietal(createDetalleVarietalDto);
  }

  @Get('pais')
  async findAllPaises(): Promise<Pais[]> {
    return this.bonvinoService.getPaises();
  }

  @Delete('pais/:id')
  async deletePais(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deletePais(id);
  }

  @Get('vino')
  async getVinos(): Promise<Vino[]> {
    return this.bonvinoService.getVinos();
  }

  @Get('provincia')
  async findAllProvincias(): Promise<Provincia[]> {
    return this.bonvinoService.findAllProvincias();
  }
}
