import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user = await userData
  return {
    title: `${user.name} Page`,
    description: `This is the user page for ${user.name}.`,
  }
}

export default async function Userpage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)
  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading, Asshole!!</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData}/>
      </Suspense>
    </>
  )
}
