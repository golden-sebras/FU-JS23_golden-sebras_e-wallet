interface Card {
  id: number;
  cardNumber: string;
  name: string;
  validThrough: string;
  ccv: string;
  vendorId: string;
  active: boolean;
}

export default Card;
