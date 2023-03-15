import { Box, Text } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
    return (
        <HelmetProvider>
            <Box
                backgroundColor="#7B68EE"
                paddingTop="20px"
                backgroundImage="linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    )"
                height="80px"
            >
                <Helmet>
                    <title>Save Contacts</title>
                </Helmet>
                <Text
                    height="100%"
                    textAlign="center"
                    margin="15px"
                    fontWeight="bold"
                    color="#fff"
                    fontSize="24px"
                >
                    <div>You have to login first!</div>
                </Text>
            </Box>
        </HelmetProvider>
    );
}