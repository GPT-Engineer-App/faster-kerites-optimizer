import React from "react";
import { Box, Heading, Text, Image, Flex, Button, Grid, Link } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Flex direction={["column", "row"]} align="center" justify="space-between" p={8} bg="gray.100">
        <Box mb={[8, 0]}>
          <Heading as="h1" size="2xl" mb={4}>
            Árvai Kerítés
          </Heading>
          <Text fontSize="xl" mb={8}>
            Minőségi kerítések készítése és telepítése
          </Text>
          <Button colorScheme="blue" size="lg" leftIcon={<FaPhone />}>
            Hívjon most!
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1592016871138-88a6e4fe3701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW5jZSUyMGluc3RhbGxhdGlvbnxlbnwwfHx8fDE3MTE5OTE0NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kerítés telepítés" maxW="500px" />
      </Flex>

      {/* Services */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8}>
          Szolgáltatásaink
        </Heading>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1551584284-d3f7b68c8bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmZW5jZXxlbnwwfHx8fDE3MTE5OTA3MzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fa kerítés" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Fa kerítések
            </Heading>
            <Text>Tartós és esztétikus fa kerítések széles választéka</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1517265598349-76511a2fb389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZlbmNlfGVufDB8fHx8MTcxMTk5MDczMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Fém kerítés" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Fém kerítések
            </Heading>
            <Text>Masszív és biztonságos fém kerítések minden igényre</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/28/see-through.JPG?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW5jZSUyMGluc3RhbGxhdGlvbiUyMHNlcnZpY2V8ZW58MHx8fHwxNzExOTkxNDYxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kerítés telepítés" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Telepítés
            </Heading>
            <Text>Szakszerű kerítés telepítés az ország egész területén</Text>
          </Box>
        </Grid>
      </Box>

      {/* About us */}
      <Box p={8} bg="gray.100">
        <Flex direction={["column", "row"]} align="center">
          <Image src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2YlMjBmZW5jZSUyMGluc3RhbGxlcnN8ZW58MHx8fHwxNzExOTkxNDYxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Csapatunk" maxW="500px" mb={[8, 0]} mr={[0, 8]} />
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Rólunk
            </Heading>
            <Text fontSize="lg" mb={8}>
              Az Árvai Kerítés több mint 20 éve foglalkozik minőségi kerítések gyártásával és telepítésével. Szakképzett csapatunk az ország egész területén vállalja kerítések kivitelezését, legyen szó családi házakról, ipari létesítményekről vagy akár állattartó telepekről.
            </Text>
            <Link href="/rolunk">
              <Button colorScheme="blue">Tudjon meg többet</Button>
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* Contact */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8}>
          Lépjen velünk kapcsolatba!
        </Heading>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Telefonszám
            </Heading>
            <Link href="tel:+36301234567">+36 30 123 4567</Link>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Email
            </Heading>
            <Link href="mailto:info@arvaikerites.hu">info@arvaikerites.hu</Link>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Cím
            </Heading>
            <Text>
              1234 Budapest
              <br />
              Példa utca 1.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
