import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/LoginComponent";
import SignOutPage from "@/components/SignOutComponent";
import { auth } from "@/lib/auth";

export default async function Home(){

    const session = await auth();
    const isAuthenticated = !!session?.user
    
    return(
        <SessionWrapper>
            {isAuthenticated?<SignOutPage /> :<SignInPage />}
        </SessionWrapper>
    )
}