import { Brand } from "../../brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'volvo',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'honda',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'tesla',
        createAt: new Date().getTime()
    },
];