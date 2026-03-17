import { redirect } from "next/navigation";

// Redirects to the enrollment portal subdomain.
// Until enroll.allstarkidsacademyga.com is live, update the URL below
// to the Vercel preview URL of the enrollment portal.
export default function EnrollPage() {
  redirect("https://enroll.allstarkidsacademyga.com");
}
