export class InventoryItem {
    itemID: number;
    name: string;
    count: number;
    description: string;

    constructor(itemID: number, name: string, count: number, description: string) {
        this.itemID = itemID;
        this.name = name;
        this.count = count;
        this.description = description;
    }
}
