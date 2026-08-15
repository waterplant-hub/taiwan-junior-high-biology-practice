import type { Metadata } from "next";
import BiologyPracticeApp from "./BiologyPracticeApp";

export const metadata: Metadata = {
  title: "生物考古題｜國中會考與基測練習",
  description: "依章節或年度練習國中會考與基測生物題，查看官方答案、官方答對率、錯題與 AI 詳解。",
};

export default function Home() {
  return <BiologyPracticeApp />;
}
