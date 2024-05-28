'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  AuctionPay,
  AuctionStatus,
  IAuction,
  IAuctionJoin,
  IAuctionStatusType,
} from '../data/auction.type';
import { useAuthStore } from '../../auth/data/auth.store';
import { useRouter } from 'next/navigation';
import { Dialog } from '@/components/common/dialog';
import { useAuctionJoin } from '../hooks/auction-join.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { PayContainer } from '@/components/container/pay.container';
import { useGetPublicLang } from '@/global/requests/get-public-lang';
import { Confirm } from '@/components/common/confirm';

const AuctionJoinButton = dynamic(() => import('./auction-join-button'));
const AuctionBidButton = dynamic(() => import('./auction-bid-button'));

type Props = {
  auctionId: IAuction['id'];
  connectionFee: IAuction['connectionFee'];
  onlineConnectFee: IAuction['onlineConnectionFee'];
  auctionStatus: IAuctionStatusType;
  isConnectedCurrentUser: IAuction['isConnectedCurrentUser'];
  aggId: IAuction['aggregateId'];
  lastOffer: IAuction['lastOffer'];
  minIncrease: IAuction['minIncrease'];
};

export default function AuctionButton(props: Props) {
  const {
    auctionStatus,
    connectionFee,
    onlineConnectFee,
    isConnectedCurrentUser,
    auctionId,
    aggId,
    lastOffer,
    minIncrease,
  } = props;

  // state
  const authState = useAuthStore((state) => ({
    isLogin: state.auth.isLogin,
  }));

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  // requests
  const joinAuction = useAuctionJoin();
  const { data: langData } = useGetPublicLang();

  // hooks
  const router = useRouter();
  const pushNotify = useNotify();

  // join check
  function onRequestJoin() {
    if (Number(connectionFee) === 0 || Number(onlineConnectFee) === 0) {
      onPay(AuctionPay.SavedCard);
    } else{
      onCloseConfirm();
      onOpenModal();
    }

  };

  function onPay(payType: IAuctionJoin['payType']) {
    const postData: IAuctionJoin = {
      auctionId,
      offeredPrice: 0,
      payType,
    };

    pushNotify.promiseNotify(joinAuction.mutateAsync(postData), {
      error: (data) => data.response.data.msg,
      loadingText: payType === 1 ? 'Yönləndirilir...' : "Ödəniş edilir...",
      successText: 'Uğurlu!',
    });
  }

  // modal
  function onOpenModal() {
    setIsShowModal(true);
  };

  function onCloseModal() {
    setIsShowModal(false);
  };

  function onOpenConfirm() {
    if (!authState.isLogin) {
      return router.push('/sign-in');
    }

    setIsShowConfirm(true);
  };

  function onCloseConfirm() {
    setIsShowConfirm(false);
  };

  if (typeof langData === "undefined") return <></>;

  if (isConnectedCurrentUser) {
    return (
      <AuctionBidButton
        lastOffer={lastOffer}
        minIncrease={minIncrease}
        auctionId={auctionId}
        btnTxt={langData.auction.auction_offer_btn}
      />
    );
  };

  return (
    <>
      <AuctionJoinButton
        onClick={onOpenConfirm}
        joinPrice={
          auctionStatus.id == AuctionStatus.LIVE ? onlineConnectFee : connectionFee
        }
        btnTxt={langData.auction.auction_join_btn}
        freeTxt={langData.auction.auction_free_txt}
      />
      <Dialog closable={false} open={isShowModal} width={900} onCancel={onCloseModal}>
        <PayContainer aggId={aggId} type='auctionJoin' onPay={onPay} />
      </Dialog>
      <Confirm onClickSuccess={onRequestJoin} cancelShowModal={onCloseConfirm} isShowModal={isShowConfirm} head={langData.auction.auction_confirm_head} info={langData.auction.auction_confirm_desc} />
    </>
  );
}
