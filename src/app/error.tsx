"use client";

import Link from "next/link";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">エラーが発生しました</h1>
      <p className="text-lg">{error.message}</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        ホームに戻る
      </Link>
    </div>
  );
};

export default Error;
