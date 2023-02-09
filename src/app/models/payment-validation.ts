export interface IPaymentModel {
  cardNumber: string;
  name: string;
  month: string;
  year: IYear;
  cvv: number;
}

export interface IYear {
  text: string;
  value: string;
}
