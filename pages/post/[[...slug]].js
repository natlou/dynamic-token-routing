import { useRouter } from 'next/router'
import Header from '../../components/header'
import Button from '../../components/button'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>Slug: {slug.join('/')}</h1>
      <Button />
    </>
  )
}

export default Comment
