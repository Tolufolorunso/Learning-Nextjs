import { useRouter } from "next/router";

function SelectedClientProjectPage(){
    const router = useRouter();
    console.log(router);
    console.log(router.pathname);
    console.log(router.query);
return (
    <h1>The blog</h1>
 );
}

export default SelectedClientProjectPage;