import { ForgetPasswordContainer } from "@/components/page-modules/auth/containers/forget.container";
import { AuthContainer } from "@/components/container/auth.container";

export function ForgetPassword() {
    return (
        <AuthContainer>
            <ForgetPasswordContainer />
        </AuthContainer>
    )
}