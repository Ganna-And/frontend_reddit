import React from 'react';

type PostImgProps = {
    post: any
};

const PostImg:React.FC<PostImgProps> = ({post}) => {
    const numberdate = post?.created_utc;
    const dateFormatted = new Date(numberdate * 1000);
    const finalDate = dateFormatted.toLocaleString('default', { day: 'numeric', month: 'short' });
    return (
    <div className="w-[95%]  md:2/4 h-72 flex-col  justify-center m-3  bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)] lg:w-[50%]">
    <button className="btn px-1 btn-primary m-3">
      {finalDate}
      </button>
  </div>
  )
}
export default PostImg;