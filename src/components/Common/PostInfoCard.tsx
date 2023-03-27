const PostInfoCard = () => {
  return (
    <div className="bg-white shadow-custom w-full h-[120px] rounded-xl p-3">
      <span className="text-xs bg-red-400 text-white rounded-xl px-3 py-[2px]">
        연애
      </span>
      <p className="font-bold text-sm text-ellipsis overflow-hidden whitespace-nowrap">
        만약에 내 애인이 내 친구랑 몰래 바람피다 걸린다면?
      </p>
      <p className="text-[12px] text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap">
        죽인다 / 한번쯤 용서한다
      </p>

      <div className="flex justify-between pt-3">
        <div className="flex gap-x-1">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <span className="text-xs">Hanghae99</span>
        </div>{" "}
        <div className="flex gap-x-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.24243"
              width="5.09091"
              height="6.22222"
              rx="2.54545"
              fill="#CACACA"
            />
            <path
              d="M0 14C0 10.5636 2.78578 7.77777 6.22222 7.77777H7.77778C11.2142 7.77777 14 10.5636 14 14H0Z"
              fill="#CACACA"
            />
          </svg>

          <span className="text-xs text-gray-400">14명 참여</span>
        </div>
      </div>
    </div>
  );
};

export default PostInfoCard;
