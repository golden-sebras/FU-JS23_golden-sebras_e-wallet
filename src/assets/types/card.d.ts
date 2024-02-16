interface Card {
  id: number;
  cardNumber: string;
  name: string;
  validThrough: {
    month: string;
    year: string;
  };
  ccv: number;
  vendorId: number;
  active: boolean;
}

export default Card;
