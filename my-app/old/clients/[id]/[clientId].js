import { useRouter } from "next/router";

function SelectedClientProjectPage(){
    const router = useRouter();
    console.log(router);
    console.log(router.pathname);
    console.log(router.query);
return (
    <h1>The project page for a specific project</h1>
 );
}

export default SelectedClientProjectPage;