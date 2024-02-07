/** @format */

import { UserContext } from '@/app/_context/UserContext'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Image, Send, Video } from 'lucide-react'
import { useState, useContext } from 'react'
import { useToast } from '@/components/ui/use-toast'

const WritePost = () => {
  const { user } = useUser()
  const [inputPost, setInputPost] = useState()
  const { userDetail, setUserDetail } = useContext(UserContext)
  const { toast } = useToast()

  const handlePost = () => {
    const data = {
      text: inputPost,
      createdAt: Date.now().toString(),
      createdBy: userDetail._id
    }
    GlobalApi.createPost(data).then(
      (res) => {
        setInputPost('')
        if (res) {
          toast({
            title: 'Awesome!',
            description: 'Post Published successfully',
            variant: 'success'
          })
        }
      },
      (error) => {
        if (error) {
          toast({
            title: 'Oups!',
            description: 'Something went wrong',
            variant: 'destructive'
          })
        }
      }
    )
  }

  return (
    <div>
      <h2 className='text-[30px] font-medium text-gray-600'>
        Hello, {user.fullName}
      </h2>
      <h2 className='text-gray-400'>
        What's New with you ? Would you like to share something with community
      </h2>
      <div className='p-3 border rounded-lg mt-2 bg-slate-100'>
        <h2>Create Post</h2>
        <div className='p-4 bg-white rounded-lg'>
          <textarea
            className='outline-none w-full'
            placeholder="What's New"
            value={inputPost}
            onChange={(e) => setInputPost(e.target.value)}
          />
        </div>
        <div className='mt-2 flex justify-between'>
          <div className='flex gap-5'>
            <h2 className='flex gap-2 items-center cursor hover:bg-slate-200 p-2 rouded-lg'>
              <Image className='h-5 w-5' /> Image
            </h2>
            <h2 className='flex gap-2 items-center cursor hover:bg-slate-200 p-2 rouded-lg'>
              <Video className='h-5 w-5' /> Video
            </h2>
          </div>
          <Button
            className='bg-blue-500 rounded-lg gap-2 hover:bg-blue-700 '
            disabled={!inputPost?.length}
            onClick={() => handlePost()}
          >
            <Send className='h-4 w-4' />
            Publish
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WritePost
