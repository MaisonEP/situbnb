import { NextResponse } from "next/server";
import Data from "@/app/Data/BnBData.json";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const bnb = Data.filter((x) =>
		x.Location.toLowerCase().includes(params.location.toLowerCase())
	);
	console.log(params.location);
	return NextResponse.json(bnb);
}
