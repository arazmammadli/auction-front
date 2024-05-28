import { AuthContainer } from "@/components/container/auth.container";
import { VerifyPhoneContainer } from './containers/verify-phone.container';
import { ClientOnly } from '@/components/layout/client-only';

export function VerifyPhone() {
    return (
      <ClientOnly>
          <AuthContainer>
            <VerifyPhoneContainer />
        </AuthContainer>
      </ClientOnly>
    )
}