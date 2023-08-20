import { Box, Button, Container, Flex } from "@chakra-ui/react"
import student from '../images/student.png'
import lecturer from '../images/tutor.png'
import { NavLink, Outlet } from "react-router-dom"
import { useEffect } from "react"

export default function StudentSignin() {

  useEffect(() =>{
    document.body.classList.add('bg-color')
}, [])
  return (
    <div>
       <Flex my={'100px'}>
       <Container>
            <NavLink to={'/student'}>
              <Box><img src={student} alt="student"/></Box>
              <Button fontSize={'4xl'}>STUDENT</Button>
            </NavLink>
        </Container>

        
        <Container>
            <NavLink to={'/lecturer'}>
              <Box><img src={lecturer} alt="lecturer"/></Box>
              <Button fontSize={'4xl'}>LECTURER</Button>
            </NavLink>
        </Container>
       </Flex>
        <Outlet />
    </div>
  )
}