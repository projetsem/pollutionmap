
import { useState } from "react";
import React from 'react';
import slide1 from 'assets/img/slides/1.jpg'


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators
  

} from "reactstrap";


// core components

import Header from "components/Headers/Header.js";

const Presentation = () => {
  // State for Active index
	const [activeIndex, setActiveIndex] = React.useState(0);

	// State for Animation
	const [animating, setAnimating] = React.useState(false);

	// Sample items for Carousel
	const items = [
		{
			caption: 'Sample Caption One',
            src: 'https://images.unsplash.com/photo-1657571484120-7c5624ce2c47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=919&q=80',
			altText: 'Slide One'
		},
		{
			caption: 'Sample Caption Two',
            src:'https://images.unsplash.com/photo-1605310115638-54c4a4173238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
			altText: 'Slide Two'
		}
	];

	// Items array length
	const itemLength = items.length - 1

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ?
			itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ?
			0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

    const carouselItemData = items.map((item) => {
		return (
			<CarouselItem
				key={item.src}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<img src={item.src} alt={item.altText} />
			</CarouselItem>
		);
	});

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Presentation de la portail</h3>
              </CardHeader>
              <CardBody>
                    <div style={{display: 'block', margin:20 }} >
                    <p>Bienvenue à notre startup spécialisée dans la cartographie et la localisation des zones de gaz grâce à notre technologie de pointe de cartographie des taux de gaz. Nous avons créé une solution innovante qui permet de cartographier les niveaux de gaz dans une zone donnée et de les afficher sur une carte. Cette carte peut être utilisée par les professionnels de l'industrie du gaz, les autorités gouvernementales, les entreprises et les particuliers pour surveiller les niveaux de gaz dans leur environnement et prendre des mesures préventives en cas de besoin.</p>
                    <Carousel previous={previousButton} next={nextButton}
                        activeIndex={activeIndex} >
                        <CarouselIndicators items={items}
                            activeIndex={activeIndex}
                            onClickHandler={(newIndex) => {
                                if (animating) return;
                                setActiveIndex(newIndex);
                            }} />
                        {carouselItemData}
                        <CarouselControl directionText="Prev"
                            direction="prev" onClickHandler={previousButton} />
                        <CarouselControl directionText="Next"
                            direction="next" onClickHandler={nextButton} />
                    </Carousel >
                    <p>Notre solution de cartographie des taux de gaz est fiable, précise et facile à utiliser. Nous sommes convaincus que notre technologie aidera les entreprises et les particuliers à protéger leur environnement et à prévenir les risques liés aux gaz. Nous sommes impatients de travailler avec vous pour cartographier et localiser les zones de gaz dans votre région.</p>
                </div >
                    
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Presentation;
