import { ResetPasswordContainer } from "@/components/page-modules/auth/containers/reset.container";
import { AuthContainer } from "@/components/container/auth.container";

export function ResetPassword() {
    return <AuthContainer>
        <ResetPasswordContainer />
    </AuthContainer>
}