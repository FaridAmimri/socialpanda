/** @format */

import PostItem from './PostItem'
import { Skeleton } from '@/components/ui/skeleton'

const PostList = ({ postList }) => {
  return (
    <div>
      {postList ? (
        postList.map((post) => (
          <div key={post._id}>
            <PostItem post={post} />
          </div>
        ))
      ) : (
        <div>
          {[1, 2, 3].map((item, index) => (
            <div className='flex flex-col space-y-3 py-3'>
              <Skeleton className='h-[125px] rounded-xl' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList
