import type { Metadata } from "next";
import Portfolio from "../../components/portfolio/Portfolio";

export const metadata: Metadata = {
  title: "Sahil Saroj | Portfolio",
  description: "Web developer and automation builder.",
};

export default function Page() {
  return <Portfolio />;
}
