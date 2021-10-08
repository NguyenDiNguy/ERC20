import { MetaDto } from './meta.dto';

export class ReturnDto<T> {
    constructor(meta: MetaDto, data: T) {
        this.response = data;
        this.meta = meta;
    }
    meta: MetaDto;
    response: T;
}
