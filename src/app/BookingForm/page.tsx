import { ChakraProvider } from "@chakra-ui/react";
import { BnBForm } from "../Components/Form/Form";

function BookingForm() {
	return (
		<ChakraProvider>
			<BnBForm></BnBForm>
		</ChakraProvider>
	);
}

export default BookingForm;
