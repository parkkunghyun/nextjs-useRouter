import { useRouter } from "next/router";
import Header from "../../../components/Header";

const Comment = () => {
    const router = useRouter()
    const {id,comment} = router.query;

    return (
        <>
            <Header/>
            <h1>Post: {id}</h1>
            <h2>Comment: {comment}</h2>
        </>
    )
}
export default Comment