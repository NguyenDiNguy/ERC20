import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
export class HashTransaction {
  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-500' })
  hash: string;
}
