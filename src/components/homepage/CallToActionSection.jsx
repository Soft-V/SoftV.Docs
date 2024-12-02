import React from "react";
import Translate, {translate} from '@docusaurus/Translate';
import Waves from './Waves'; // Adjust the import path as necessary

const Cta = () => {
  return (
    <>
      <section className="py-10 lg:py-[20px] mx-auto max-w-7xl">
        <div className="container mx-auto relative">
          <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-r py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-2/3">
                <h2 className="block mb-4 text-base font-medium text-white" style={{ fontSize: '2.5rem', whiteSpace: 'normal', width: 'fit-content', lineHeight: '1.2' }}>
                  robocadV
                </h2>
                <h2 className="mb-6 text-3xl font-light leading-tight text-white sm:mb-8 sm:text-[30px]/[38px] lg:mb-0">
                  <span className="xs:block"> 
                    <Translate
                      id="theme.callToAction.progRobots">
                      Program robots 
                    </Translate> 
                  </span> 
                  <span>
                    <Translate
                      id="theme.callToAction.today"> today!
                    </Translate> 
                  </span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="flex flex-wrap lg:justify-end">
                  <a
                    href="https://t.me/SoftVsupport_bot"
                    className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                  >
                    <Translate
                      id="theme.callToAction.submit">
                      Submit Your application
                    </Translate>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <Waves />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
