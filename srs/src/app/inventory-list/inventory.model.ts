export class InventoryItem {
    id: string;
    name: string;
    price: number;
    serialNumber: string;
    purchaseDate: Date;
    description: string;

    constructor(id: string, name: string, price: number,serialNumber: string, purchaseDate: Date, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.serialNumber = serialNumber;
        this.purchaseDate = purchaseDate;
        this.description = description;
    }
}