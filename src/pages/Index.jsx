import { Container, Text, VStack, HStack, Box, Button, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Flex justifyContent="flex-end">
        <Button colorScheme="red" mb={4}>Close</Button>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} bg="white">
        <VStack spacing={4} align="start">
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Eingegangen_am:</Text>
              <Text color="gray.700">2024-06-11T05:42:51+00:00</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">Kostenstelle:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Konto:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">VB:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Ev/Vp:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">wer_geprüft:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Belegtext:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">wer_bezahlt:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Kommentar:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">Status:</Text>
              <Text color="gray.700">Empfangen</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Fällig_am:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">Amount:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Gebucht:</Text>
              <Text color="gray.700">Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="blue.600">Sender:</Text>
              <Text color="gray.700">Finance, finance@wph.onl</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold" color="blue.600">Skonto:</Text>
              <Text color="gray.700">No</Text>
            </Box>
          </HStack>
          <Box w="full">
            <Text fontWeight="bold" color="blue.600">Email_body:</Text>
            <Text color="gray.700">
              Sehr geehrte Damen und Herren, unsere Leistung wurde wie vereinbart erbracht. Wahrscheinlich ist es Ihrer Aufmerksamkeit entgangen, dass die dazugehörige Rechnung [R2002880] zur Zahlung fällig ist. Zahlungseingänge bis 10.06.2024 sind berücksichtigt. Wir bitten daher um schnellstmögliche Überweisung des fälligen Betrages. Falls dies bereits geschehen ist, betrachten Sie dieses Schreiben bitte als gegenstandlos. Fragen beantworten wir Ihnen gerne per Mail unter <mailto:> Rechnungsnummer: 2002880 Rechnungsdatum: 02.04.2024 Fälligkeitsdatum: 02.04.2024 Inhalt: Abrechnung Managed Service Leistungen 01.04.24-30.06.24 Rechnungsbetrag: € 1.713,60 OFFEN: € 1.713,60
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;