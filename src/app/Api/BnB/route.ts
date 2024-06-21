import BnBData from "../../Data/BnBData.json";
import { NextResponse } from "next/server";

export interface BnbDataResponse {
	Location: string;
	Images: string[];
}

export async function GET(): Promise<NextResponse<BnbDataResponse[]>> {
	const bnbData = BnBData;
	return NextResponse.json(bnbData);
}
