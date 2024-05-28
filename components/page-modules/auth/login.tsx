import { LoginContainer } from "@/components/page-modules/auth/containers/login.container";
import { AuthContainer} from "@/components/container/auth.container";

export function Login() {
    return (
        <AuthContainer>
            <LoginContainer />
        </AuthContainer>
    )
}