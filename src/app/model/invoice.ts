import { Vendor } from './vendor';
import { Repair } from './repair';

export class Invoice {
    id: number;
    date: string;
    mileage: number;
    vendorId: number;
    vendor: Vendor;
    repairId: number;
    repair: Repair;
    filePath: string;
}
