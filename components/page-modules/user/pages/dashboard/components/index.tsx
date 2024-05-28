"use client";
import { AccountInfo } from '@/components/page-modules/user/pages/dashboard/components/account-info';
import { PaymentOption } from '@/page-modules/user/shared/components/payment';
import { useAuthStore } from '@/components/page-modules/auth/data/auth.store';
import { IUser } from '@/components/page-modules/auth/data/auth.type';
import { useGetPublicLang } from '@/global/requests/get-public-lang';

export function DashboardContent() {
  const userData = useAuthStore((state) => ({
    user: state.user
  }));
  const { data: langData } = useGetPublicLang();
  const user = userData.user as IUser;

  if (typeof langData === "undefined") return <h1>Dashboard no content.</h1>;

  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='w-full'>
        <h1 className='text-xl font-semibold leading-7 text-[#191c1f] mb-3'>
          {langData.dashboard.head}, {user?.displayName.split(" ")[0]}
        </h1>
        <div className='max-w-[32rem]'>
          <div className="w-full" dangerouslySetInnerHTML={{ __html:langData.dashboard.info }}></div>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full md:max-w-[19.5rem]'>
          <AccountInfo {...userData?.user} account_info_head={langData.dashboard.account_info_head} account_info_phone={langData.dashboard.account_info_phone} account_info_email={langData.dashboard.account_info_email} account_info_btn={langData.dashboard.account_info_btn} />
        </div>
      </div>
      <PaymentOption />
      {/* <div className="w-full">
        <div className="w-full h-max border overflow-x-auto rounded border-solid border-[#E4E7E9]">
          <div className="w-full flex flex-row items-center justify-between py-5 px-6">
            <h1 className="text-lg font-medium leading-6 text-[#191c1f]">Recent Order</h1>
            <Link href="/order-history" className="flex items-center gap-2">
              <span className="text-sm font-semibold leading-5 text-[#FA8232]">View All</span>
              <PiArrowRight size="20px" color="#FA8232" />
            </Link>
          </div>
          <Table columns={columns}>
            {
              recentOrders.map((d) => (
                <tr key={d.key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4">
                    <p className="text-sm font-medium leading-5 text-[#191c1f]">{d.orderId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold leading-5 text-[#FA8232]">{d.statusText}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-normal leading-5 text-[#5F6C72]">{d.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-normal leading-5 text-[#475156]">{d.total}</p>
                  </td>
                  <td className="px-6 py-4">
                    <DashboardLink href="/order-details" color="text-[#2DA5F3]" text="View Details" />
                  </td>
                </tr>
              ))
            }
          </Table>
        </div>
      </div> */}
    </div>
  );
}
