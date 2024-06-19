import { NextResponse } from "next/server";
import Data from "@/app/Data/EnquiriesData.json";

export interface UserResponse {
	Name: string;
	Email: string;
	Mobile: string;
	StayLength: string;
	// Revenue: string;
}

export async function GET(): Promise<NextResponse<UserResponse[]>> {
	const user = Data;

	return NextResponse.json(user);
}
