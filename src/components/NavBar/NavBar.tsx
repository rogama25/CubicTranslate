import {ReactNode} from "react";
import {Flex, useColorModeValue} from "@chakra-ui/react";

export type NavBarProps = {
  children: ReactNode;
};

export function NavBar({children}: NavBarProps) {
  const bgColor = useColorModeValue("gray.200", "gray.600");
  return (
    <Flex as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          h={[12,20]}
          px={8}
          py={2}
          bgColor={bgColor}
    >
      {children}
    </Flex>
  );
}
