import type { NextPage } from 'next'
import Head from 'next/head'

import { Switch, useTheme, Container, Row, Text, Grid, Card, Col, Button, Avatar, Link } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'
import { BiSun as Sun, BiMoon as Moon } from "react-icons/bi";
import { RiChatSmile3Fill } from 'react-icons/ri';
import { MdLiveTv } from 'react-icons/md'

interface Props {
  text: String
}

const MockItem = ({ text }: Props) => {
  return (
      <Card color='primary'>
        <Text h3 css={{ fontWeight: '$semibold', color: '$white' }}>
          {text}
        </Text>
      </Card>
  );
}

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Container style={{ paddingTop: 40, paddingRight: 20 }}>
      <Head>
        <title>City Services</title>
        <meta name="description" content="Next.js + NextUI by @martindevaluado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ textAlign: 'right', marginBottom: 40 }}>
          <Switch
            initialChecked={isDark}
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            size="lg"
            iconOn={<Sun />}  
            iconOff={<Moon />}
            shadow 
          />
        </div>

        <Card color='gradient' style={{ marginBottom: 20 }}>
          <Text h4 css={{ fontWeight: '$semibold', color: '$white' }}>
            Sitio creado por <Link color='warning' href="https://www.twitter.com/martindevaluado">@martindevaluado</Link> en twitch.tv/martindevaluado <MdLiveTv style={{ marginLeft: 8 }} />
          </Text>
        </Card>

        <Card css={{ px: '$4' }}>
          <Text
            h1
            size={50}
            css={{
              textGradient: '40deg, $blue500 30%, $pink500 50%'
            }}
            weight="bold"
          >
            Encuentra
          </Text>
          <Text
            h1
            size={50}
            css={{
              textGradient: '45deg, $purple500 40%, $pink500 100%'
            }}
            weight="bold"
          >
            servicios ahora
          </Text>
          <Text
            h1
            size={50}
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%'
            }}
            weight="bold"
          >
            en tu ciudad <RiChatSmile3Fill />
          </Text>
        </Card>
 
        <Grid.Container gap={2} justify="center" style={{ padding: 40 }}>
          <Grid>
            <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-6.png" zoomed />
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-2.png" zoomed/>
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-1.png" zoomed />
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-4.png" zoomed />
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-5.png" zoomed />
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-7.png" zoomed />
          </Grid>
          <Grid>
              <Avatar css={{ size: "$20" }} src="https://nextui.org/avatars/avatar-8.png" zoomed />
          </Grid>
        </Grid.Container>


        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card cover>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    De 8 a 21 hs
                  </Text>
                  <Text h3 color="white">
                    Gomeria a domicilio
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='/images/Gomeria.png'
                height={340}
                width="100%"
                alt="Gomeria a domicilio"
              />
            </Card>
          </Grid>

          <Grid xs={12} sm={4}>
            <Card cover>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    De 8 a 21 hs
                  </Text>
                  <Text h3 color="white">
                    Gasista
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='/images/Gasista.png'
                height={340}
                width="100%"
                alt="Gasista"
              />
            </Card>
          </Grid>


          <Grid xs={12} sm={4}>
            <Card cover>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    De 8 a 18 hs
                  </Text>
                  <Text h3 color="white">
                    Electricista
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='/images/Electricista.png'
                height={340}
                width="100%"
                alt="Electricista"
              />
            </Card>
          </Grid>


          <Grid xs={12} sm={4}>
            <Card cover>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    SERVICIOS
                  </Text>
                  <Text h3 color="white">
                    Proximamente mas novedades
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='https://nextui.org/images/card-example-5.jpeg'
                height={340}
                width="100%"
                alt="Card image background"
              />
            </Card>
          </Grid>

          <Grid xs={12} sm={5}>
            <Card cover css={{ w: '100%' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    NUEVO
                  </Text>
                  <Text h3 color="white">
                    Camara reflex
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src='https://nextui.org/images/card-example-6.jpeg'
                  height={400}
                  width="100%"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer             
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff',
                  borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1
                }}
                >
                <Row>
                  <Col>
                    <Text color="#000" size={14}>Disponible pronto.</Text>
                    <Text color="#000" size={14}>Recibe notificacion.</Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded color="secondary">
                        <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                          Notificame
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>    
          <Grid xs={12} sm={7}>
            <Card cover css={{ w: '100%', p: 0 }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#9E9E9E"
                  >
                    Bienvenidxs!
                  </Text>
                  <Text h3 color="white">
                    Excelente subtitulo
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src='https://nextui.org/images/card-example-5.jpeg'
                  height={400}
                  width="100%"
                  alt="Relaxing app background"
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#0f1114',
                  borderTop: '$borderWeights$light solid $gray700',
                  bottom: 0,
                  zIndex: 1
                }}
              >
                <Row>
                  <Col>
                    <Row>
                      <Col span={3}>
                        <Card.Image
                          src='https://nextui.org/images/card-example-5.jpeg'
                          style={{ background: 'black' }}
                          height={40}
                          width={40}
                          alt="Breathing app icon"
                        />
                      </Col>
                      <Col>
                        <Text color="#d1d1d1" size={14}>
                          Martin Devaluado
                        </Text>
                        <Text color="#d1d1d1" size={14}>
                          Hecho por @martindevaluado
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }}>
                        <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                          Obtener
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
      </Grid.Container>

      <Card color='gradient' style={{ marginTop: 20 }}>
          <Text h4 css={{ fontWeight: '$semibold', color: '$white' }}>
            Sitio creado por <Link color='warning' href="https://www.twitter.com/martindevaluado">@martindevaluado</Link> en twitch.tv/martindevaluado <MdLiveTv style={{ marginLeft: 8 }} />
          </Text>
        </Card>

      </main>
    </Container>
  )
}

export default Home
