import { Inter } from "next/font/google";
import KeyboardEvents from "~/experiments/keyboard-events";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <KeyboardEvents />
    </div>
  );
}
