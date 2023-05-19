import { MAX_WIDTH_SIZE } from "@/data/Enum";

function BottomNav() {
  return (
    <div
      className={`fixed z-40 bottom-0 w-[${MAX_WIDTH_SIZE}] sm:w-full h-[70px] bg-white border-2`}
    >
      <div className="grid grid-cols-4 gap-x-4 justify-items-center mt-1">
        <div className="flex flex-col justify-center items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="8" width="32" height="5" rx="2" fill="#393939" />
            <rect x="4" y="18" width="32" height="5" rx="2" fill="#393939" />
            <rect x="4" y="28" width="32" height="5" rx="2" fill="#393939" />
          </svg>
          <p className="text-xs text-center">카테고리</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 24H24V35H16V24Z" fill="#393939" />
            <path
              d="M34.9689 17.7748L21.2623 5.46219C21.097 5.31574 20.9004 5.19949 20.6838 5.12017C20.4672 5.04084 20.2348 5 20.0001 5C19.7654 5 19.533 5.04084 19.3164 5.12017C19.0998 5.19949 18.9032 5.31574 18.7379 5.46219L5.03131 17.7904C4.69964 18.0842 4.4377 18.4331 4.2607 18.8167C4.08369 19.2002 3.99515 19.6109 4.00021 20.0248V33.1186C3.99883 33.9185 4.34647 34.6884 4.97153 35.2697C5.5966 35.8511 6.4515 36.1996 7.36018 36.2436H12.889V22.181C12.889 21.7666 13.0763 21.3692 13.4097 21.0762C13.7431 20.7832 14.1953 20.6185 14.6668 20.6185H25.3334C25.8049 20.6185 26.2571 20.7832 26.5905 21.0762C26.9239 21.3692 27.1112 21.7666 27.1112 22.181V36.2436H32.64C33.5487 36.1996 34.4036 35.8511 35.0287 35.2697C35.6537 34.6884 36.0014 33.9185 36 33.1186V20.0248C36.0014 19.1856 35.6317 18.3788 34.9689 17.7748V17.7748Z"
              fill="#393939"
            />
          </svg>
          <p className="text-xs text-center">홈</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79545 35.7815L24.6932 26.2641C24.9583 26.1508 25.197 25.9809 25.4091 25.7543C25.6212 25.5277 25.7803 25.2727 25.8864 24.9895L34.7955 5.86976C35.1136 5.30325 35.0606 4.80698 34.6364 4.38097C34.2121 3.95722 33.7348 3.88697 33.2045 4.17023L15.3068 13.6876C15.0417 13.8009 14.803 13.9709 14.5909 14.1975C14.3788 14.4241 14.2197 14.679 14.1136 14.9622L5.20455 34.082C4.88636 34.6485 4.93939 35.1583 5.36364 35.6115C5.78788 36.0647 6.26515 36.1214 6.79545 35.7815ZM20 23.3749C19.0985 23.3749 18.3433 23.0486 17.7345 22.396C17.1236 21.7456 16.8182 20.9389 16.8182 19.9759C16.8182 19.0128 17.1236 18.2049 17.7345 17.5523C18.3433 16.902 19.0985 16.5768 20 16.5768C20.9015 16.5768 21.6577 16.902 22.2686 17.5523C22.8774 18.2049 23.1818 19.0128 23.1818 19.9759C23.1818 20.9389 22.8774 21.7456 22.2686 22.396C21.6577 23.0486 20.9015 23.3749 20 23.3749Z"
              fill="#393939"
            />
          </svg>
          <p className="text-xs text-center">톡톡</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="14" y="6" width="12" height="12" rx="6" fill="#393939" />
            <path
              d="M4 33C4 26.3726 9.37258 21 16 21H25C31.6274 21 37 26.3726 37 33V33H4V33Z"
              fill="#393939"
            />
          </svg>
          <p className="text-xs text-center">마이페이지</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
