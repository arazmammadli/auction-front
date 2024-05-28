import { Renderable, ValueOrFunction, toast } from 'react-hot-toast';
import { PiInfo } from 'react-icons/pi';

export type ToastType = 'success' | 'error' | 'loading';

export type PromiseMessage = {
  loadingText: string;
  successText: string;
  error: ValueOrFunction<Renderable, any>
};

export function useNotify() {
  function notify(message: string, type: ToastType) {
    return toast[type](message);
  }

  function customNotify(summary: string, message: string) {
    return toast.custom(<div className='max-w-[400px] mx-auto' style={{ maxWidth: "400px" }}>
      <div className="p-4 mb-4 text-[#1B6392] border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
        <div className="flex items-center gap-1">
          <PiInfo size="20px" />
          <h3 className="text-lg text-[#1B6392] leading-none font-medium">{summary}</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          <p className='text-[#1B6392]' dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
      </div>
    </div>)
  }

  function promiseNotify(cb: Promise<unknown>, message: PromiseMessage) {
    toast.promise(cb, {
      loading: message.loadingText,
      success: message.successText,
      error: message.error
    });
  }

  return { notify, promiseNotify, customNotify };
}
