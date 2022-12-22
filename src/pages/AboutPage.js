import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title={'about'} />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="staged furniture" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            dicta totam? Officia, eos reprehenderit cum aut vel facilis, dolore
            adipisci quo veritatis non laudantium. Saepe cupiditate accusantium
            sequi ad fugit reprehenderit, doloribus rerum numquam ducimus
            cumque. Repudiandae aliquid, nisi reiciendis, laudantium ut tempore
            minus officiis libero, aperiam accusantium numquam cum quibusdam.
            Aut temporibus natus repudiandae totam nemo accusantium odio veniam!
            Consectetur natus nisi dicta ipsam, consequuntur libero quod,
            tenetur nemo sed, magnam quam totam dolores!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
