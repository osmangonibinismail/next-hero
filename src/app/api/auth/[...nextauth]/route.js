import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text", required: true, placeholder: "Your Email"},
                password: {label: "Password", type: "password", required: true, placeholder: "Enter Password"},
                userName: {label: "name", type: "text", required: true, placeholder: "Your Name"}
            },
            async authorize (credentials){
                if (!credentials){
                    return null;
                }
                return true;
            }
        })
    ]
})

export { handler as GET, handler as POST }