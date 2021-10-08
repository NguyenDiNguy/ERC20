import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
export class Transfer {
  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-500' })
  from: string;

  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-500' })
  to: string;

  @Length(100)
  @ApiProperty({ type: String, description: 'Length: 1-500' })
  amount: string;
}
