import { NextResponse } from "next/server";
import Data from "@/app/Data/EnquiriesData.json";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const user = Data.filter((x) => params.UserId === x.id.toString());

	return NextResponse.json({ user });
}
