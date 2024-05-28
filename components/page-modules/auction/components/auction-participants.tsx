import { DataTable } from '@/components/common/data-table';
import { IAuction } from '../data/auction.type';
import { formatDate } from '@/utils/date';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

type Props = {
  participants: IAuction['participants'];
};

export default function AuctionParticipants(props: Props) {
  const { participants } = props;
  const { data: langData } = useGetPublicLang();

  if (typeof langData === "undefined") return <h1>No content.</h1>;

  const getRowClassName = (record: IAuction['participants'], index: number): string => {
    if (index === 0) {
      return 'active-max-offer bg-[radial-gradient(236.15%_138.52%_at_0%_0%,#2DB224_0%,#57C150_100%)] text-white';
    }
    return '';
  };

  return (
    <div className='p-10'>
      <DataTable
        columns={langData.auction.auction_detail.participants_columns}
        data={participants.map((item) => ({
          name: item.displayName,
          offer: item.offeredPrice + ' AZN',
          date: formatDate(item.createdDate),
          key: item.id
        }))}
        pagination={false}
        rowClassName={getRowClassName as () => string}
      />
    </div>
  );
}
