import { ApiProperty } from '@nestjs/swagger';

export class MetaDto {
    @ApiProperty({
        example: 200,
    })
    statusCode: number;

    @ApiProperty({
        example: 'Login Success',
    })
    message: string;
    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
