import {ReactNode} from "react";
import {Flex} from "@chakra-ui/react";

export type NavBarProps = {
  children: ReactNode;
};

export function NavBar({children}: NavBarProps) {
  return (
    <Flex as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          h={20}
          px={8}
          py={2}
          bgColor="gray.200"
    >
      {children}
    </Flex>
  );
}
