'use client';
import { Button } from '@/components/common/button';
import { SidebarContentItem } from '@/components/layout/sidebar/components/sidebar.item';
import { sidebarMenuIcons } from '@/components/layout/sidebar/data/sidebar.repository';
import { useAuthStore } from '@/components/page-modules/auth/data/auth.store';
import { useSelectedLayoutSegment } from 'next/navigation';
import { PiSignOut } from 'react-icons/pi';
import { useSendConfirmEmail } from '../hooks/confirm-email.hook';
import { useNotify } from '@/global/hooks/notify.hook';
import { Toast } from '@/components/common/toast';
import { cleanAfterLogout } from '@/utils/mixed.utils';
import { useGetPublicLang } from '@/global/requests/get-public-lang';
import { IMenus, MenuType } from '../../header/data/header.type';
import { useMemo } from 'react';

export function SidebarContainer() {

    // states
    const user = useAuthStore((state) => ({
        emailConfirmed: state.emailConfirmed,
        token: state.auth.accessToken

    }));

    // hooks
    const segment = useSelectedLayoutSegment();
    const confirmEmailRequest = useSendConfirmEmail();
    const pushNotify = useNotify();
    const { data: profileMenu } = useGetPublicLang();

    const combineArray = (menu: MenuType[]) => {
        return menu.reduce((result: IMenus[], menu: MenuType, index: number): IMenus[] => {
            result.push({ ...menu, icon: sidebarMenuIcons[index].icon, segment: sidebarMenuIcons[index].segment });
            return result;
        }, []);
    };

    const data = useMemo(() => {
        if (profileMenu) {
            return combineArray(profileMenu.dashboard.profileNavData)
        } else {
            return [];
        }
    }, [profileMenu]);

    const handleConfirm = async () => {
        if (!user.token) return;

        pushNotify.promiseNotify(confirmEmailRequest.mutateAsync({ token: user.token }), {
            error: (data) => data.response.data.msg,
            loadingText: "Email confirmed...",
            successText: "Successfully!"
        });
    };

    function signOut() {
        cleanAfterLogout(() => {
            window.location.replace('/sign-in')
        });


    };

    return (
        <div className='w-full py-4 rounded shadow-[0px_8px_40px_0px_rgba(0,0,0,0.08)] border border-solid border-[#E4E7E9]'>
            <div className='flex flex-col mb-5'>
                {data.map((d) => (
                    <SidebarContentItem key={d.id} active={segment === d.segment} {...d} />
                ))}
                <button onClick={signOut} type='button' className='flex flex-row gap-3 items-center py-[10px] pl-6'>
                    <PiSignOut size='20px' color='#5F6C72' />
                    <h3 className='text-sm font-normal leading-5 text-[#5F6C72]'>{profileMenu?.dashboard?.logout_text}</h3>
                </button>
            </div>
            {
                !user.emailConfirmed ? <div className="w-full px-6 rounded">
                    <div className="w-full p-3 bg-[#F2F4F5] rounded">
                        <div className="mb-3">
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                {profileMenu?.dashboard?.email_verified?.sub_head}
                            </span>
                        </div>
                        <p className='text-sm font-normal leading-5 text-[#475156] mb-3'>
                           {profileMenu?.dashboard?.email_verified.desc}
                        </p>
                        <div className="w-full h-max">
                            <Button onClick={handleConfirm} type='button' width='w-full'>
                                <span className='text-sm font-bold leading-8 uppercase text-white'>{profileMenu?.dashboard?.email_verified.btn_text}</span>
                            </Button>
                        </div>
                    </div>
                </div> : null
            }
            <Toast />
        </div>
    )
}