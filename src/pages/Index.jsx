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
              <Text fontWeight="bold">Eingegangen_am:</Text>
              <Text>2024-06-11T05:42:51+00:00</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Kostenstelle:</Text>
              <Text>Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Konto:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">VB:</Text>
              <Text>Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Ev/Vp:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">wer_geprüft:</Text>
              <Text>Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Belegtext:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">wer_bezahlt:</Text>
              <Text>Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Kommentar:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Status:</Text>
              <Text>Empfangen</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Fällig_am:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Amount:</Text>
              <Text>Leer</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Gebucht:</Text>
              <Text>Leer</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Sender:</Text>
              <Text>Finance, finance@wph.onl</Text>
            </Box>
          </HStack>
          <HStack spacing={10} w="full">
            <Box>
              <Text fontWeight="bold">Skonto:</Text>
              <Text>No</Text>
            </Box>
          </HStack>
          <Box w="full">
            <Text fontWeight="bold">Email_body:</Text>
            <Text>
              Sehr geehrte Damen und Herren, unsere Leistung wurde wie vereinbart erbracht. Wahrscheinlich ist es Ihrer Aufmerksamkeit entgangen, dass die dazugehörige Rechnung [R2002880] zur Zahlung fällig ist. Zahlungseingänge bis 10.06.2024 sind berücksichtigt. Wir bitten daher um schnellstmögliche Überweisung des fälligen Betrages. Falls dies bereits geschehen ist, betrachten Sie dieses Schreiben bitte als gegenstandlos. Fragen beantworten wir Ihnen gerne per Mail unter <mailto:> Rechnungsnummer: 2002880 Rechnungsdatum: 02.04.2024 Fälligkeitsdatum: 02.04.2024 Inhalt: Abrechnung Managed Service Leistungen 01.04.24-30.06.24 Rechnungsbetrag: € 1.713,60 OFFEN: € 1.713,60
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;