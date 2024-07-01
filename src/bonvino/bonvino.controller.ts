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


  /*
  *    MÉTODOS POST
  */



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
    console.log("creando vino")
    return this.bonvinoService.createVino(createVinoDto);
  }

  @Post('detallevarietal')
  async createDetalleVarietal(
    @Body() createDetalleVarietalDto: CreateDetalleVarietalDto,
  ): Promise<DetalleVarietal> {
    return this.bonvinoService.createDetalleVarietal(createDetalleVarietalDto);
  }



  /*
  *    MÉTODOS DELETE
  */



  @Delete('pais/:id')
  async deletePais(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deletePais(id);
  }

  @Delete('maridaje/:id')
  async deleteMaridaje(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteMaridaje(id);
  }
  
  @Delete('resenia/:id')
  async deleteResenia(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteResenia(id);
  }
  
  @Delete('tipoUva/:id')
  async deleteTipoUva(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteTipoUva(id);
  }
  
  @Delete('varietal/:id')
  async deleteVarietal(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteVarietal(id);
  }
  
  @Delete('provincia/:id')
  async deleteProvincia(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteProvincia(id);
  }
  
  @Delete('regionVitivinicola/:id')
  async deleteRegionVitivinicola(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteRegionVitivinicola(id);
  }
  
  @Delete('detalleVarietal/:id')
  async deleteDetalleVarietal(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteDetalleVarietal(id);
  }
  
  @Delete('bodega/:id')
  async deleteBodega(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteBodega(id);
  }
  
  @Delete('vino/:id')
  async deleteVino(@Param('id') id: string): Promise<void> {
    this.bonvinoService.deleteVino(id);
  }




  /*
  *    MÉTODOS GET
  */



  @Get('pais')
  async findAllPaises(): Promise<Pais[]> {
    return this.bonvinoService.findAllPaises();
  }

  @Get('maridaje')
  async findAllMaridajes(): Promise<Maridaje[]> {
    return this.bonvinoService.findAllMaridajes();
  }

  @Get('resenia')
  async findAllResenias(): Promise<Reseña[]> {
    return this.bonvinoService.findAllResenias();
  }

  @Get('tipoUva')
  async findAllTiposUvas(): Promise<TipoUva[]> {
    return this.bonvinoService.findAllTiposUvas();
  }

  @Get('varietal')
  async findAllVarietales(): Promise<Varietal[]> {
    return this.bonvinoService.findAllVarietales();
  }

  @Get('provincia')
  async findAllProvincias(): Promise<Provincia[]> {
    return this.bonvinoService.findAllProvincias();
  }

  @Get('regionVitivinicola')
  async findAllRegionesVitivinicolas(): Promise<RegionVitivinicola[]> {
    return this.bonvinoService.findAllRegionesVitivinicolas();
  }

  @Get('detalleVarietal')
  async findAllDetallesVarietal(): Promise<DetalleVarietal[]> {
    return this.bonvinoService.findAllDetallesVarietal();
  }

  @Get('bodega')
  async findAllBodegas(): Promise<Bodega[]> {
    return this.bonvinoService.findAllBodegas();
  }

  @Get('vino')
  async findAllVinos(): Promise<Vino[]> {
    return this.bonvinoService.findAllVinos();
  }

}