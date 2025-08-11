import { Metadata } from "next";
import HomeEightMain from "./(homes)/home-8/page"; // ← ganti ke home-8

export const metadata: Metadata = {
  title: "Liko - Portfolio Showcase", // sesuaikan judul
  description: "Modern portfolio dengan efek 3D dan klik untuk detail.",
};

export default function Home() {
  return (
    <>
      <HomeEightMain />
    </>
  );
}