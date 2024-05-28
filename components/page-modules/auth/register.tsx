import { RegisterContainer } from "@/components/page-modules/auth/containers/register.container";
import { AuthContainer } from "@/components/container/auth.container";

export function Register() {
    return <AuthContainer>
        <RegisterContainer />
    </AuthContainer>
}