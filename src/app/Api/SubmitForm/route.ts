import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

export async function POST(request: Request): Promise<NextResponse<{}>> {
	const enq = await request.json();
	const pathToFile = path.resolve(
		process.cwd(),
		"src/app/Data/EnquiriesData.json"
	);
	const fileContent = fs.readFileSync(pathToFile, {
		encoding: "utf-8",
	});
	const fileContentObj = JSON.parse(fileContent);
	fileContentObj.push(enq);
	fs.writeFileSync(pathToFile, JSON.stringify(fileContentObj));
	return NextResponse.json({});
}
