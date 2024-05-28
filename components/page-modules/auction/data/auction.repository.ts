import { AuctionStatus, IAuction, IProduct } from './auction.type';

export const auctionErrorMessage = {
  455: 'Auksion başlamayıb.',
  457: 'Təklifiniz son verilən təklifdən çox olmalıdır.',
  458: 'Auksion başlamayıb.',
  459: 'Auksion bitib',
  420: 'Auksiona qoşulmamısınız.',
  425: 'Təklif təyin olunan minimum dəyərdən azdır.',
  426: 'Təklif təyin olunan maksimum dəyərdən çoxdur.',
};

export const participantsColumns = [
  {
    title: 'Ad soyad',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Təklif',
    dataIndex: 'offer',
    key: 'offer',
  },
  {
    title: 'Tarix',
    dataIndex: 'date',
    key: 'date',
  },
];


export const initialProductState: IProduct = {
  id: '',
  slug: '',
  name: '',
  buying: 0,
  selling: 0,
  info: '',
  isSale: false,
  isNew: false,
  subCategoryId: 0,
  subCategory: {
    id: 0,
    nameAz: '',
    nameEn: '',
    nameRu: '',
    slug: '',
    categoryId: 0,
    category: {
      id: 0,
      nameAz: '',
      nameEn: '',
      nameRu: '',
      slug: '',
      display: true,
      imageUrl: '',
      orderNum: 0,
    },
  },
  mainImage: {
    id: '',
    productId: '',
    url: '',
    image: '',
  },
  images: [],
};

export const initialAuctionState: IAuction = {
  minIncrease: 0,
  maxIncrease: 0,
  aggregateId: 0,
  id: '',
  slug: '',
  productId: '',
  startDate: '',
  endDate: '',
  statusId: 0,
  display: false,
  connectionFee: '',
  onlineConnectionFee: '',
  startPrice: '',
  price: 0,
  maxOffer: '',
  participantCount: '',
  wasSeen: 0,
  isConnectedCurrentUser: false,
  lastOffer: '',
  winnerName: undefined, // Opsiyonel alan olduğu için undefined olarak başlatılabilir
  product: initialProductState,
  auctionStatus: {
    id: 0,
    slug: '',
    nameAz: '',
    nameEn: '',
    nameRu: '',
  },
  aggregatePartner: {
    id: 0,
    name: '',
    image: '',
    logo: '',
    isDisabled: false,
    created_date: '',
  },
  participants: [], // IAuctionJoinedUser tipine uygun bir boş dizi
};

