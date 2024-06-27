import { NextResponse } from "next/server";
import Data from "@/app/Data/EnquiriesData.json";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const user = Data.filter(
		(x) =>
			x.Name.toLowerCase().includes(params.Name.toLowerCase()) ||
			x.Email.toLowerCase().includes(params.Name.toLowerCase())
	);

	return NextResponse.json(user);
}
