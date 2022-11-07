import {useRouter} from 'next/router'
import Link from "next/link"
import Header from '../../../components/Header'

const Post = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <>
            <Header></Header>
            <h1>Post: {id}</h1>
            <ul>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
                        first Comment
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
                        second Comment
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Post