import {ReactNode} from "react";
import {Flex} from "@chakra-ui/react";

export default function NavBar({children}: { children: ReactNode }) {
  return (
    <Flex as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          h={24}
          px={8}
          py={2}>
      {children}
    </Flex>
  )
}
