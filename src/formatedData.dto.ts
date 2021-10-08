import { ApiProperty } from '@nestjs/swagger';
import { Length, IsInt, IsArray } from 'class-validator';
import { Transfer } from './transfer.dto';
export class FormatedData {
  @IsArray()
  @ApiProperty({ type: () => [Transfer] })
  transfers: Transfer[];

  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-100' })
  hash: string;

  @IsInt()
  @ApiProperty({ type: Number })
  blockHeight: number;

  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-100' })
  contractAddress: string;
}
