import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth";
import {authOption} from "../api/auth/[...nextauth]"

export default async function Nav() {
  <nav className="flex justify-between items-center py-8">
    <Link href={"/"}>
      <h1 className="font-bold text-lg">Send it.</h1>
    </Link>
    <ul className="flex items-center gap-6">
      <Login />
    </ul>
  </nav>;
}
