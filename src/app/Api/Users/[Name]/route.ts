import { NextResponse } from "next/server";
import Data from "@/app/Data/EnquiriesData.json";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const user = Data.filter(
		(x) => params.Name.toLowerCase() === x.Name.toLowerCase()
	);

	return NextResponse.json(user);
}
