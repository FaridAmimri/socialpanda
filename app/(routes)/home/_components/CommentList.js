/** @format */

import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CommentList = ({ commentList }) => {
  return (
    <div className='space-y-2'>
      {commentList.map((comment, index) => (
        <div className='flex justify-between items-center p-3 border rounded-lg'>
          <div className='flex items-center gap-3'>
            <Image
              src={comment?.createdBy?.image}
              alt='user-image'
              width={30}
              height={30}
              className='rounded-full'
            />
            <h2 className='bg-slate-100 p-2 rounded-lg'>{comment.text}</h2>
          </div>
          <MoreVertical className='h-5 w-5 cursor' />
        </div>
      ))}
    </div>
  )
}

export default CommentList
