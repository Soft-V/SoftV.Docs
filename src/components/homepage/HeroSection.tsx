import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import Waves from './Waves';

 

  export default function HeroSection() {
    return (
      <>
        <section className="relative no-underline-links px-4 pt-10 pb-10 lg:py-0">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Waves />
          </div>
          <div className="relative z-5 flex flex-col items-center justify-between py-32">
            <h2 className="mb-4 text-center font-jakarta text-5xl font-bold text-white">
              <Translate
                id="theme.heroSection.readTheDocs">
                Learn together with Soft V!
              </Translate>
            </h2>
            <p className="max-w-xl text-center text-white mt-5">
              <Translate
                id="theme.heroSection.whatProvides">
                Here You can find detailed documentation about every Soft V product. 
              </Translate>             
            </p>
            <div>
              <Link
                className="button button--secondary button--lg "
                to="/docs/welcome">
                <Translate
                  id="theme.heroSection.setStarted">
                  Get started!
                </Translate>
              </Link>
            </div>
          </div>
        </section>
    
      </>
    );
  }