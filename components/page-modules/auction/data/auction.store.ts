import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IAuction, IAuctionJoinedUser } from './auction.type';
import { initialAuctionState } from './auction.repository';
import { useAuthStore } from '../../auth/data/auth.store';

export type AuctionStoreTypes = {
  isConnectedCurrentUser: boolean;
  participants: IAuction['participants'];
  productInfo: IAuction['product']['info'];
};

type AuctionStoreActions = {
  setIsConnectedCurrentUser: (status: AuctionStoreTypes['isConnectedCurrentUser']) => void;
  setParticipants: (auction: AuctionStoreTypes['participants']) => void;
  onChangeBid: (bid: string) => void;
  setProductInfo: (productInfo: AuctionStoreTypes['productInfo']) => void;
  insertToParticipants: (participant: IAuctionJoinedUser) => void;
};

export const useAuctionStore = create(
  persist<AuctionStoreTypes & AuctionStoreActions>(
    (set, get) => ({
      participants: initialAuctionState.participants,
      isConnectedCurrentUser: false,
      productInfo: '',
      setParticipants: (participants) => {
        set({ participants });
      },
      setIsConnectedCurrentUser: (isConnectedCurrentUser) => {
        set({ isConnectedCurrentUser });
      },
      setProductInfo: (productInfo) => {
        set({ productInfo });
      },
      onChangeBid: (bid) => {
        const updatedParticipants = get().participants.map((par) => {
          if (par.userId == useAuthStore.getState().user.id) {
            par.offeredPrice = bid;
          }
          return par;
        });

        set({
          participants: updatedParticipants.sort((a, b) => +b.offeredPrice - +a.offeredPrice),
        });
      },
      insertToParticipants: (participant) => {
        set({ participants: [...get().participants, participant] });
      },
    }),
    {
      name: 'auction-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
