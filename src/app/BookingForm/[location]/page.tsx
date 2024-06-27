import { ChakraProvider } from "@chakra-ui/react";
import { BnBForm } from "@/app/Components/Form/Form";

function BookingForm() {
	return (
		<ChakraProvider>
			<BnBForm></BnBForm>
		</ChakraProvider>
	);
}

export default BookingForm;
