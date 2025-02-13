import type { Route } from "./+types/landing.ts";
import { LandingPage } from "~/pages/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page 1 " },
    { name: "description", content: "This is the first page" },
  ];
}

export default function landing() {
  return <LandingPage />;
}
