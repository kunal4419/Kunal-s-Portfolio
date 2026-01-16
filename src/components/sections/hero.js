import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(32px, 6vw, 64px);
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const typedRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !isMounted) {
      return undefined;
    }

    let typedInstance;

    const initTyped = async () => {
      const Typed = (await import('typed.js')).default;

      if (typedRef.current) {
        typedInstance = new Typed(typedRef.current, {
          strings: [
            'I build scalable web applications.',
            'I build full-stack products.',
            'I build user-centric experiences.',
            'I build modern web and mobile apps.',
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
        });
      }
    };

    initTyped();

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, [prefersReducedMotion, isMounted]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Kunal Patel.</h2>;
  const three = prefersReducedMotion ? (
    <h3 className="big-heading typed-heading">I build things for the web.</h3>
  ) : (
    <h3 className="big-heading typed-heading" aria-live="polite">
      <span ref={typedRef} />
    </h3>
  );
  const four = (
    <>
      <p>
        I’m a computer science student and aspiring {' '}
        <a href="#about" rel="noreferrer">
          software developer
        </a>{' '}with a strong interest in full-stack web development and cloud technologies. I focus on building scalable, user-centric applications and continuously improving my problem-solving and engineering skills through hands-on projects.
      </p>
    </>
  );
  const five = (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <a
        className="email-link"
        href="mailto:patelkunal4419@gmail.com">
        Get In Touch
      </a>
      <a
        className="email-link"
        href="/Kunal_Patel_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer">
        Resume
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
