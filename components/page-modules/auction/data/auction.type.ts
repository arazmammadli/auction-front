export interface IAuction {
  minIncrease: number;
  maxIncrease: number;
  aggregateId: number;
  id: string;
  slug: string;
  productId: string;
  startDate: string;
  endDate: string;
  statusId: number;
  display: boolean;
  connectionFee: string;
  onlineConnectionFee: string;
  startPrice: string;
  price: number;
  maxOffer: string;
  participantCount: string;
  wasSeen: number;
  isConnectedCurrentUser: boolean;
  lastOffer: string;
  winnerName?: string;
  product: IProduct;
  auctionStatus: IAuctionStatusType;
  aggregatePartner: IAggregate;
  participants: IAuctionJoinedUser[];
}

export interface IAuctionJoinedUser {
  id: string;
  userId: string;
  displayName: string;
  createdDate: string;
  offeredPrice: string;
}

export interface IMainImage {
  id: string;
  productId: string;
  url: string;
  image: string;
}

export interface IProduct {
  id: string;
  slug: string;
  name: string;
  buying: number;
  selling: number;
  info: string;
  isSale: boolean;
  isNew: boolean;
  subCategoryId: number;
  subCategory: ISubCategory;
  mainImage: IMainImage;
  images: IProductImage[];
}

export interface IProductImage {
  id: string;
  productId: string;
  url: string;
}

export interface ISubCategory {
  id: number;
  nameAz: string;
  nameEn: string;
  nameRu: string;
  slug: string;
  categoryId: number;
  category: ICategory;
}

export interface IAuctionStatusType {
  id: number;
  slug: string;
  nameAz: string;
  nameEn: string;
  nameRu: any;
}

export interface IAggregate {
  id: number;
  name: string;
  image: string;
  logo: string;
  isDisabled: boolean;
  created_date: string;
}

export enum AuctionStatus {
  SOON = 0,
  LIVE = 1,
  ENDED = 2,
  DELIVERY = 3,
  CANCELED = 4,
  WINNER = 5,
}

export enum AuctionPay {
  OneTime = 1,
  SavedCard = 2,
  PayAndSave = 3,
}

export interface IAuctionsQuery {
  userId?: string;
  name?: string;
  limit: number;
  offset: number;
  statusId?: IAuctionStatusType['id'];
  isOnlyActive?: boolean;
  startDateFrom?: string;
  startDateTo?: string;
  endDateFrom?: string;
  endDateTo?: string;
  categorySlug?: string;
}

export interface IAuctionResponse {
  list: IAuction[];
  count: number;
}

export interface IAuctionJoin {
  offeredPrice: number;
  auctionId: string;
  payType: AuctionPay;
}

export interface IAuctionBid extends Omit<IAuctionJoin, 'payType'> { }

export interface ICategory {
  id: number;
  slug: string;
  nameAz: string;
  nameEn: string;
  nameRu: string;
  display: boolean;
  orderNum: number;
  imageUrl: string;
}

export interface IAuctionDetailLangData {
  start_date_txt: string,
  end_date_txt: string,
  starting_price_txt: string,
  joining_fee: string,
  live_connection_fee: string,
  minimum_bid_txt: string,
  maximum_offer_txt: string,
  last_offer_txt: string,
  secure_payment_txt: string,
};