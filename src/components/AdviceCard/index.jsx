import patternDivicerMobile from "../../assets/pattern-divider-mobile.svg";
import iconDice from "../../assets/icon-dice.svg";

import { AiOutlineMenu } from "react-icons/ai";

import { Card, Button } from "./styles";

import { useState, useEffect } from "react";

import api from "../../services/api";

import { useDisclosure } from "@chakra-ui/react";

import { useRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function AdviceCard() {
  const [randonAdvice, setRandonAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    api
      .get()
      .then((resp) => setRandonAdvice(resp.data))
      .then((_) => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .get()
      .then((resp) => setRandonAdvice(resp.data))
      .then((_) => setIsLoading(false));
  }, []);

  
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <AiOutlineMenu />
      </Button>
      <Card>
        <div>
          <h3>ADVICE #{randonAdvice?.slip?.id}</h3>
          <p>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              ` "${randonAdvice?.slip?.advice}" `
            )}
          </p>
          <img
            src={patternDivicerMobile}
            alt="Fine line in gray color in horizontal orientation."
          />
        </div>
        <button onClick={() => handleClick()}>
          <img src={iconDice} alt="button icon" />
        </button>
      </Card>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay/>
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerBody>
            <input placeholder='Find an advice by number 001 - 224' />
          </DrawerBody>

          <DrawerFooter>
            <Button color={"var(--secondary-color)"} variant='outline' mr={3} onClick={onClose}>
              Search
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AdviceCard;
