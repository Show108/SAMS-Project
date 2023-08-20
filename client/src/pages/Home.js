import { Box, Button, Flex, Grid, GridItem, Heading, IconButton, Container, List, ListItem, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import logo from '../images/logo.png'
import topImage from '../images/image_1.png'
import easy_attendance from '../images/easy_attendance.png'
import real_time from '../images/real_time.png'
import data_analysis from '../images/data_analysis.png'
import check from '../images/check.png'
import line from '../images/line.png'
import secondLogo from '../images/logo_2.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedIn from '../images/linkedIn.svg'
import { useEffect, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import '@fontsource/lato/400.css'
import '@fontsource/prompt/900.css'
import '@fontsource/raleway/500.css'
import '@fontsource/roboto/300.css'
export const Home = () =>{
  useEffect(() =>{
    document.body.classList.add('bg-color')
  }, [])

  const componentButton={
    bgColor: '#213655',
    borderRadius: '0',
    color: 'white',
    ':hover':{
        color: 'white',
        bgColor:'#f2575d'
    }
}

  const [ display, setDisplay] = useState('none')

  const firstRegister ={
    bgColor: '#213655',
    color: 'white',
    ':hover':{
        bgColor:'#f2575d'
    },
    borderRadius: '0'
  }

  const secondRegister ={
      color: '#213655',
      border: '3px solid #213655 ',
      bgColor: 'transparent',
      borderRadius: '0',
      ':hover':{
        bgColor: '#f2575d',
        color: 'white',
        border: '3px solid #f2575d '
    }
  }


  return <div>
          <Flex ml={{base:'20px', md:'30px'}} mt={'20px'}>
            <IconButton 
                aria-label="Open Menu"
                size={'lg'}
                pl={2}
                icon={< HamburgerIcon />}
                display={{base:'flex', md:'flex', lg:'none', xl:'none'}}
                onClick={() => setDisplay('flex')}
                variant={'ghost'}
                mt={'-10px'}

            />
            
            <Box mx={{base:'3%', md:'3%', lg:'5%', xl: '5%'}} w={'100%'}>
              <img src={logo} alt="logo"  />
            </Box>
            <Spacer />
            <Flex display={{base:'none', md:'none', lg:'flex', xl:'flex'}}>
              <NavLink to={'/about'}>
                <Button as={'a'}
                variant={'ghost'}
                aria-label="About"
                w={'100%'}
                mr={'50px'}
                >ABOUT</Button>
              </NavLink>
              <NavLink to={'/contact'}>
                <Button as={'a'}
                variant={'ghost'}
                aria-label="Contact"
                w={'100%'}
                mr={'50px'}
                >CONTACT</Button>
              </NavLink>
              <NavLink to={'/price'}>
                <Button as={'a'}
                variant={'ghost'}
                aria-label="Pricing"
                w={'100%'}
                >PRICING</Button>
              </NavLink>

            </Flex>
            <Spacer/>
            <Button sx={componentButton} mr={{base: '30px',md:'50px', lg: '70px', xl:'100px'}} ml={{base: '50px',md:'0px', lg: '30px', xl:'100px'}} px={{base: '30px',md:'30px', lg: '40px', xl: '40px'}}>
              <NavLink to={'/login'}>Login</NavLink>
            </Button>
            <Flex 
              w={'100vw'}
              zIndex={20}
              h={'100vh'}
              bgColor={'gray.50'}
              pos={'fixed'}
              top={'0'}
              left={'0'}
              overflow={'auto'}
              flexDir={'column'}
              display={display}
            >
              <Flex justify={'flex-end'}>
                <IconButton 
                  mt={2}
                  mr={2}
                  aria-label="close Menu"
                  size={'lg'}
                  icon={
                    <CloseIcon />
                  }
                  variant={'ghost'}
                  onClick={() => setDisplay('none')}
                />
              </Flex>
                <Flex flexDir={'column'}
                    align={'center'} 
                    my={'100px'}     
                >
                    <NavLink to={'/about'} onClick={() => setDisplay('none')}>
                        <Button as={'a'}
                        variant={'ghost'}
                        aria-label="About"
                        w={'100%'}
                        mb={'30px'}
                        >ABOUT</Button>
                      </NavLink>
                      <NavLink to={'/contact'} onClick={() => setDisplay('none')}>
                        <Button as={'a'}
                        variant={'ghost'}
                        aria-label="Contact"
                        w={'100%'}
                        mb={'30px'}
                        >CONTACT</Button>
                      </NavLink>
                      <NavLink to={'/price'} onClick={() => setDisplay('none')}>
                        <Button
                        variant={'ghost'}
                        aria-label="Pricing"
                        w={'100%'}
                        >
                          PRICING
                        </Button>
                      </NavLink>
                </Flex>
            </Flex>
          </Flex>
          <SimpleGrid columns={{base:'1',lg:'2', xl:'2' }} overflowX={'hidden'}>
            <Container my={{base:'30px',md:'30px',lg:'30px',xl:'30px'}} px={{base:'35px',xl:'50px'}} >
                <Heading color={'#213655'} pb={'15px'} fontSize={{base:'5xl',md:'5xl',lg:'5xl',xl:'5xl'}}>
                  Get the best way  of tracking student attendance with S.A.M.S
                </Heading>
                <Text pb={'20px'}> Say goodbye to traditional paper filling and hello 
                  to a smart, efficient and accurate solution that transforms your classroom experience. Empower Educators, Engage Students.
                  </Text>
              <Flex gap={5} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}}>
                  <Button sx={firstRegister}>
                      <NavLink to={'register-institution'}>Register your Institution</NavLink>
                    </Button>
                    <Button sx={secondRegister}>
                      <NavLink to={'signin'}>Signup as Tutor/Student</NavLink>
                    </Button>
              </Flex>
            </Container>
            <Box w={'auto'} ml={'auto'} mr={'auto'}>
              <img src={topImage} alt="imageOne" style={{height:'auto', width:'100%', maxWidth:'400px'}} />
            </Box>
          </SimpleGrid>
           <Box>
             <img src={line} alt="line" width={'100%'} />
           </Box>
          <Heading textAlign={'center'} pb={'auto'} py={'70px'} color={'#213655'} fontFamily={'mono'} fontSize={'4xl'}>Why use S.A.M.S?</Heading>
            
            <SimpleGrid spacing={20} columns={{base:'1', md:'1', lg:'1', xl:'3'}}  overflowX={'hidden'}>
              <Flex flexDir={{base:'column', md:'column', lg:'row', xl:'column'}} ml={'auto'} mr={'auto'}>
                <Box w={'400px'} pb={'30px'}>
                  <img src={easy_attendance} alt="real-time" />
                </Box>
                <Container mt={{base:'0px', md:'0px', lg:'60px', xl:'0px'}}>
                  <Heading fontFamily={'solo'} pb={'10px'}>Effortless Attendance <br /> Submission</Heading>
                  <Text fontSize={{base:'13px',md:'16px', lg:'16px',xl:'16px'}}>
                    Never worry about attendance again. <br /> Lecturers can easily manage
                    and students can <br /> quickly submit their attendance with a few clicks.
                  </Text>
                </Container>
                </Flex>


                <Flex flexDir={{base:'column', md:'column', lg:'row', xl:'column'}} ml={'auto'} mr={'auto'}>
                  <Box w={'400px'} pb={'30px'}>
                    <img src={real_time} alt="real-time" />
                  </Box>
                  <Container mt={{base:'0px', md:'0px', lg:'70px', xl:'0px'}}>
                    <Heading fontFamily={'solo'}  pb={'10px'}>Real-Time Verification</Heading>
                    <Text fontSize={{base:'13px', md:'16px', lg:'16px',xl:'16px'}}>
                      Say farewell to inaccurate and unreliable <br />means  of taking attendance.
                      Our cutting-edge<br /> geolocation technology  and proximity <br />verification ensure only
                      students physically <br />present in your class can submit attendance.
                    </Text>
                  </Container>
                </Flex>

                <Flex flexDir={{base:'column', md:'column', lg:'row', xl:'column'}} ml={'auto'} mr={'auto'}>
                  <Box w={'400px'} pb={'30px'}>
                    <img src={data_analysis} alt="real-time" />
                  </Box>
                  <Container mt={{base:'0px', md:'0px', lg:'100px', xl:'0px'}}>
                    <Heading fontFamily={'solo'} pb={'10px'}>Insights and Reporting</Heading>
                    <Text fontSize={{base:'13px', md:'16px', lg:'16px',xl:'16px'}}>
                      Gain valuable insights into attendance <br /> trends and  patterns
                      and make data-driven <br /> decisions to enhance student engagement <br /> and 
                      classroom dynamics.
                    </Text>
                  </Container>
              </Flex>
            </SimpleGrid>
            <Flex justify={'center'} pb={{base:'0px',lg:'40px',xl:'40px'}}>
              <NavLink to={'/about'}>
                <Button sx={firstRegister} px={'60px'} my={'60px'}>
                  LEARN MORE
                </Button>
              </NavLink>
            </Flex>
            <SimpleGrid columns={{base:'1', md:'1', lg:'2', xl:'2'}} spacing={30} pb={'40px'} my={{base:'0px',lg:'70px',xl:'70px'}} overflowX={'hidden'} >
                  <Container mt={'0px'} ml={{base:'auto', md:'auto', lg:'50px', xl:'200px'}} mr={{base:'auto'}} >
                    <Heading as={'h3'} ml={'30px'} fontFamily={'mono'} mt={{base:'0px',lg:'40px',xl:'60px'}}>
                      Experience the future of attendance tracking.<br/>
                      Join hundreds of educators who <br/>are already making attendance <br/>
                      management more <br/>accurate, efficient and engaging.
                    </Heading>
                  </Container>
                  <Box w={{base:'370px', md:'450px',lg:'450px',xl:'450px'}}  mr={'auto'} ml={{base:'30px' , md:'auto',lg:'auto',xl:'auto'}} >
                    <img src={check} alt="join"/>
                  </Box>
            </SimpleGrid>
            <Grid overflowX='hidden' templateColumns={'repeat(6, 1fr)'} bgColor={'#213655'} p={'30px'} pt={{base:'0px', lg:'-100px', xl:'-40px'}}>
                      <GridItem colSpan={{base:'6', md:'6', lg:'2', xl:'2'}} ml={{base:'auto'}} mr={{base:'auto'}}>
                          <Box  ml={{base:'auto', md:'20px', lg:'0px', xl:'0px'}} mr={{base:'auto', md:'20px', lg:'0px', xl:'0px'}} mt={{base:'10px', lg:'100px'}}>
                              <Box py={'15px'} ml={{base:'auto'}} mr={{base:'auto'}}>
                                <img src={secondLogo} alt="second-logo" />
                              </Box>
                              <Text color={'white'}>
                                Use S.A.M.S to get accurate, reliable, efficient, quick <br /> and make taking and tracking attendance <br /> easy for  both lectureres and students
                              </Text>
                          </Box>
                      </GridItem>
                      <GridItem colSpan={{base:'6', md:'6', lg:'4', xl:'2'}} ml={{base:'auto'}} mr={{base:'auto'}} pt={{base:'30px', lg:'90px'}} >
                          <Flex gap={{base:10, lg:20 ,xl:20}} ml={{base:'auto', md:'auto', lg:'0px', xl:'0px'}} mr={{base:'auto', md:'auto', lg:'0px', xl:'0px'}}>
                            <List color={'white'} spacing={4} mr={{base:'0px', md:'0px',lg:'0px',xl:'0px'}}>
                                <ListItem fontFamily={'heading'}>Products</ListItem>
                                <ListItem><NavLink to={'/'}>Overview</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Features</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Tutorial</NavLink></ListItem>
                                <ListItem><NavLink to={'/price'}>Pricing</NavLink></ListItem>
                            </List>


                            <List color={'white'} spacing={4} mr={{base:'0px', md:'0px',lg:'0px',xl:'0px'}}>
                                <ListItem fontFamily={'heading'}>Company</ListItem>
                                <ListItem><NavLink to={'/about'}>About Us</NavLink></ListItem>
                                <ListItem><NavLink to={'/contact'}>Contact</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>FAQ</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Partnerships</NavLink></ListItem>
                            </List>


                            <List color={'white'} spacing={4}>
                                <ListItem fontFamily={'heading'}>Legal</ListItem>
                                <ListItem><NavLink to={'/'}>Terms</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Privacy</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Support</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>License</NavLink></ListItem>
                            </List>
                        </Flex>
                    
                      </GridItem>
                      <GridItem colSpan={{base:'6', md:'6', lg:'4', xl:'2'}}  ml={{base:'auto'}} mr={{base:'auto', lg:'-100px'}}>
                          <Box mr={{base:'auto', md:'auto', lg:'0px', xl:'150px'}}ml={{base:'auto', md:'auto', lg:'0px', xl:'0px'}}mt={{base:'60px', xl:'120px'}}>
                            <Flex flexDir={'column'} align={'center'}>
                                <Text color={'white'} pb={'10px'}>STAY CONNECTED</Text>
                                <Flex gap={3} pb={'0px'}>
                                  <Link to={'#'}><img src={facebook} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                  <Link to={'#'}><img src={twitter} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                  <Link to={'#'}><img src={linkedIn} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                </Flex>
                            </Flex>
                            <Text color={'gray.400'}>Copyright &copy; 2023. All rights reserved</Text>
                          </Box>
                      </GridItem>
                    
            </Grid>
            
    <Outlet />
  </div>
}