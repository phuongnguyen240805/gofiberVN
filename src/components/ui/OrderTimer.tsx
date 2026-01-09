// src/components/ui/OrderTimer.tsx
import React, { useState } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import { MdCheckCircle } from 'react-icons/md'; // Hoặc icon tương ứng hình 2

export const OrderTimer = ({ seconds }: { seconds: number }) => {
  const { formattedTime, isExpired, isReady } = useCountdown(seconds, 'order_timer_key');
  const [showHotline, setShowHotline] = useState(false);

  if (!isReady) {
    return <div className="h-[50px] w-full animate-pulse bg-gray-800 rounded-lg" />;
  }

  return (
    <div className="space-y-4 w-full">
      <p className="text-[10px] text-red-500 italic">* Contact Pay</p>

      {!isExpired ? (
        <div className="flex items-center justify-center rounded-lg bg-[#1c2128] py-3 border border-gray-800 shadow-inner">
          <span className="text-sm font-bold text-white tracking-wide">
            Payment Wait {formattedTime}
          </span>
        </div>
      ) : (
        <>
          <button
            onClick={() => setShowHotline(!showHotline)}
            className="w-full flex flex-col items-center justify-center gap-1 rounded-lg bg-[#2453df] py-3 px-4 text-white hover:bg-blue-700 transition-all shadow-lg animate-fadeIn"
          >
            <div className="flex items-center gap-2">
              <MdCheckCircle className="text-white text-xl" />
              <span className="text-sm font-bold">Fail Pay</span>
            </div>
          </button>

          {
            showHotline && (
              <div className="w-full flex flex-col items-center justify-center gap-1 rounded-lg bg-[#8b0000] py-6 px-4 text-white transition-all shadow-lg animate-fadeIn">
                <span className="text-sm font-black tracking-widest">
                  hotline 0989 07 85 07
                </span>
              </div>
            )
          }
        </>
      )}
    </div>
  );
};