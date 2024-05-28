import { VerifyEmailContainer } from "@/components/page-modules/auth/containers/verify-email.container";
import { AuthContainer } from "@/components/container/auth.container";

export function VerifyEmail() {
    return (
        <AuthContainer>
            <VerifyEmailContainer />
        </AuthContainer>
    )
}