import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { MetaDto } from './core/application/dto/meta.dto';
import { ReturnDto } from './core/application/dto/return.dto';
import { FormatedData } from './formatedData.dto';
import { HashTransaction } from './hashTransaction.dto';

@Controller('ERC20')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: "Parse an ERC20 (Ethereum's token standard) transaction",
  })
  @ApiResponse({
    status: 200,
    description: "Return formated data from transaction's raw data",
    type: FormatedData,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request - Please check request',
  })
  async parseTransaction(
    @Body() hashTransaction: HashTransaction,
  ): Promise<ReturnDto<FormatedData>> {
    try {
      const parsedData = await this.appService.getParseTransaction(
        hashTransaction.hash,
      );
      return new ReturnDto<FormatedData>(
        new MetaDto('success', HttpStatus.OK),
        parsedData,
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
