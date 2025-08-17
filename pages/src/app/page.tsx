import { Metadata } from "next";
import HomeEightMain from "./(homes)/home-8/page";

export const metadata: Metadata = {
  title: "Matt's B'day <3", // sesuaikan judul
  description: "Happy Birthday Matt! 🎉", // sesuaikan deskripsi
};

export default function Home() {
  return (
    <>
      <HomeEightMain />
    </>
  );
}