export class AccountWallet {
  id: string;
  name?: string;
  image?: string;
  detail?: string;
  address: string;
  addressTrc20: string;
  isHasBalance?: boolean;
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.detail = data.detail;
    this.address = data.address;
    this.addressTrc20 = data.addressTrc20;
    this.isHasBalance = data.isHasBalance;
  }
}
