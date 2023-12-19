import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const AuthConfig:AuthOptions = {
    providers: [GoogleProvider({
        clientId: "985578742207-0qp3smghvd1mkjv8k4bpsqksic1t1l0c.apps.googleusercontent.com",
        clientSecret: "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"
    })]
}