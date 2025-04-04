import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
// import Mailgun from "next-auth/providers/mailgun";
export default {
  providers: [GitHub /*Mailgun*/],
} satisfies NextAuthConfig;
