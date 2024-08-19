import { NextRequest, NextResponse } from "next/server";

export const GET = (
  requeste: NextRequest,
  { params }: { params: { testId: string } }
) => {
  return NextResponse.json({
    hello: "World",
  });
};
