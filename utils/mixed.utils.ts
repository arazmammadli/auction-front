import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";

function clientSideRun(func: any) {
    if (typeof window !== 'undefined') {
        if (window.document.readyState === 'loading') {
            window.addEventListener('load', func)
        }
    }
};


export function cleanAfterLogout(cb: () => void) {
    
    useAuthStore.getState().clean()

    cb()
}


export function FormEntries<T>(target: EventTarget): T {

    return Object.fromEntries(new FormData(target as HTMLFormElement)) as T;
};