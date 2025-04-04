import { signIn } from "@/auth";

export default function MailgunSignin() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("mailgun", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Mailgun</button>
    </form>
  );
}
